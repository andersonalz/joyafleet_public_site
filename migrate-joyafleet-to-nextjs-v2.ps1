[CmdletBinding()]
param(
    [string]$ProjectRoot = (Get-Location).Path,
    [switch]$SkipInstall,
    [switch]$SkipChecks
)

$ErrorActionPreference = "Stop"

function Write-Step($msg) {
    Write-Host "==> $msg" -ForegroundColor Cyan
}

Write-Step "JoyaFleet Next.js Migration v2"

$packageFile = Join-Path $ProjectRoot "package.json"

if (!(Test-Path $packageFile)) {
    throw "package.json not found. Run from project root."
}

$backup = Join-Path $ProjectRoot ".migration-backup"
if (Test-Path $backup) { Remove-Item $backup -Recurse -Force }
New-Item -ItemType Directory -Force $backup | Out-Null

foreach ($file in @("package.json","package-lock.json","vite.config.ts","index.html")) {
    $src = Join-Path $ProjectRoot $file
    if (Test-Path $src) {
        $dst = Join-Path $backup $file
        New-Item -ItemType Directory -Force (Split-Path $dst) | Out-Null
        Copy-Item $src $dst -Force
    }
}

Write-Step "Updating package.json"

$json = Get-Content $packageFile -Raw | ConvertFrom-Json -AsHashtable

if (-not $json.ContainsKey("scripts")) {
    $json["scripts"] = [ordered]@{}
}

$json["scripts"]["dev"] = "next dev"
$json["scripts"]["build"] = "next build"
$json["scripts"]["start"] = "next start"
$json["scripts"]["typecheck"] = "tsc --noEmit"
$json["scripts"]["lint"] = "eslint ."

if (-not $json.ContainsKey("dependencies")) {
    $json["dependencies"] = [ordered]@{}
}

$json["dependencies"]["next"] = "16.3.3"

if ($json.ContainsKey("devDependencies")) {
    foreach ($item in @("@vitejs/plugin-react","@tailwindcss/vite")) {
        $json["devDependencies"].Remove($item)
    }
}

$json | ConvertTo-Json -Depth 50 | Set-Content $packageFile -Encoding UTF8

@'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true
};

export default nextConfig;
'@ | Set-Content (Join-Path $ProjectRoot "next.config.ts") -Encoding UTF8

@'
/// <reference types="next" />
/// <reference types="next/image-types/global" />
'@ | Set-Content (Join-Path $ProjectRoot "next-env.d.ts") -Encoding UTF8

$lock = Join-Path $ProjectRoot "package-lock.json"
if (Test-Path $lock) { Remove-Item $lock -Force }

if (-not $SkipInstall) {
    Write-Step "npm install"
    Push-Location $ProjectRoot
    npm install
    if ($LASTEXITCODE -ne 0) { throw "npm install failed" }
    Pop-Location
}

if (-not $SkipChecks) {
    Write-Step "Validation"
    Push-Location $ProjectRoot
    npm run typecheck
    if ($LASTEXITCODE -ne 0) { throw "typecheck failed" }
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "build failed" }
    Pop-Location
}

Write-Host "Migration v2 completed." -ForegroundColor Green
