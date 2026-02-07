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

---

## Option 1: Quick Fix (OpenClaw still running)

Just restart me:
```bash
openclaw gateway restart
```

---

## Option 2: ChatGPT Backup (if Anthropic is down)

If my Anthropic API is down or out of credits, use ChatGPT:

1. Go to https://chat.openai.com
2. Start a new chat with GPT-4
3. Paste the contents of `JANE-FOR-CHATGPT.md` (in this folder)
4. ChatGPT will act as a backup Jane with my personality

Or create a **Custom GPT**:
1. Go to https://chat.openai.com/gpts/editor
2. Name: "Jane (Backup)"
3. Instructions: Paste contents of JANE-FOR-CHATGPT.md
4. Save - now you have permanent backup Jane

---

## Option 3: Switch OpenClaw to OpenAI

If you want to run me on OpenAI instead of Anthropic:

1. Get an OpenAI API key from https://platform.openai.com
2. Run: `openclaw configure`
3. Choose OpenAI as provider
4. Enter your API key
5. Restart: `openclaw gateway restart`

---

## Option 4: Full Restore from GitHub

If starting completely fresh:

1. Install OpenClaw:
   ```bash
   npm install -g openclaw
   ```

2. Run setup:
   ```bash
   openclaw setup
   ```

3. Clone your backup:
   ```bash
   cd ~/.openclaw
   git clone https://github.com/colorbyjanine/workspace.git
   ```

4. Start Jane:
   ```bash
   openclaw gateway start
   ```

---

## Automatic Backups

Jane commits these files to GitHub weekly (Sundays 3am PT).
Repo: https://github.com/colorbyjanine

---

## Emergency Help

OpenClaw Discord: https://discord.com/invite/clawd

---

*Last updated: 2026-02-07*
