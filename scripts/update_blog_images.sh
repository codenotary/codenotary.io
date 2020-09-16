#!/bin/bash
echo "---"
for filename in ./pages/blog/*.md; do
    # if filename path is valid
    [ -e "$filename" ] || continue

    # get all image urls
    IMAGE_URLS=`grep -Po '(\/images\/blog\/.*\.(?:png|jpg|jpeg|gif))(.*?)' $filename`

    # keep only first
    IMAGE_URL=(${IMAGE_URLS})

    # if there's at least one image url
    if [[ $IMAGE_URL ]]
    then
        echo "$filename: image found: $IMAGE_URL"


        # check if in the first 10 lines there is yet an image meta
        IMAGE_META=`sed -n -e '/^image:/p' <(head -n 10 $filename)`

        # if no image met has been found add it
        if [[ "$IMAGE_META" ]]
        then
            echo "$filename: image meta already present"
        else
            echo "adding $IMAGE_URL"

            # add the image meta on 2nd line
            META="image: $IMAGE_URL"
            sed -n -i "p;2a $META" $filename
        fi
    else
        echo "$filename: no image found"
    fi
    echo "---"
done


