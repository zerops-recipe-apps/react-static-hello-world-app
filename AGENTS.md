# react-static-hello-world-app

Minimal React 19 + Vite + TypeScript app built by Node.js and served as static files by Zerops Nginx with built-in SPA fallback.

## Zerops service facts

- HTTP port: `5173` (dev server) / `80` (prod nginx)
- Siblings: —
- Runtime base: `nodejs@24` (dev) / `static` (prod)

## Zerops dev

`setup: dev` idles on `zsc noop --silent`; the agent starts the dev server.

- Dev command: `npm run dev`
- In-container rebuild without deploy: `npm run build`

**All platform operations (start/stop/status/logs of the dev server, deploy, env / scaling / storage / domains) go through the Zerops development workflow via `zcp` MCP tools. Don't shell out to `zcli`.**

## Notes

- `VITE_APP_ENV` is baked into the bundle at build time; all client-side config must use `VITE_*` vars set under prod `build.envVariables`.
- Prod build uses `npm ci --include=dev` — Zerops sets `NODE_ENV=production`, which omits devDependencies (TypeScript, Vite) unless explicitly included.
- TypeScript is pinned to 5.9.x for stable `tsc -b` with Vite.
