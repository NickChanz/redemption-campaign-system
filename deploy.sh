#!/bin/bash

# ==============================================================================
#                      AUTOMATED LARAVEL DEPLOYMENT SCRIPT
# ==============================================================================
# Save this file as 'deploy.sh' in your root directory: ~/htdocs/nickglobal.xyz/deploy.sh
# To make it executable, run: chmod +x deploy.sh
# Usage: ./deploy.sh
# ==============================================================================

# Set strict error handling
set -e

echo "🚀 Starting Deployment Update..."

# 1. Turn on Maintenance Mode (Optional, prevents users accessing during db migration)
echo "🔒 Enabling maintenance mode..."
php artisan down || true

# 2. Fetch latest changes from Git
echo "📥 Pulling latest code from repository..."
git pull origin main

# 3. Install/Update PHP Dependencies
echo "📦 Installing PHP dependencies..."
composer install --no-dev --optimize-autoloader

# 4. Run database migrations
echo "🗄️ Running database migrations..."
php artisan migrate --force

# 5. Compile Frontend Assets (Vite)
echo "🎨 Installing Node dependencies & compiling assets..."
npm install
npm run build

# 6. Optimize Configuration Cache
echo "⚡ Optimizing Laravel caching..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# 7. Restart Queue Workers (to load new code in memory)
echo "🔄 Restarting queue workers (Supervisor)..."
# Since supervisorctl requires root access, we check if we can run it
if sudo -n true 2>/dev/null; then
    sudo supervisorctl restart redemption-worker:*
else
    echo "⚠️  Please restart supervisor worker manually: 'sudo supervisorctl restart redemption-worker:*'"
fi

# 8. Turn off Maintenance Mode
echo "🔓 Disabling maintenance mode..."
php artisan up

echo "✅ Deployment completed successfully!"
