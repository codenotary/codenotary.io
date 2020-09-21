#!/bin/bash

# change directory temporaly to ./pages/blog
pushd './pages/blog/'

BLOG_FILE='../../blog.json'

# clear blog file
> $BLOG_FILE

# get number of filenames matching regex
length=`find "." -type f -name "*.md" | wc -l`

# append json start character
echo "{" >> $BLOG_FILE

i=1
for f in *.md; do
    # if filename path is valid
    [ -e "$f" ] || continue
    
    echo $f

    if [[ $i == $length ]]
    then
        echo "  \"$f\": \"$f\"" >> $BLOG_FILE
        break
    else 
        echo "  \"$f\": \"$f\"," >> $BLOG_FILE
    fi 
    ((i=i+1))
done

# append json end character
echo "}" >> $BLOG_FILE

# goes back to starting directory
popd

