param ([Parameter(Mandatory)]$m, $dryRun, $suppressGitOutput)

function PrintMessage {
    param (
        [Parameter(Mandatory)]$message,
        $foregroundColor="Green"
    )

    $params = @{ ForeGroundColor=$foregroundColor }
    
    Write-Host $($message) @params
}

$isDryRun = $( if(! $null -eq $dryRun){ $TRUE }else { $FALSE } )

$dryRunPrepend = $( if($isDryRun){ '(dry run) ' } )
$gitAdd = $( if($isDryRun){ 'git add . --dry-run' }else{ 'git add .' }  )
$gitCommit = $( if($isDryRun){ 'git commit --dry-run -m "' + $m + '"' }else{ 'git commit -m "' + $m + '"' }  )
$gitPush = $( if($isDryRun){ 'git push --dry-run' }else{ 'git push' }  )

PrintMessage "Building resources for demo website..."
npm run demo-build --quiet >$null

PrintMessage "Building main module..."
npm run build --quiet >$null

PrintMessage "$($dryRunPrepend)Staging files for commit to the repository..."
Invoke-Expression $gitAdd >$null

PrintMessage "$($dryRunPrepend)Comitting files to the repository..."
Invoke-Expression $gitCommit >$null

PrintMessage "$($dryRunPrepend)Pushing to the repository..."
Invoke-Expression $gitPush >$null

PrintMessage "Build successfully deployed!"