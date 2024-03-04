import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Stack from './components/Stack'
import About from './components/About'
import Contact from './components/Contact'

// importar componentes pára las rutas
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '/stack', element: <Stack /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
