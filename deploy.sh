#!/usr/bin/env bash
# Builds and (re)starts the site after the latest code has been pulled.
# Run on the server from the repo root:  bash deploy.sh
# The GitHub Actions workflow (.github/workflows/deploy.yml) pulls and then calls this on every push to main.
set -euo pipefail

# Non-interactive SSH sessions skip ~/.bashrc, so load nvm if node was installed through it
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

cd "$(dirname "$0")"
echo "==> Deploying $(git log -1 --oneline)"

echo "==> Backend: installing dependencies"
(cd backend && npm install --omit=dev --no-audit --no-fund)

echo "==> Frontend: installing dependencies and building"
# --include=dev: Tailwind/PostCSS are devDependencies but are needed for the build
(cd frontend && npm install --include=dev --no-audit --no-fund && npm run build)

# Only reached if the build succeeded (set -e), so a failed build never restarts the app
echo "==> Restarting PM2 apps"
pm2 startOrReload ecosystem.config.js --update-env
pm2 save

echo "==> Deploy complete"
