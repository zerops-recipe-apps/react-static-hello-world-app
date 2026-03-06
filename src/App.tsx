import React from 'react'
import './App.css'

// VITE_APP_ENV is injected at build time via zerops.yaml build.envVariables.
// In static deployments there is no runtime process — all env vars must be
// baked into the JS bundle during the build phase. Zerops supports this via
// the RUNTIME_ prefix pattern: a runtime var FOO is readable as RUNTIME_FOO
// during build, and Vite exposes VITE_* vars to client code automatically.
const appEnv = import.meta.env.VITE_APP_ENV ?? 'local'

// __BUILD_TIME__ is replaced by a literal string at bundle time via the
// `define` option in vite.config.ts — proves a fresh build was triggered.
const buildTime = __BUILD_TIME__

function App() {
  return (
    <div className="card">
      <header className="header">
        <div className="logo-row">
          <ReactLogo />
          <span className="plus">×</span>
          <ZeropsLogo />
        </div>
        <h1 className="greeting">Hello from Zerops!</h1>
        <p className="subline">
          React running on Zerops Static (Nginx) — no Node.js at runtime.
        </p>
      </header>

      <div className="info-grid">
        <InfoRow label="Framework" value={`React ${React.version}`} />
        <InfoRow
          label="Environment"
          value={appEnv}
          highlight
        />
        <InfoRow
          label="Built at"
          value={new Date(buildTime).toUTCString()}
          mono
        />
      </div>

      <footer className="footer">
        <a href="https://zerops.io" target="_blank" rel="noreferrer">zerops.io</a>
        <span className="sep">·</span>
        <a href="https://docs.zerops.io" target="_blank" rel="noreferrer">docs</a>
        <span className="sep">·</span>
        <a href="https://discord.gg/zeropsio" target="_blank" rel="noreferrer">discord</a>
      </footer>
    </div>
  )
}

function InfoRow({
  label,
  value,
  highlight = false,
  mono = false,
}: {
  label: string
  value: string
  highlight?: boolean
  mono?: boolean
}) {
  return (
    <div className="info-row">
      <span className="info-label">{label}</span>
      <span className={`info-value${highlight ? ' highlight' : ''}${mono ? ' mono' : ''}`}>
        {value}
      </span>
    </div>
  )
}

function ReactLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23 23 20.46" className="react-logo" aria-label="React">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

function ZeropsLogo() {
  return (
    <svg viewBox="0 0 32 32" className="zerops-logo" aria-label="Zerops" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#6d28d9"/>
      <path d="M8 22l10-12h6L14 22H8z" fill="white" opacity="0.9"/>
      <path d="M14 22l6-7h4l-6 7h-4z" fill="white"/>
    </svg>
  )
}

export default App
