#!/usr/bin/bash

commitMsg=$1
dryRun=$2
suppressOutput=$3

function PrintMessage {
    message=$1
    Green=$'\e[1;32m'

    if [ ! -z $dryRun ]; then
        dryRunPrepend=" (dry run) "
    fi

    echo $Green$dryRunPrepend $message
}

if [ ! -z $dryRun ]; then
    dryRun='--dry-run'
fi 
if [ ! -z $suppressOutput ]; then 
    suppressOutput=">/dev/null"
fi

PrintMessage "Building main module..."
eval npm run build $suppressOutput

PrintMessage "Building resources for demo website..."
eval npm run demo-build $suppressOutput

PrintMessage "Staging files for commit..."
eval git add . $dryRun $suppressOutput

PrintMessage "Comitting files..."
eval git commit $dryRun -m '"'$commitMsg'"' ${suppressOutput}

PrintMessage "Pushing to remote..."
eval git push $dryRun $suppressOutput

PrintMessage "Pushing to distribution subtree on remote..."
eval git subtree push $dryRun --prefix demo/dist origin gh-pages $suppressOutput
 
PrintMessage "Build successfully deployed!"



