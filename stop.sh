#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

PORT="${PORT:-3001}"
PID_FILE="${ROOT}/.server.pid"

stopped=0

if [[ -f "$PID_FILE" ]]; then
  PID="$(cat "$PID_FILE" 2>/dev/null || true)"
  if [[ -n "${PID}" ]] && kill -0 "$PID" 2>/dev/null; then
    kill "$PID" 2>/dev/null || true
    # Give it a moment, then force if needed
    for _ in 1 2 3 4 5; do
      if ! kill -0 "$PID" 2>/dev/null; then
        break
      fi
      sleep 0.2
    done
    if kill -0 "$PID" 2>/dev/null; then
      kill -9 "$PID" 2>/dev/null || true
    fi
    echo "Stopped PID ${PID}"
    stopped=1
  fi
  rm -f "$PID_FILE"
fi

# Clean up anything still listening on the port
PIDS="$(lsof -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true)"
if [[ -n "${PIDS}" ]]; then
  echo "$PIDS" | xargs kill 2>/dev/null || true
  sleep 0.3
  PIDS="$(lsof -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true)"
  if [[ -n "${PIDS}" ]]; then
    echo "$PIDS" | xargs kill -9 2>/dev/null || true
  fi
  echo "Freed port ${PORT}"
  stopped=1
fi

if [[ "$stopped" -eq 0 ]]; then
  echo "No server was running on port ${PORT}"
else
  echo "Server stopped"
fi
