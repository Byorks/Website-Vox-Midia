import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router";

import MainNavBar from "./components/MainNavBar";
import MainFooter from "./components/MainFooter";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/Project";
import { useState } from "react";
import "./App.css";
import CasesPage from "./pages/Cases";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import AboutUsPage from "./pages/AboutUs";
import { Home } from "lucide-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "cases", element: <CasesPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "cases/project/:projectId", element: <ProjectPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutUsPage /> },
    ],
  },
]);

// Aqui estou passando o router para o RouterProvider
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<HomePage/>} />
    //     <Route path='/home' element={<HomePage/>} />
    //     <Route path='/contact' element ={<ContactPage/>} />
    //     <Route path='/about' element ={<AboutUsPage/>} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
