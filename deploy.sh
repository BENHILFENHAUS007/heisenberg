#!/bin/bash
npm run build && cd dist && git init && git add . && git commit -m "Deploy" && git push -f https://github.com/BENHILFENHAUS007/heisenberg.git HEAD:gh-pages && cd ..
