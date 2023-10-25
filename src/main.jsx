import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout'
import {loader as pacientesLoader } from './Pages/Index'
import VistaPaciente from './Components/VistaPaciente'
import ErrorPage from './Components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    children: [
      {
        index: true,
        element: <VistaPaciente />,
        loader: pacientesLoader,
        errorElement: <ErrorPage />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
