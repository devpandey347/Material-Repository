# Regenerate CHE110, CSE121, CSE320, ECE249, ECE279 with download buttons

$manualSubjects = @{
    'CHE110' = '🧪 CHE110'
    'CSE121' = '💻 CSE121'
    'CSE320' = '💻 CSE320'
    'ECE249' = '⚡ ECE249'
    'ECE279' = '⚡ ECE279'
}

foreach ($subjectCode in $manualSubjects.Keys) {
    $icon = $manualSubjects[$subjectCode]
    $files = Get-ChildItem -Path "a:\NOTES\notes-website\files\$subjectCode" -Recurse -File
    
    $htmlContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$subjectCode - DEV PANDEY</title>
    <link rel="stylesheet" href="../subject-style.css">
</head>
<body>
    <div class="header">
        <h1>$icon</h1>
        <div class="breadcrumb">
            <a href="../index.html">⬅ Back to Home</a>
        </div>
    </div>

    <!-- Fixed Home Button -->
    <a href="../index.html" class="home-button">🏠 Home</a>

    <div class="container">
        <div class="files-section">
            <h2 class="section-title">📁 Available Resources</h2>
            
            <div class="file-list">
"@
    
    # Group files by parent folder
    $filesByFolder = $files | Group-Object { $_.Directory.Name }
    
    # Natural sort function for proper numeric ordering
    function Get-NaturalSortKey {
        param($name)
        [regex]::Replace($name, '\d+', { param($m) $m.Value.PadLeft(20, '0') })
    }
    
    $counter = 0
    foreach ($folderGroup in $filesByFolder | Sort-Object Name) {
        $folderName = $folderGroup.Name
        
        # Add folder header if not the subject root
        if ($folderGroup.Group[0].Directory.Name -ne $subjectCode) {
            $htmlContent += @"

                <div class="folder-header">
                    <h3>📂 $folderName</h3>
                </div>
"@
        }
        
        # Sort files naturally within each folder
        $sortedFiles = $folderGroup.Group | Sort-Object { Get-NaturalSortKey $_.Name }
        
        foreach ($file in $sortedFiles) {
            $counter++
            $fileName = $file.Name
            $websiteRoot = "a:\NOTES\notes-website\"
            $fullPath = $file.FullName
            if ($fullPath.ToLower().StartsWith($websiteRoot.ToLower())) {
                $relativePath = $fullPath.Substring($websiteRoot.Length).Replace("\", "/")
            }
            else {
                $relativePath = $fullPath.Replace("\", "/")
            }
            $extension = $file.Extension.ToLower()
        
            $icon = switch ($extension) {
                '.pdf' { '📄' }
                '.ppt' { '📊' }
                '.pptx' { '📊' }
                '.doc' { '📝' }
                '.docx' { '📝' }
                '.jpg' { '🖼️' }
                '.jpeg' { '🖼️' }
                '.png' { '🖼️' }
                '.txt' { '📃' }
                default { '📄' }
            }
        
            $fileType = switch ($extension) {
                '.pdf' { 'PDF Document' }
                { $_ -in '.ppt', '.pptx' } { 'PowerPoint Presentation' }
                { $_ -in '.doc', '.docx' } { 'Word Document' }
                { $_ -in '.jpg', '.jpeg', '.png' } { 'Image File' }
                '.txt' { 'Text File' }
                default { 'File' }
            }

            $dataType = switch ($extension) {
                '.pdf' { 'pdf' }
                { $_ -in '.ppt', '.pptx' } { 'ppt' }
                { $_ -in '.doc', '.docx' } { 'doc' }
                { $_ -in '.jpg', '.jpeg', '.png' } { 'image' }
                '.txt' { 'text' }
                default { 'pdf' }
            }
        
            $htmlContent += @"

                <div class="file-item" data-type="$dataType">
                    <div class="file-info">
                        <div class="file-icon">$icon</div>
                        <div class="file-details">
                            <h3>$fileName</h3>
                            <p>$fileType</p>
                        </div>
                    </div>
                    <a href="../$relativePath" class="file-action" download>Download</a>
                </div>
"@
        }
    }
    
    $htmlContent += @"

            </div>
        </div>
    </div>

    <script src="../subject-script.js"></script>
</body>
</html>
"@
    
    $outputPath = "a:\NOTES\notes-website\subjects\$subjectCode.html"
    $htmlContent | Out-File -FilePath $outputPath -Encoding UTF8
    Write-Host "Created $subjectCode.html with $counter files"
}

Write-Host "`nManual subject pages regenerated successfully!"
