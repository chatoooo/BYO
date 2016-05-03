#!/bin/sh
node_modules/webpack/bin/webpack.js
cp static/* dist/
node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --content-base ./dist
