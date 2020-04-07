#!/bin/sh
yarn run build
yarn run export

cp _redirects out/_redirects
