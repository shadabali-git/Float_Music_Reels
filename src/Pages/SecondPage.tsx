import React from 'react'
import PostTable from '../Components/PostTable'
import DepartmentList from '../Components/DepartmentList'
import { Box } from '@mui/material'

const SecondPage:React.FC = () => {
  return (
    <Box 
    sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        overflowX: 'hidden',
        overflowY: 'auto',
        height: '100vh',
        marginX:"10px",
        }}

      >

        <h1>Second Page Data From Json </h1>

        <PostTable />
        <DepartmentList/>
      
    </Box>
  )
}

export default SecondPage
