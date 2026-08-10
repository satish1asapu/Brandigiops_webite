#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

PORT="${PORT:-3001}"
PID_FILE="${ROOT}/.server.pid"
LOG_FILE="${ROOT}/.server.log"

if [[ -f "$PID_FILE" ]]; then
  OLD_PID="$(cat "$PID_FILE" 2>/dev/null || true)"
  if [[ -n "${OLD_PID}" ]] && kill -0 "$OLD_PID" 2>/dev/null; then
    echo "Already running on http://localhost:${PORT} (PID ${OLD_PID})"
    exit 0
  fi
  rm -f "$PID_FILE"
fi

if lsof -tiTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Port ${PORT} is already in use. Run ./stop.sh first."
  exit 1
fi

if [[ ! -d node_modules ]]; then
  echo "Installing dependencies..."
  npm install
fi

if [[ ! -d .next ]]; then
  echo "Building..."
  npm run build
fi

echo "Starting on http://localhost:${PORT} ..."
nohup npx next start -p "$PORT" >"$LOG_FILE" 2>&1 &
echo $! >"$PID_FILE"

# Wait briefly for the process to come up
sleep 1
if ! kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  echo "Failed to start. See ${LOG_FILE}"
  rm -f "$PID_FILE"
  exit 1
fi

echo "Started (PID $(cat "$PID_FILE")). Logs: ${LOG_FILE}"
