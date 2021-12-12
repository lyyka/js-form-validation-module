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

PrintMessage "Building resources for demo website..."
npm run demo-build {$suppressOutput}

PrintMessage "Building main module..."
npm run build {$suppressOutput}

PrintMessage "Staging files for commit to the repository..."
Invoke-Expression $("git add . $($dryRun) $($suppressOutput)")

PrintMessage "Comitting files to the repository..."
Invoke-Expression $("git commit $($dryRun) -m " + '"' + $m + '"' + " $($suppressOutput)") 

PrintMessage "Pushing to the repository..."
Invoke-Expression $("git push $($dryRun) $($suppressOutput)") 

PrintMessage "Build successfully deployed!"