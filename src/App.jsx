import React, { useState } from 'react'
import Logo from './logo.svg'

export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div className="app">
      <header className="header">
        <img
          src={Logo}
          alt="Logo"
          className={`logo ${count % 2 ? 'tilt' : ''}`}
          onClick={() => setCount((c) => c + 1)}
        />

        <h1>{name ? `Welcome, ${name}!` : 'Welcome to your Vite + React app!'}</h1>

        <p className="lead">This page was edited in <strong>App.jsx</strong>.</p>

        <div className="controls">
          <label>
            Your name:{' '}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type a name"
            />
          </label>

          <div style={{ marginTop: 8 }}>
            <button onClick={() => setCount((c) => c + 1)}>Click me</button>
            <span style={{ marginLeft: 12 }}>Count: {count}</span>
          </div>
        </div>

        <p>Make more edits in <code>src/App.jsx</code> and save to hot-reload.</p>
      </header>
    </div>
  )
}
