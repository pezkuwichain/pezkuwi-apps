#!/usr/bin/env bash
# Starts a bizinikiwi dev node for the .slow. specs, with its RPC on the port
# the specs connect to (test-support BIZINIKIWI_PORT, 30333), and waits until
# it answers. Fails if it never does, so a spec run cannot start without it.
set -euo pipefail

# pinned by digest: a tag can move under a run
IMAGE=pezkuwi/bizinikiwi@sha256:130e8ddd1ec36b00422fcfe565fb596d6a81889e3aeb5f45d13bd92993d09a19
PORT=${TEST_BIZINIKIWI_PORT:-30333}

docker run -d --name dev-node -p "$PORT:9944" "$IMAGE" --dev --rpc-external --rpc-cors all

for _ in $(seq 1 60); do
  if curl -sf -H 'Content-Type: application/json' \
      -d '{"id":1,"jsonrpc":"2.0","method":"system_chain"}' "http://127.0.0.1:$PORT" > /dev/null; then
    echo "dev node answers on $PORT"
    exit 0
  fi
  sleep 2
done

echo "dev node did not answer on $PORT within 120s"
docker logs dev-node 2>&1 | tail -40
exit 1
