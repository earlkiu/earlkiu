# earlkiu.com

Hand-written static site for Earl Kiu's personal portrait brand. No CMS, no build step
— plain HTML/CSS/JS served by Netlify. Images are hosted on Cloudinary.

## Scope of this repo

This repo is **earlkiu.com only** — the portfolio. As of 13 August 2026 every
subdomain lives in its own repo and its own Netlify site:

| Domain | Repo |
|---|---|
| earlkiu.com | `earlkiu/earlkiu` (this one) |
| portrait.earlkiu.com | `earlkiu/portrait` |
| writing.earlkiu.com | `earlkiu/writing` |
| collab.earlkiu.com | `earlkiu/collab` |

The earlier pattern — one repo publishing several subfolders as separate Netlify
sites — was abandoned because this site publishes the repo root, so every
subfolder also served at `earlkiu.com/<folder>` as duplicate content, held back
only by `_redirects` rules that could regress. Separate repos make those paths
404 structurally.

**Do not add a subdomain folder back into this repo**, and do not add
`/portrait` or `/writing` rules to `_redirects` — there is nothing there to
redirect.

## Branch policy

**Work on `dev`. Never commit directly to `main`.**

`main` is the deployed branch and is usually behind. It gets merged from `dev` once
changes are previewed. If `main` and `dev` disagree, `dev` is correct — do not "fix"
`dev` to match `main`.

Note this policy is for *this* repo. `earlkiu/writing` and `earlkiu/portrait`
deploy from `main`.

## Adding a collection

Four files, every time. Missing any one of them leaves the site half-updated.

### 1. `collection/<name>-YYYY-MM.html`

Copy an existing collection page and edit it. Do not write one from scratch — the
slider, nav wiring, and styles are duplicated in each page on purpose.

The number in the slug is the **month of the shoot, not a sequence**. (Slugs used to
be `-01`, `-02`… as sequence numbers; that was retired in July 2026 and 301'd away.)

Per page, these must all agree: `<title>`, `<meta name="description">`, `canonical`,
`og:url`, `og:title`, `og:image`, the image `alt` text, and the
`People · YYYY/MM` line in the bottom bar.

The last slide is a credits slide linking the talent's Instagram, so total slides =
images + 1.

### 2. `collections.js`

Single source of truth. Drives both the grid on `collection.html` and the prev/next
navigation on every individual collection page — they read the same array, so they
can't drift apart.

Paste new entries **anywhere**. The `collections.sort(...)` at the bottom of the file
orders them newest-first by `year`. Do not hand-order entries; the sort overwrites it.

- `title` — name only, no date. It's also the prev/next link text.
- `year` — `YYYY/MM`. The grid label composes `title + year`.
- `cover` — the strongest frame, not necessarily the first slide.

### 3. `sitemap.xml`

Add the extensionless URL (`/collection/name-YYYY-MM`, no `.html`).

### 4. `_redirects`

301 any retired slug to its replacement. Netlify reads this from the site root.

## Conventions that are easy to get wrong

- **Cloudinary URLs need `q_auto/f_auto`** inserted after `/image/upload/`. URLs copied
  straight out of the Cloudinary console don't have it, and the site will serve
  full-size originals without it.
- **Don't hardcode the slide counter.** `counter.textContent = '1 / ' + total` runs on
  load; the value in the span is only a placeholder.
- **`og:url` is the classic copy-paste bug.** When cloning a page, check it points at
  the new slug, not the page it was copied from.

## Note for agents

The GitHub MCP tools can create and update files but **cannot delete them**. A rename
therefore leaves the old file behind, and on Netlify an existing file shadows a
`_redirects` rule — producing two live URLs for the same collection. After any rename,
tell Earl explicitly which files he needs to delete by hand.

Earl can delete a whole directory from the GitHub web UI — open the folder, use the
"..." menu at top right, Delete directory. Point him there rather than at a
file-by-file list.
