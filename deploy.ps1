param ($m)

Write-Output "Building resources for demo website..."
npm run demo-build --quiet >$null
Write-Output "Building main module..."
npm run build --quiet >$null
Write-Output "Staging files for commit to the repository..."
git add . >$null
Write-Output "Comitting files to the repository..."
git commit -m "$($m)"
Write-Output "Pushing to the repository..."
git push
Write-Output "Build successfully deployed!"