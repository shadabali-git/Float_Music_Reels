import React from 'react'
import PostTable from '../Components/PostTable'
import DepartmentList from '../Components/DepartmentList'

const SecondPage:React.FC = () => {
  return (
    <div>
        <h1>Second Page Data From Json </h1>

        <PostTable />
        <DepartmentList/>
      
    </div>
  )
}

export default SecondPage
