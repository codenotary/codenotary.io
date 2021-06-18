#!/bin/bash
if [[ -n "$1" ]] && [[ "$1" == "--docker" ]]; then
    if docker --version > /dev/null 2>&1; then
        pushd ./tests
        docker run -u $(id -u ${USER}):$(id -g ${USER}) --rm -v $(pwd)/styles:/styles --rm -v $(realpath ../pages):/pages --rm -v $(pwd):/work -w /work jdkato/vale /pages
        popd
        exit 0
    else
        echo "--docker option provided but docker command not found or daemon unresponsive"
        exit 2
    fi
fi

if vale --help > /dev/null 2>&1; then
    pushd ./tests
    vale ../pages
    popd
else
    if [[ ! -d "./vale_dir" ]]; then
        mkdir ./vale_dir && pushd ./vale_dir
        curl -sfL https://install.goreleaser.com/github.com/ValeLint/vale.sh | sh -s v2.10.3
        export PATH="$(pwd)/bin:$PATH"
        popd
        pushd ./tests
        vale ../pages
        popd
    else
        pushd vale_dir
        export PATH="$(pwd)/bin:$PATH"
        popd
        pushd ./tests
        echo $PATH
        vale ../pages
        popd
    fi
fi
