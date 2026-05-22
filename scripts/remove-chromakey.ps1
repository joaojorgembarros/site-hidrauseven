param(
  [Parameter(Mandatory = $true)]
  [string]$InputPath,

  [Parameter(Mandatory = $true)]
  [string]$OutputPath,

  [int]$Tolerance = 80
)

Add-Type -AssemblyName System.Drawing

$resolvedInput = (Resolve-Path -LiteralPath $InputPath).Path
$source = [System.Drawing.Bitmap]::new($resolvedInput)
$output = [System.Drawing.Bitmap]::new(
  $source.Width,
  $source.Height,
  [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
)

for ($y = 0; $y -lt $source.Height; $y++) {
  for ($x = 0; $x -lt $source.Width; $x++) {
    $pixel = $source.GetPixel($x, $y)
    $greenDistance = [Math]::Abs($pixel.R - 0) + [Math]::Abs($pixel.G - 255) + [Math]::Abs($pixel.B - 0)

    if ($greenDistance -le $Tolerance) {
      $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $pixel.R, $pixel.G, $pixel.B))
    } else {
      $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $pixel.R, $pixel.G, $pixel.B))
    }
  }
}

$targetDirectory = Split-Path -Parent $OutputPath
if ($targetDirectory) {
  New-Item -ItemType Directory -Force -Path $targetDirectory | Out-Null
}

$resolvedOutput = if ([System.IO.Path]::IsPathRooted($OutputPath)) {
  $OutputPath
} else {
  Join-Path (Get-Location) $OutputPath
}

$output.Save($resolvedOutput, [System.Drawing.Imaging.ImageFormat]::Png)
$source.Dispose()
$output.Dispose()
