import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


interface Props {
   children: React.ReactNode
}

const ProtectiveRoute: React.FC<Props> = ({children }) => {
    const navigate = useNavigate()
   

   
    useEffect(() => {
        const token = localStorage.getItem('userDetails')
        
        if (!token) {
            
            navigate('/')
            return
        }

      }, [navigate])

    return <>{children}</>
}

export default ProtectiveRoute