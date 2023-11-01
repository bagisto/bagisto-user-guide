#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

echo 'userguide.bagisto.com' > CNAME

git init
git add -A
git commit -m 'Deploy userguide to GitHub'
git push -f git@github.com:bagisto/bagisto-user-guide.git master:gh-pages

cd -
