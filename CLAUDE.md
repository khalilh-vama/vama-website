# Vama Website — Project Brief

## What is Vama?
Vama is a cross-platform messaging app with a built-in AI agent and an integrated crypto wallet. It competes in the space of AI-native communication tools. The core value prop: chat, AI, and money in one place.

Key claims:
- 40,000+ AI skills via the ClawHub marketplace
- End-to-end encrypted messaging
- Vama Wallet (coming soon) — free peer-to-peer payments
- Available on iOS, Android, macOS, Windows, and web

## This Codebase
A static marketing website. No framework — plain HTML, one shared `styles.css`, and minimal vanilla JS.

**Run locally:** `python3 -m http.server 8000` → `http://localhost:8000`

## Pages
| File | Route | Purpose |
|------|-------|---------|
| `index.html` | `/` | Homepage / hero |
| `ai.html` | `/ai` | AI Agent feature page |
| `ai-skills.html` | `/ai/skills` | Live skills directory (pulls from ClawHub API) |
| `messaging.html` | `/messaging` | Messaging feature page |
| `wallet.html` | `/wallet` | Wallet feature page (waitlist) |
| `faq.html` | `/faq` | FAQ with accordion |
| `contact.html` | `/contact` | Contact form + office info |

## Shared Files
- `styles.css` — all styles, single file, no preprocessor
- `download-modal.js` — injected on every page; shows iOS/Android QR codes when any "Download" CTA is clicked

## Design System
- **Font:** Inter (Google Fonts)
- **Primary blue:** `#0071EE`
- **Text:** `#1C1C1C`
- **Background (light):** `#FCFCFC`
- **Border:** `#E5E5E5`
- **Button radius:** 8px (standard), 100px (pill)
- Nav height: 72px, max content width: 1440px, horizontal padding: 80px

## ClawHub API (ai-skills.html)
Live skills are fetched from `https://clawhub.ai/api/v1`.

- **Search:** `GET /api/v1/search?q=TERM&limit=24&offset=N`  
  Returns `{ results: [{ slug, displayName, summary, updatedAt }] }`
- **Detail:** `GET /api/v1/skills/:slug`  
  Returns `{ skill: { stats: { installsAllTime } } }` — used for install counts
- The listing endpoint (`/api/v1/skills`) returns empty; always use search
- Must be served over HTTP (not `file://`) for API calls to work
- English-only filter applied via Unicode range regex
- Categories are inferred from keywords (no category field in API)

## Direction
- The site is actively being built out — new pages and features are added regularly
- Figma file: `7QBfbxql8rVdTLzS1g9a20` (v4 - Claw Integration [WIP])
- Design source of truth is Figma; implementation should match pixel-for-pixel
- Wallet page is a placeholder/waitlist — full feature not yet launched
- An Integrations page (`/integrations`) is planned, inspired by openclaw.ai/integrations

## Key Conventions
- Every page includes `<script src="download-modal.js"></script>` before `</body>`
- Nav "Get Started" button uses `.nav-cta` class with `color: #fff` override
- Footer CTA is the dark (`#1C1C1C`) banner above the footer on every page
- Images/assets are served via Figma MCP asset URLs (`figma.com/api/mcp/asset/...`)
