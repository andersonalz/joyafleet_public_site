# Joya Fleet Frontend

Next.js frontend for Joya Fleet.

## Local development

Requirements: Node.js 22 and npm.

```bash
npm ci
npm run dev
```

The app is available at `http://localhost:3000`.

## Run with Docker Compose

```bash
docker compose up --build -d
```

Then open `http://localhost:3000`. To stop the service:

```bash
docker compose down
```

`NEXT_PUBLIC_SITE_URL` is embedded in the client bundle during the image build. If the canonical URL is different, set it before building the image. `PORT` controls the host port only.

PowerShell example:

```powershell
$env:NEXT_PUBLIC_SITE_URL = "https://example.com"
$env:PORT = "8080"
docker compose up --build -d
```

## Run with Docker directly

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://joyafleet.com -t joyafleet-frontend .
docker run --rm -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://joyafleet.com joyafleet-frontend
```

The production container runs the Next.js standalone server as an unprivileged user and exposes port `3000`.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```
