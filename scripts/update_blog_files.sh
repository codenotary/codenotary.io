#!/bin/bash

echo "updating blog json list file"

# change directory temporaly to ./pages/blog
pushd './src/pages/blog/'

BLOG_FILE='../../../blog.json'

# clear blog file
> $BLOG_FILE

# get number of filenames matching regex
length=`find "." -type f -name "*.md" | wc -l`

# append json start character
echo "{" >> $BLOG_FILE

i=1
for filename in *.md; do
    # if filename path is valid
    [ -e "$filename" ] || continue
    
    f=$(echo "$filename" | cut -f 1 -d '.')
    echo "---"
    echo $f
    echo "---"

    if [[ $i == $length ]]
    then
        echo "  \"/$f\": \"$f\"" >> $BLOG_FILE
        break
    else 
        echo "  \"/$f\": \"$f\"," >> $BLOG_FILE
    fi 
    ((i=i+1))
done

# append json end character
echo "}" >> $BLOG_FILE

echo "new blog file has {$length} entries"

# goes back to starting directory
popd

