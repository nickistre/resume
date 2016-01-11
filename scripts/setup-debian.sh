#!/usr/bin/env bash

# Setup file for deploying on debian and ubuntu-based distros

# Run as root and in the root of the repo directory

apt-get update
apt-get install -y npm

npm install -g bower

pushd html

bower install

popd