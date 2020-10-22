#!/bin/bash

echo "updating imported blog files"

# change directory temporaly to ./pages/blog
pushd './pages/blog/imported/'

# get number of filenames matching regex
length=`find "." -type f -name "*.md" | wc -l`

for filename in *.md; do
    # if filename path is valid
    [ -e "$filename" ] || continue

    f=$(echo "$filename" | cut -f 1 -d '.')
    echo "---"
    echo $f
    echo "---"

    sed -i 's/(images\//(\/images\/blog\//' $filename
done

echo "blog files imported succefully"

# goes back to starting directory
popd
