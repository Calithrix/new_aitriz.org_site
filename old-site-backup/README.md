# Old site backup (drop folder)

Private holding area for an export or backup of the current live [aitriz.org](https://www.aitriz.org) (Joomla). All-Day uses it to compare store items, membership pages, and other content against the redesign before cutover.

This folder is empty on purpose. Do not treat anything here as the public prototype.

## How to use

Drop the backup archive or the extracted files in this folder (zip, tar, or a folder tree). Upload with GitHub Desktop after this folder is on `main`, or commit onto this branch. Large media is fine.

Do not commit secrets: `.env` files, database passwords, PayPal keys, or other credentials.

## Publishing

This folder is not part of the public site. The static prototype is `index.html`, `pages/`, `css/`, and `assets/`. If GitHub Pages or another static publish is turned on from the repo root, keep `old-site-backup/` out of that publish (add `old-site-backup/**` to the Pages or asset ignore list). No ignore rule is in `.gitignore` today because Pages is not configured to serve this repo.
