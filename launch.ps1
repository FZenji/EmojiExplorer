# Launch the Emoji Explorer in the default browser

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$htmlPath = Join-Path -Path $scriptPath -ChildPath "index.html"

Write-Host "Launching Emoji Explorer in your default browser..." -ForegroundColor Green
Start-Process $htmlPath
