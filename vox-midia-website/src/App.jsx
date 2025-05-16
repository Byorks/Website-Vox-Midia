import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'

import MainHeader from './components/Header'
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
      {index: true, element: <HomePage />},
      {path: 'cases', element: <CasesPage />}
    ]
  }
])


function App() {

  return (
    <>
    <body>
      <MainHeader />
      <main>

      </main>
      <MainFooter></MainFooter>
    </body>
     
    </>
  )
}

export default App
