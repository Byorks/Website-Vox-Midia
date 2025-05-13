import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'

import Header from './components/Header'
import MainFooter from './components/Footer'
import { useState } from 'react'
import './App.css'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <RootLayout />,
    children: []
  }
])


function App() {

  return (
    <>
    <body>
      <Header />
      <main>

      </main>
      <MainFooter></MainFooter>
    </body>
     
    </>
  )
}

export default App
