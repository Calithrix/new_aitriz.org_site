#!/bin/sh
# Copy the public site into dist/ for Cloudflare Pages.
#
# Pages has no ignore file. Its _redirects format cannot return 404:
# https://developers.cloudflare.com/pages/configuration/redirects/
# (the advanced-redirects table marks a 404 rewrite as unsupported).
# Build output directory: dist
set -eu
cd "$(dirname "$0")/.."
rm -rf dist
mkdir dist
tar \
  --exclude='./dist' \
  --exclude='./.git' \
  --exclude='./reviews' \
  --exclude='./docs' \
  --exclude='./backups' \
  --exclude='./old-site-backup' \
  -cf - . | tar -xf - -C dist
