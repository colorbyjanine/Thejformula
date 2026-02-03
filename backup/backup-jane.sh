#!/bin/bash
# Jane Backup Script
# Creates a timestamped backup of all critical files

BACKUP_DIR="/home/openclaw/.openclaw/workspace/backup/snapshots"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="jane_backup_$TIMESTAMP"
BACKUP_PATH="$BACKUP_DIR/$BACKUP_NAME"

echo "🔄 Creating Jane backup..."
echo "   Backup: $BACKUP_NAME"

# Create backup directory
mkdir -p "$BACKUP_PATH"

# Backup workspace files
echo "   📁 Backing up workspace files..."
cp /home/openclaw/.openclaw/workspace/*.md "$BACKUP_PATH/" 2>/dev/null

# Backup memory directory
echo "   🧠 Backing up memory..."
mkdir -p "$BACKUP_PATH/memory"
cp -r /home/openclaw/.openclaw/workspace/memory/* "$BACKUP_PATH/memory/" 2>/dev/null

# Backup OpenClaw config
echo "   ⚙️ Backing up config..."
cp /home/openclaw/.openclaw/openclaw.json "$BACKUP_PATH/" 2>/dev/null

# Backup TOOLS.md and other important files
cp /home/openclaw/.openclaw/workspace/TOOLS.md "$BACKUP_PATH/" 2>/dev/null
cp /home/openclaw/.openclaw/workspace/IDENTITY.md "$BACKUP_PATH/" 2>/dev/null

# Create manifest
echo "   📝 Creating manifest..."
cat > "$BACKUP_PATH/MANIFEST.txt" << EOF
Jane Backup - $TIMESTAMP
========================
Created: $(date)
Server: $(hostname)

Files included:
$(ls -la "$BACKUP_PATH")

To restore:
1. Copy *.md files to /home/openclaw/.openclaw/workspace/
2. Copy memory/* to /home/openclaw/.openclaw/workspace/memory/
3. Copy openclaw.json to /home/openclaw/.openclaw/
4. Restart gateway: openclaw gateway restart
EOF

# Cleanup old backups (keep last 10)
echo "   🧹 Cleaning old backups..."
cd "$BACKUP_DIR" && ls -t | tail -n +11 | xargs rm -rf 2>/dev/null

echo ""
echo "✅ Backup complete: $BACKUP_PATH"
echo "   Total backups: $(ls -d $BACKUP_DIR/*/ 2>/dev/null | wc -l)"
