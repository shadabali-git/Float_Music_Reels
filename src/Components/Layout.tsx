// src/components/PageLayout.tsx
import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';



const Layout: React.FC= () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        overflowX: 'hidden',
        overflowY: 'auto',  
        height: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Outlet/>
    </Box>
  );
};

export default Layout;
