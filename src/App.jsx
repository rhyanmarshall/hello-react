import React from 'react'
import Logo from './logo.svg'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Welcome to your Vite + React app!</h1>
        <p className="lead">This page was edited in <strong>App.jsx</strong>.</p>
        <p>Make more edits in <code>src/App.jsx</code> and save to hot-reload.</p>
      </header>
    </div>
  )
}
