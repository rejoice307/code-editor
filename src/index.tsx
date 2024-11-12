import { createRoot } from 'react-dom/client'
import React, { StrictMode } from 'react'
import App from './app'

const root = createRoot(document.getElementById('super-code'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)