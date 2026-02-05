#!/bin/bash
# Auto-cleanup script - keeps disk usage healthy

echo "🧹 Starting cleanup..."

# 1. Clear all node_modules from projects (Vercel builds from source anyway)
find ~/.openclaw/workspace/projects -name "node_modules" -type d -exec rm -rf {} + 2>/dev/null
echo "✓ Cleared project node_modules"

# 2. Clear npm cache
rm -rf ~/.npm/_cacache 2>/dev/null
echo "✓ Cleared npm cache"

# 3. Clear old logs
find ~/.openclaw -name "*.log" -mtime +7 -delete 2>/dev/null
echo "✓ Cleared old logs"

# 4. Clear Vercel cache
rm -rf ~/.openclaw/workspace/projects/*/.vercel/.cache 2>/dev/null
echo "✓ Cleared Vercel cache"

# Report disk usage
USAGE=$(df -h / | tail -1 | awk '{print $5}')
FREE=$(df -h / | tail -1 | awk '{print $4}')
echo ""
echo "📊 Disk: $USAGE used ($FREE free)"
