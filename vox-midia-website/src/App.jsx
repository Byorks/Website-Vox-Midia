import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'

import MainNavBar from './components/MainNavBar'
import MainFooter from './components/Footer'
import RootLayout from './pages/Root'
import HomePage from './pages/Home'
import { useState } from 'react'
import './App.css'
import CasesPage from './pages/Cases'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'cases', element: <CasesPage /> } 
    ]
  }
]);

// Aqui estou passando o router para o RouterProvider
function App() {
  return <RouterProvider router={router} />
}

export default App
