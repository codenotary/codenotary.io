#!/bin/bash

echo "updating careers json list file"

# change directory temporaly to ./pages/careers
pushd './pages/careers/'

CAREERS_FILE='../../careers.json'

# clear careers file
> $CAREERS_FILE

# get number of filenames matching regex
length=`find "." -type f -name "*.md" | wc -l`

# append json start character
echo "{" >> $CAREERS_FILE

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
        echo "  \"/$f\": \"$f\"" >> $CAREERS_FILE
        break
    else 
        echo "  \"/$f\": \"$f\"," >> $CAREERS_FILE
    fi 
    ((i=i+1))
done

# append json end character
echo "}" >> $CAREERS_FILE

echo "new careers file has {$length} entries"

# goes back to starting directory
popd

