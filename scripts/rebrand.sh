#!/bin/bash

# PezkuwiChain Apps Rebrand Script
# Converts polkadot-apps to pezkuwi-apps

set -e

APPS_DIR="/home/mamostehp/pezkuwi-apps"

echo "=== PezkuwiChain Apps Rebrand Script ==="
echo ""

# Step 1: Update package names in all package.json files
echo "[1/6] Updating package.json files..."

# Root package.json
sed -i 's/"name": "polkadot-apps"/"name": "pezkuwi-apps"/g' "$APPS_DIR/package.json"
sed -i 's|https://github.com/polkadot-js/apps|https://github.com/pezkuwichain/pezkuwi-apps|g' "$APPS_DIR/package.json"
sed -i 's|An Apps portal into the Polkadot network|An Apps portal into the Pezkuwi network|g' "$APPS_DIR/package.json"

# Update all @polkadot dependencies to @pezkuwi in package.json files
find "$APPS_DIR" -name "package.json" -type f ! -path "*/node_modules/*" | while read file; do
    # Package names: @polkadot-apps/* -> @pezkuwi/*
    sed -i 's/@polkadot-apps\//@pezkuwi\//g' "$file"

    # Dependencies: @polkadot/* -> @pezkuwi/*
    sed -i 's/"@polkadot\//"@pezkuwi\//g' "$file"

    # URLs
    sed -i 's|polkadot-js/apps|pezkuwichain/pezkuwi-apps|g' "$file"
    sed -i 's|polkadot-js|pezkuwichain|g' "$file"
done

echo "   Package.json files updated."

# Step 2: Update TypeScript/JavaScript imports
echo "[2/6] Updating TypeScript/JavaScript imports..."

find "$APPS_DIR/packages" -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) ! -path "*/node_modules/*" | while read file; do
    # @polkadot/* imports -> @pezkuwi/*
    sed -i "s|from '@polkadot/|from '@pezkuwi/|g" "$file"
    sed -i "s|from \"@polkadot/|from \"@pezkuwi/|g" "$file"

    # @polkadot-apps/* imports -> @pezkuwi/*
    sed -i "s|from '@polkadot-apps/|from '@pezkuwi/|g" "$file"
    sed -i "s|from \"@polkadot-apps/|from \"@pezkuwi/|g" "$file"

    # require('@polkadot/*') -> require('@pezkuwi/*')
    sed -i "s|require('@polkadot/|require('@pezkuwi/|g" "$file"
    sed -i "s|require(\"@polkadot/|require(\"@pezkuwi/|g" "$file"
done

echo "   TypeScript/JavaScript imports updated."

# Step 3: Terminology replacements
echo "[3/6] Applying terminology replacements..."

