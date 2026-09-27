# Backing up live aitriz.org

Date started: 27 September 2026.
This folder is instructions and a URL list, not a restore-ready Joomla dump.

The new static prototype stays in the repo root. Do not overwrite it with a Joomla mirror.

## Two different backups

| Kind | What it is | Who can make it | Restores the live site? |
| --- | --- | --- | --- |
| Public freeze | HTML, CSS, public images as a visitor sees them | Anyone with wget / HTTrack | No. Looks-like copy only. |
| Joomla restore | Site files + MySQL (Akeeba `.jpa` or cPanel full backup) | Langevin or whoever has hosting / Joomla admin | Yes. |

We do not have hosting credentials from this workspace. Cloudflare is only the proxy (DNS moved onto Cloudflare around 26 Sep 2026). Origin is still a Joomla host. Email is Microsoft 365. Domain registrar is Domain.com; domain expires 3 Aug 2027.

## Already on the public web

Wayback Machine homepage capture, 9 June 2026:

https://web.archive.org/web/20260609211033/https://www.aitriz.org/

Submit a fresh capture (click these in a browser; Save Page Now was rate-limited from automation today):

- https://web.archive.org/save/https://www.aitriz.org/
- https://web.archive.org/save/https://www.aitriz.org/membership/join
- https://web.archive.org/save/https://www.aitriz.org/membership
- https://web.archive.org/save/https://www.aitriz.org/our-supporters
- https://web.archive.org/save/https://www.aitriz.org/about-us/elected-officers
- https://web.archive.org/save/https://www.aitriz.org/about-us/taxes
- https://web.archive.org/save/https://www.aitriz.org/trizcon2025

## Public freeze on your machine (about 10 minutes)

From a folder *outside* this site's HTML tree:

```bash
bash snapshot.sh
```

Or the raw command in `snapshot.sh`. Zip the resulting directory and keep one copy off GitHub.

Do not commit member-only pages, checkout flows, or Form 990 PDFs to this repo even though the repo is private.

## Real restore copy (ask Langevin)

Send him this:

> Please export a full Akeeba backup of aitriz.org today (Joomla admin → Akeeba Backup → backup now), or a cPanel Full Backup of the home directory plus MySQL. We will not change production. Put the `.jpa` / zip somewhere off the server (Drive or USB) and tell me when it is dated.

Without that file, a bad Joomla edit cannot be rolled back.
