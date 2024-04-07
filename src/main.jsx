import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import ContextHooks from './context/ContextHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextHooks>
      <RouterProvider router={router} />
    </ContextHooks>
  </React.StrictMode>,
)
