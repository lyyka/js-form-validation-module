param ([Parameter(Mandatory)]$m, $dryRun, $suppressOutput)

function PrintMessage {
    param (
        [Parameter(Mandatory)]$message,
        $foregroundColor="Green"
    )

    $params = @{ ForeGroundColor=$foregroundColor }
    $dryRunPrepend = $( if(! $null -eq $dryRun){ '(dry run) ' } )

    Write-Host $($dryRunPrepend + $message) @params
}


if(! $null -eq $dryRun) {
    $dryRun = '--dry-run'
}
if(! $null -eq $suppressOutput) {
    $suppressOutput = '>$null'
}

PrintMessage "Building main module..."
npm run build $suppressOutput

if(! $?) {
    PrintMessage "Building main module failed, check errors above. If output was suppressed, no logs can be found." "Red"
    Break
}

PrintMessage "Building resources for demo website..."
npm run demo-build $suppressOutput

if(! $?) {
    PrintMessage "Building demo website failed, check errors above. If output was suppressed, no logs can be found." "Red"
    Break
}

PrintMessage "Staging files for commit..."
Invoke-Expression $("git add . $($dryRun) $($suppressOutput)")

PrintMessage "Comitting files..."
Invoke-Expression $("git commit $($dryRun) -m " + '"' + $m + '"' + " $($suppressOutput)") 

PrintMessage "Pushing to remote..."
Invoke-Expression $("git push $($dryRun) $($suppressOutput)") 

PrintMessage "Pushing to distribution subtree on remote..."
git subtree push $dryRun --prefix demo/dist origin gh-pages $suppressOutput

PrintMessage "Build successfully deployed!"