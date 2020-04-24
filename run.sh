#!/bin/bash

if ! [ -x "$(command -v yarn)" ]; then
  echo "[ERROR] yarn is required to show UI, but not found"
  exit 1
fi

yarn install
yarn start
