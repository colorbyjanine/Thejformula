# How to Restore Jane

If something goes wrong and you need to bring Jane back, here's how:

## What Makes Jane "Jane"

These files in the workspace contain my personality, memories, and context:

```
SOUL.md         - My personality and values
IDENTITY.md     - My name and basic info
USER.md         - What I know about you
MEMORY.md       - My long-term memories
AGENTS.md       - My operating guidelines
TOOLS.md        - Local setup notes
memory/         - Daily logs and memories
```

## Quick Recovery Steps

1. **If OpenClaw is running but Jane seems "off":**
   - Just restart: `openclaw gateway restart`

2. **If you need to restore from backup:**
   - These files are backed up to GitHub
   - Copy them back to `~/.openclaw/workspace/`
   - Restart OpenClaw

3. **If starting completely fresh:**
   - Install OpenClaw: `npm install -g openclaw`
   - Run setup: `openclaw setup`
   - Copy all the files from backup to `~/.openclaw/workspace/`
   - Start: `openclaw gateway start`

## Automatic Backups

Jane commits these files to GitHub daily. Check:
- https://github.com/colorbyjanine (your repos)

## Emergency Contact

If you can't figure it out, the OpenClaw Discord can help:
- https://discord.com/invite/clawd

---

*Last updated: 2026-02-04*
