#!/bin/bash

if [ "$1" != "" ]; then
  IMG=$1
  touch yarn.lock

  # Init empty cache file
  if [ ! -f .yarn-cache.tgz ]; then
    echo "Init empty .yarn-cache.tgz"
    tar cvzf .yarn-cache.tgz --files-from /dev/null
  fi

  docker build . -t $IMG

  docker run --rm --entrypoint cat $IMG:latest /tmp/yarn.lock > /tmp/yarn.lock
  if ! diff -q yarn.lock /tmp/yarn.lock > /dev/null  2>&1; then
    echo "Saving Yarn cache"
    docker run --rm --entrypoint tar $IMG:latest czf - /root/.yarn-cache/ > .yarn-cache.tgz
    echo "Saving yarn.lock"
    cp /tmp/yarn.lock yarn.lock
  fi
else
    echo "Positional parameter 1 is required as the docker image tag"
fi
