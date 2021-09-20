#!/bin/bash

echo "stripping of links blog files"

# change directory temporaly to ./pages/blog
pushd './src/pages/blog/imported/'

# get number of filenames matching regex
length=`find "." -type f -name "*.md" | wc -l`

for filename in *.md; do
    # if filename path is valid
    [ -e "$filename" ] || continue

    f=$(echo "$filename" | cut -f 1 -d '.')
    echo "---"
    echo $f
    echo "---"

    # remove all links
    sed -i "s/\!\{0,1\}\[[^]]*\]([^)]*)//g" $filename
done

echo "blog files stripped of links succefully"

# goes back to starting directory
popd
