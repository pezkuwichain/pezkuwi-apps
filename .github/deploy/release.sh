#!/usr/bin/env bash
# Runs on the web host as the apps-deploy user, fed over ssh by push-main.yml.
#
#   release.sh deploy <sha>     unpack incoming/<sha>.tgz and make it live
#   release.sh rollback <sha>   make an already unpacked release live again
#
# nginx serves /var/www/subdomains/apps, a symlink to $BASE/current, which in
# turn points at releases/<sha>. Going live is one rename of that link, so a
# reader never sees a half-copied tree, and the previous release stays on
# disk for an instant rollback.
set -euo pipefail

BASE=${APPS_DEPLOY_BASE:-/var/www/apps-deploy}
SITE=apps.pezkuwichain.io
KEEP=5

mode=${1:?mode}
sha=${2:?sha}
[[ $sha =~ ^[0-9a-f]{40}$ ]] || { echo "not a commit sha: $sha"; exit 1; }

rel=$BASE/releases/$sha

switch_to () {
  ln -sfn "releases/$1" "$BASE/current.new"
  mv -T "$BASE/current.new" "$BASE/current"
}

# The answer has to come through nginx for the public name, not from the
# disk: that is the path a visitor takes.
served_sha () {
  curl -sf --max-time 10 --resolve "$SITE:443:127.0.0.1" "https://$SITE/.deploy-sha"
}

check_live () {
  local want=$1 entry
  [ "$(served_sha)" = "$want" ] || return 1
  # The page must load: its entry script has to be served too.
  entry=$(curl -sf --max-time 10 --resolve "$SITE:443:127.0.0.1" "https://$SITE/" \
    | grep -o 'src="[^"]*main\.[0-9a-f]*\.js"' | head -1 | cut -d'"' -f2)
  [ -n "$entry" ] || return 1
  curl -sf --max-time 10 -o /dev/null --resolve "$SITE:443:127.0.0.1" "https://$SITE/${entry#/}"
}

prev=$(readlink "$BASE/current" || true)

case $mode in
  deploy)
    tgz=$BASE/incoming/$sha.tgz
    rm -rf "$rel.tmp"
    mkdir -p "$rel.tmp"
    tar -xzf "$tgz" -C "$rel.tmp"
    [ -f "$rel.tmp/index.html" ] || { echo "no index.html in the bundle"; exit 1; }
    [ "$(cat "$rel.tmp/.deploy-sha")" = "$sha" ] || { echo ".deploy-sha does not match $sha"; exit 1; }
    rm -rf "$rel"
    mv "$rel.tmp" "$rel"
    rm -f "$tgz"
    ;;
  rollback)
    [ -d "$rel" ] || { echo "no unpacked release $sha"; ls "$BASE/releases"; exit 1; }
    ;;
  *)
    echo "unknown mode: $mode"; exit 1 ;;
esac

switch_to "$sha"

if ! check_live "$sha"; then
  echo "$SITE does not serve $sha after the switch"
  if [ -n "$prev" ]; then
    switch_to "${prev#releases/}"
    check_live "${prev#releases/}" && echo "restored ${prev#releases/}" || echo "RESTORE FAILED: ${prev#releases/} is not served either"
  fi
  exit 1
fi
echo "live: $sha (was ${prev#releases/})"

# Keep the newest releases, and always the one just replaced.
cd "$BASE/releases"
ls -1t | tail -n +$((KEEP + 1)) | while read -r old; do
  [ "$old" = "$sha" ] || [ "releases/$old" = "$prev" ] || rm -rf -- "$old"
done
