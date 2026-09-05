[CmdletBinding()]
param([string]$ProjectRoot=(Get-Location).Path)

$ErrorActionPreference="Stop"

function Step($m){ Write-Host "==> $m" -ForegroundColor Cyan }

Step "JoyaFleet App Router Migration v1"

if(!(Test-Path "$ProjectRoot/src/App.tsx")){
 throw "src/App.tsx not found"
}

$backup="$ProjectRoot/.migration-backup-app-router-v1"
if(Test-Path $backup){Remove-Item $backup -Recurse -Force}
New-Item -ItemType Directory -Force $backup | Out-Null

$app="$ProjectRoot/src/app"
New-Item -ItemType Directory -Force "$app/[[...slug]]" | Out-Null

@'
import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
 title:"JoyaFleet",
 description:"Aviation operations platform"
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return (
  <html lang="en">
   <body>{children}</body>
  </html>
 );
}
'@ | Set-Content "$app/layout.tsx" -Encoding UTF8

@'
"use client";

import dynamic from "next/dynamic";

const App = dynamic(()=>import("../../App"),{ssr:false});

export default function ClientApp(){
 return <App />;
}
'@ | Set-Content "$app/[[...slug]]/client.tsx" -Encoding UTF8

@'
import ClientApp from "./client";

export function generateStaticParams(){
 return [{slug:[]}];
}

export default function Page(){
 return <ClientApp />;
}
'@ | Set-Content "$app/[[...slug]]/page.tsx" -Encoding UTF8

@'
export default function NotFound(){
 return (
  <main>
   <h1>404 - Page Not Found</h1>
  </main>
 );
}
'@ | Set-Content "$app/not-found.tsx" -Encoding UTF8

Step "App Router shell created"
