param(
  [Parameter(Mandatory = $true)]
  [string]$Path,

  [int]$MaxSize = 720
)

Add-Type -AssemblyName System.Drawing

$image = [System.Drawing.Bitmap]::new((Resolve-Path -LiteralPath $Path).Path)
$scale = [Math]::Min($MaxSize / $image.Width, $MaxSize / $image.Height)

if ($scale -ge 1) {
  $image.Dispose()
  exit 0
}

$width = [Math]::Max(1, [int][Math]::Round($image.Width * $scale))
$height = [Math]::Max(1, [int][Math]::Round($image.Height * $scale))
$resized = [System.Drawing.Bitmap]::new($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($resized)

$graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.Clear([System.Drawing.Color]::Transparent)
$graphics.DrawImage($image, 0, 0, $width, $height)

$image.Dispose()
$graphics.Dispose()
$resized.Save((Resolve-Path -LiteralPath $Path).Path, [System.Drawing.Imaging.ImageFormat]::Png)
$resized.Dispose()
