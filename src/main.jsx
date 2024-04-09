import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import ContextHooks from './context/ContextHooks'
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ContextHooks>
        <RouterProvider router={router} />
        <ToastContainer/>
      </ContextHooks>
    </HelmetProvider>
  </React.StrictMode>,
)
