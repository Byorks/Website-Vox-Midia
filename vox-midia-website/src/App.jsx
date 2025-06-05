import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';

import MainNavBar from './components/MainNavBar';
import MainFooter from './components/MainFooter';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ProjectPage from './pages/Project';
import { useState } from 'react';
import './App.css';
import CasesPage from './pages/Cases';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import AboutUsPage from './pages/AboutUs';

const router = createBrowserRouter ([
  {
    path:"/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'cases', element: <CasesPage /> },
      { path: 'services', element: <ServicesPage />},
      { path: 'project', element: <ProjectPage />},
      { path: 'contact', element: <ContactPage />},
      { path: 'about', element: <AboutUsPage />}
    ]
  }
]);

// Aqui estou passando o router para o RouterProvider
function App() {
  return <RouterProvider router={router} />
}

export default App
