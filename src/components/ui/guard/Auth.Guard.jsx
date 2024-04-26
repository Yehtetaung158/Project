import React, { useEffect } from 'react'
import { useProfileQuery } from '../../../store/service/endpoint/auth.endpoint'
import { useNavigate } from 'react-router-dom'

const AuthGuard = ({check,token,children}) => {
    const nav=useNavigate()
    const {data,isError,isLoading} =useProfileQuery()
    useEffect(()=>{
        console.log(data,isError,isLoading);
        if(check){
            localStorage.setItem("token",JSON.stringify(token))
        }else if(isError){
            nav("/")
        }else if(data){
            nav("/home")
        }
    },[check,isError,data])
  return (
    <div>{children}</div>
  )
}

export default AuthGuard