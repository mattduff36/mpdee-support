# git-auto-push.ps1
# Usage: .\git-auto-push.ps1

# AI-generated commit message
$Message = "feat: update UI, color system, and hero section for professionalism and friendliness"

Write-Host "Staging all changes..."
git add .

Write-Host "Committing changes..."
git commit -m "$Message"

Write-Host "Pushing to origin/main..."
git push origin main

Write-Host "`nAll done! Press Enter to close."
[void][System.Console]::ReadLine()
