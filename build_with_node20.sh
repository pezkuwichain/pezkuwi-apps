#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm use 20
echo "Node version: $(node --version)"
echo "Which node: $(which node)"
echo "Which yarn: $(which yarn)"

cd /home/mamostehp/pezkuwi-apps

echo "=== Running yarn install ==="
yarn install

echo "=== Running yarn build ==="
yarn build