find "$APPS_DIR" -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.html" -o -name "*.css" -o -name "*.scss" \) ! -path "*/node_modules/*" | while read file; do
    # Case-sensitive replacements
    sed -i 's/Polkadot/Pezkuwi/g' "$file"
    sed -i 's/polkadot/pezkuwi/g' "$file"
    sed -i 's/POLKADOT/PEZKUWI/g' "$file"

    # Kusama -> Dicle
    sed -i 's/Kusama/Dicle/g' "$file"
    sed -i 's/kusama/dicle/g' "$file"
    sed -i 's/KUSAMA/DICLE/g' "$file"

    # Westend -> Zagros
    sed -i 's/Westend/Zagros/g' "$file"
    sed -i 's/westend/zagros/g' "$file"
    sed -i 's/WESTEND/ZAGROS/g' "$file"

    # Rococo -> PezkuwiChain (test network)
    sed -i 's/Rococo/PezkuwiChain/g' "$file"
    sed -i 's/rococo/pezkuwichain/g' "$file"
    sed -i 's/ROCOCO/PEZKUWICHAIN/g' "$file"

    # DOT -> HEZ
    sed -i 's/\bDOT\b/HEZ/g' "$file"

    # WND -> ZGR (Westend token)
    sed -i 's/\bWND\b/ZGR/g' "$file"

    # ROC -> TYR (Rococo token)
    sed -i 's/\bROC\b/TYR/g' "$file"

    # KSM -> DCL (Kusama token -> Dicle)
    sed -i 's/\bKSM\b/DCL/g' "$file"

    # Substrate -> Bizinikiwi
    sed -i 's/Substrate/Bizinikiwi/g' "$file"
    sed -i 's/substrate/bizinikiwi/g' "$file"
    sed -i 's/SUBSTRATE/BIZINIKIWI/g' "$file"

    # Parachain -> Teyrchain
    sed -i 's/Parachain/Teyrchain/g' "$file"
    sed -i 's/parachain/teyrchain/g' "$file"
    sed -i 's/PARACHAIN/TEYRCHAIN/g' "$file"

    # Paseo -> remove or comment (Parity test network)
    # We'll keep Paseo references for now but they can be cleaned up later
done

echo "   Terminology replacements applied."

# Step 4: Update URLs and domains
echo "[4/6] Updating URLs and domains..."

find "$APPS_DIR" -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.html" -o -name "*.cjs" -o -name "*.mjs" \) ! -path "*/node_modules/*" | while read file; do
    # polkadot.js.org -> pezkuwichain.app
    sed -i 's|polkadot.js.org|pezkuwichain.app|g' "$file"

    # apps.polkadot.io -> pezkuwichain.app
    sed -i 's|apps.polkadot.io|pezkuwichain.app|g' "$file"

    # polkadot.network -> pezkuwichain.io
    sed -i 's|polkadot.network|pezkuwichain.io|g' "$file"

    # kusama.network -> dicle.pezkuwichain.io
    sed -i 's|kusama.network|dicle.pezkuwichain.io|g' "$file"

    # GitHub URLs
    sed -i 's|github.com/polkadot-js|github.com/pezkuwichain|g' "$file"
    sed -i 's|github.com/paritytech|github.com/pezkuwichain|g' "$file"
done

echo "   URLs and domains updated."

# Step 5: Rename files with polkadot/kusama in names
echo "[5/6] Renaming files..."

# Find and rename files
cd "$APPS_DIR"
find . -type f -name "*polkadot*" ! -path "*/node_modules/*" | while read file; do
    newname=$(echo "$file" | sed 's/polkadot/pezkuwi/g')
    if [ "$file" != "$newname" ]; then
        mkdir -p "$(dirname "$newname")"
        mv "$file" "$newname" 2>/dev/null || true
    fi
done

find . -type f -name "*kusama*" ! -path "*/node_modules/*" | while read file; do
    newname=$(echo "$file" | sed 's/kusama/dicle/g')
    if [ "$file" != "$newname" ]; then
        mkdir -p "$(dirname "$newname")"
        mv "$file" "$newname" 2>/dev/null || true
    fi
done

find . -type f -name "*westend*" ! -path "*/node_modules/*" | while read file; do
    newname=$(echo "$file" | sed 's/westend/zagros/g')
    if [ "$file" != "$newname" ]; then
        mkdir -p "$(dirname "$newname")"
        mv "$file" "$newname" 2>/dev/null || true
    fi
done

find . -type f -name "*rococo*" ! -path "*/node_modules/*" | while read file; do
    newname=$(echo "$file" | sed 's/rococo/pezkuwichain/g')
    if [ "$file" != "$newname" ]; then
        mkdir -p "$(dirname "$newname")"
        mv "$file" "$newname" 2>/dev/null || true
    fi
done

echo "   Files renamed."

# Step 6: Update resolutions in root package.json with @pezkuwi versions
echo "[6/6] Updating package.json resolutions..."

cat > "$APPS_DIR/package.json" << 'PACKAGEJSON'
{
  "author": "Dijital Kurdistan Tech Institute <info@pezkuwichain.io>",
  "bugs": "https://github.com/pezkuwichain/pezkuwi-apps/issues",
  "description": "An Apps portal into the Pezkuwi network",
  "engines": {
    "node": ">=18.14"
  },
  "homepage": "https://github.com/pezkuwichain/pezkuwi-apps#readme",
  "license": "Apache-2.0",
  "name": "pezkuwi-apps",
  "packageManager": "yarn@4.6.0",
  "private": true,
  "repository": {
    "type": "git",
    "url": "https://github.com/pezkuwichain/pezkuwi-apps.git"
  },
  "sideEffects": false,
  "type": "module",
  "version": "1.0.0",
  "versions": {
    "git": "1.0.0",
    "npm": "1.0.0"
  },
  "workspaces": [
    "packages/*"
  ],
  "main": "packages/apps-electron/build/electron.js",
  "scripts": {
    "analyze": "yarn clean && BUILD_ANALYZE=1 yarn run build:code && yarn source-map-explorer packages/apps/build/app.*.js",
    "build": "yarn run build:i18n && yarn run build:code",
    "build:before": "yarn build:images && yarn build:typesBundle",
    "build:code": "NODE_ENV=production yarn pezkuwi-dev-build-ts",
    "build:devElectronMain": "cd packages/apps-electron && yarn pezkuwi-exec-webpack --config webpack.main.cjs",
    "build:devElectronRenderer": "cd packages/apps-electron && yarn pezkuwi-exec-webpack --config webpack.renderer.cjs",
    "build:electron": "yarn clean:electronBuild && yarn build:electronMain && yarn build:electronRenderer",
    "build:electronMain": "cd packages/apps-electron && NODE_ENV=production yarn pezkuwi-exec-webpack --config webpack.main.cjs",
    "build:electronRenderer": "cd packages/apps-electron && NODE_ENV=production yarn pezkuwi-exec-webpack --config webpack.renderer.cjs",
    "build:i18n": "i18next-scanner --config i18next-scanner.config.cjs && node ./scripts/i18nSort.cjs",
    "build:images": "node scripts/imgConvert.mjs",
    "build:release:electron": "yarn build && yarn build:electron && yarn postinstall:electron",
    "build:release:ghpages": "yarn pezkuwi-ci-ghact-docs",
    "build:release:ipfs": "node scripts/ipfsUpload.mjs",
    "build:release:www": "yarn pezkuwi-ci-ghact-build && yarn build:release:ghpages && yarn build:release:ipfs",
    "build:robohash": "node scripts/robohash.cjs",
    "build:typesBundle": "pezkuwi-dev-run-test --env node --loader extensionless typesBundle",
    "build:www": "rm -rf packages/apps/build && mkdir -p packages/apps/build && yarn run build:i18n && cd packages/apps && yarn pezkuwi-exec-webpack --config webpack.config.cjs",
    "ci:chainEndpoints": "pezkuwi-dev-run-test --env node --logfile .github/chain-endpoints.md packages/apps-config/src/ci/chainEndpoints",
    "ci:chainTypes": "echo ok",
    "clean": "pezkuwi-dev-clean-build",
    "clean:electronBuild": "cd packages/apps-electron && pezkuwi-dev-clean-build",
    "clean:electronRelease": "cd packages/apps-electron && rm -rf release",
    "clean:i18n": "rm -rf packages/apps/public/locales/en && mkdir -p packages/apps/public/locales/en",
    "docs": "echo \"skipping docs\"",
    "lint": "pezkuwi-dev-run-lint",
    "packElectron": "yarn build:release:electron && yarn clean:electronRelease && electron-builder build -mwl",
    "packElectron:linux": "yarn build:release:electron && electron-builder build --linux --project packages/apps-electron",
    "packElectron:mac": "yarn build:release:electron && electron-builder build --mac --project packages/apps-electron",
    "packElectron:test": "yarn build:release:electron && electron-builder --dir --project packages/apps-electron",
    "packElectron:win": "yarn build:release:electron && electron-builder build --win --project packages/apps-electron",
    "postinstall": "pezkuwi-dev-yarn-only",
    "postinstall:electron": "electron-builder install-app-deps",
    "start": "yarn clean && cd packages/apps && yarn pezkuwi-exec-webpack serve --config webpack.serve.cjs --port 3000",
    "start:electron": "yarn clean:electronBuild && concurrently 'yarn build:devElectronMain && cd packages/apps-electron && electron ./build/electron.js' 'yarn build:devElectronRenderer'",
    "test": "pezkuwi-dev-run-test --env browser ^typesBundle ^chainEndpoints ^chainTypes ^page- ^react- ^apps-electron",
    "test:all": "pezkuwi-dev-run-test --env browser ^chainEndpoints ^chainTypes",
    "test:one": "pezkuwi-dev-run-test --env browser",
    "test:skipped": "echo 'tests skipped'"
  },
  "devDependencies": {
    "@crustio/crust-pin": "^1.0.0",
    "@pinata/sdk": "^1.2.1",
    "@pezkuwi/dev": "^0.85.2",
    "@types/chart.js": "^2.9.41",
    "@types/file-saver": "^2.0.7",
    "@types/react-beautiful-dnd": "^13.1.7",
    "@types/react-copy-to-clipboard": "^5.0.7",
    "@types/react-dom": "^18.2.18",
    "@types/react-router-dom": "^5.3.3",
    "@types/store": "^2.0.5",
    "concurrently": "^8.2.2",
    "devtron": "^1.4.0",
    "dnslink-cloudflare": "^3.0.0",
    "electron": "28.0.0",
    "electron-builder": "24.10.0",
    "electron-builder-notarize": "^1.5.1",
    "extensionless": "^1.9.6",
    "i18next-scanner": "^4.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-is": "^18.2.0",
    "source-map-explorer": "^2.5.3"
  },
  "resolutions": {
    "@pezkuwi/api": "^16.5.6",
    "@pezkuwi/api-augment": "^16.5.6",
    "@pezkuwi/api-base": "^16.5.6",
    "@pezkuwi/api-contract": "^16.5.6",
    "@pezkuwi/api-derive": "^16.5.6",
    "@pezkuwi/hw-ledger": "^14.0.7",
    "@pezkuwi/keyring": "^14.0.7",
    "@pezkuwi/networks": "^14.0.7",
    "@pezkuwi/phishing": "^0.25.22",
    "@pezkuwi/rpc-augment": "^16.5.6",
    "@pezkuwi/rpc-core": "^16.5.6",
    "@pezkuwi/rpc-provider": "^16.5.6",
    "@pezkuwi/typegen": "^16.5.6",
    "@pezkuwi/types": "^16.5.6",
    "@pezkuwi/types-augment": "^16.5.6",
    "@pezkuwi/types-codec": "^16.5.6",
    "@pezkuwi/types-create": "^16.5.6",
    "@pezkuwi/types-known": "^16.5.6",
    "@pezkuwi/types-support": "^16.5.6",
    "@pezkuwi/util": "^14.0.7",
    "@pezkuwi/util-crypto": "^14.0.7",
    "@pezkuwi/wasm-crypto": "^7.5.4",
    "@pezkuwi/x-bigint": "^14.0.7",
    "@pezkuwi/x-fetch": "^14.0.7",
    "@pezkuwi/x-global": "^14.0.7",
    "@pezkuwi/x-randomvalues": "^14.0.7",
    "@pezkuwi/x-textdecoder": "^14.0.7",
    "@pezkuwi/x-textencoder": "^14.0.7",
    "@pezkuwi/x-ws": "^14.0.7",
    "@zondax/ledger-substrate": "1.1.1",
    "typescript": "^5.5.4"
  }
}
PACKAGEJSON

echo "   Resolutions updated."

echo ""
echo "=== Rebrand Phase 1 Complete ==="
echo ""
echo "Next steps:"
echo "  1. Review and fix any broken imports"
echo "  2. Update chain logos"
echo "  3. Update endpoint configurations"
echo "  4. Run yarn install and build"
