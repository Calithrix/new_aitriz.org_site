# Old site backup (pointer)

Private pointer to the export of the current live [aitriz.org](https://www.aitriz.org) (Joomla). All-Day uses it to compare store items, membership pages, and other content against the redesign before cutover.

This folder holds no files on purpose. Do not treat anything here as the public prototype.

## Where the backup lives

The full Joomla backup is too large for GitHub (~560 MB), so the source of truth is Dropbox, not this repo.

- Dropbox folder: `/AITRIZ Institute/aitriz.org/site-backup-9-27-2026`
- Open in Dropbox: https://www.dropbox.com/home/AITRIZ%20Institute/aitriz.org/site-backup-9-27-2026
- File: `site-www.aitriz.org-20260927-144247-U_WXVaWH-CP57jJ_.jpa`
- Type: Akeeba Backup archive (`.jpa`), site files plus MySQL dump
- Size: about 560 MB
- Taken: 2026-09-27

The folder also contains a second copy with ` - Copy` appended to the name. It is the same size and is optional clutter; use the primary file above.

Do **not** commit the `.jpa` or an extracted copy of the Joomla tree into this repo. Download from Dropbox and extract locally (Akeeba Kickstart or eXtract Wizard) when you need to inventory content.

Do not commit secrets: `.env` files, database passwords, PayPal keys, or other credentials. The extracted backup contains Joomla `configuration.php` with database credentials; keep it out of GitHub.

## Publishing

This folder is not part of the public site. The static prototype is `index.html`, `pages/`, `css/`, and `assets/`. If GitHub Pages or another static publish is turned on from the repo root, keep `old-site-backup/` out of that publish (add `old-site-backup/**` to the Pages or asset ignore list). No ignore rule is in `.gitignore` today because Pages is not configured to serve this repo.
