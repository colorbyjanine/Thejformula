#!/bin/bash
# Jane Health Check Script
# Run this to verify everything is working

echo "🔍 JANE HEALTH CHECK"
echo "===================="
echo ""

# Check OpenClaw Gateway
echo "1. OpenClaw Gateway..."
if pgrep -f "openclaw" > /dev/null; then
    echo "   ✅ Gateway is running"
else
    echo "   ❌ Gateway is DOWN - run: openclaw gateway start"
fi

# Check website
echo ""
echo "2. Website (thejformula.com)..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://thejformula.com)
if [ "$HTTP_CODE" = "200" ]; then
    echo "   ✅ Website is live (HTTP $HTTP_CODE)"
else
    echo "   ❌ Website issue (HTTP $HTTP_CODE)"
fi

# Check disk space
echo ""
echo "3. Disk Space..."
DISK_USE=$(df / | tail -1 | awk '{print $5}' | tr -d '%')
if [ "$DISK_USE" -lt 90 ]; then
    echo "   ✅ Disk OK ($DISK_USE% used)"
else
    echo "   ⚠️ Disk LOW ($DISK_USE% used) - need to free space"
fi

# Check memory files exist
echo ""
echo "4. Memory Files..."
if [ -f "/home/openclaw/.openclaw/workspace/MEMORY.md" ]; then
    echo "   ✅ MEMORY.md exists"
else
    echo "   ❌ MEMORY.md missing!"
fi

if [ -d "/home/openclaw/.openclaw/workspace/memory" ]; then
    echo "   ✅ memory/ directory exists"
else
    echo "   ❌ memory/ directory missing!"
fi

# Check config
echo ""
echo "5. OpenClaw Config..."
if [ -f "/home/openclaw/.openclaw/openclaw.json" ]; then
    echo "   ✅ Config file exists"
else
    echo "   ❌ Config file missing!"
fi

echo ""
echo "===================="
echo "Health check complete!"
