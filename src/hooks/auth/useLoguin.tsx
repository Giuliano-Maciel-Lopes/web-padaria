import { useState, type FormEvent } from "react"
import {createSessionSchema} from "../../schema/session/create"
import { api } from "../../services/api"
import { ZodError } from "zod"
import { AxiosError } from "axios"
import { useAuth } from "./useAuth"




export function useLogin(onSuccess?:()=>void) {
   const [email , setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [isloading , setIsloading] = useState(false)

   const auth =useAuth()
  async function onSubmit(e: FormEvent){
    e.preventDefault()

    
    try {
      setIsloading(true)
        const data = createSessionSchema.parse({email , password})
       const response =  await api.post("/sessions" , data)
    auth.save(response.data)
    console.log(response.data)
    console.log("tudo certo")

    onSuccess?.()
        
    } catch (error) {
        if(error instanceof ZodError){
          return alert(error.issues[0].message)
        }
       if(error instanceof AxiosError){
    return  alert(error.response?.data.message)
    }
    }finally{
      setIsloading(false)
    }
    
   
   }


  return {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
    isloading,
    setIsloading
  }
}