import React from 'react'
import ReactDOM from 'react-dom/client'
import FormPage from './Pages/FormPage';
import Layout from './Components/Layout';

// import App from './App.tsx'
import SecondPage from './Pages/SecondPage.tsx';

import './index.css'

import { ThemeProvider,createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ProtectedRoutes from './Components/ProtectedRoutes.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ThemeProvider theme={createTheme()}>
    <CssBaseline />
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<FormPage />} />
          <Route path="second" element={<ProtectedRoutes><SecondPage/></ProtectedRoutes>} />
        </Route>
      </Routes>
   
    </BrowserRouter>
  </ThemeProvider>
</React.StrictMode>,
)
