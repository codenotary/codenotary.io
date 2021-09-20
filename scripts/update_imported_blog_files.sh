#!/bin/bash

echo "updating imported blog files"

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

    # make link to other blog posts https://www.opvizor.com/blog -> /blog
    sed -i 's/https:\/\/www.opvizor.com\/blog/\/blog/' $filename

    # update image path
    sed -i 's/(images\//(\/images\/blog\//' $filename

    # add the tags meta on 2nd line
    META="tags: [\"Ops\", \"opvizor\"]"
    sed -n -i "p;2a $META" $filename
done

echo "blog files imported succefully"

# goes back to starting directory
popd
