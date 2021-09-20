#!/bin/bash

echo "updating t json list file"

# change directory temporaly to ./pages/terms-of-service/
pushd './src/pages/terms-of-service/'

TOS_FILE='../../../tos.json'

# clear careers file
> $TOS_FILE

# get number of filenames matching regex
length=`find "." -type f -name "*.md" | wc -l`

# append json start character
echo "{" >> $TOS_FILE

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
        if [[ "$f" == "index" ]];
        then
            echo "  \"\": \"\"" >> $TOS_FILE
        else
            echo "  \"/$f\": \"$f\"" >> $TOS_FILE
        fi
        break
    else
        if [[ "$f" == "index" ]];
        then
            echo "  \"\": \"\"," >> $TOS_FILE
        else 
            echo "  \"/$f\": \"$f\"," >> $TOS_FILE
        fi
    fi
    ((i=i+1))
done

# append json end character
echo "}" >> $TOS_FILE

echo "new tos file has {$length} entries"

# goes back to starting directory
popd

