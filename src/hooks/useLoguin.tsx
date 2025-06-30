import { useState, type FormEvent } from "react"
import {createSessionSchema} from "../schema/session/create"
import { api } from "../services/api"
import { ZodError } from "zod/v4"
import { AxiosError } from "axios"




export function useLoguin() {
   const [email , setEmail] = useState("")
   const [password, setPassword] = useState("")
   // ADD IS LOADING DO BOTAO AMANHA

  async function onSubmit(e: FormEvent){
    e.preventDefault()

    
    try {
        const data = createSessionSchema.parse({email , password})
         await api.post("/sessions" , data)
    console.log("token criado")
        
    } catch (error) {
        if(error instanceof ZodError){
          return alert(error.issues[0].message)
        }
       if(error instanceof AxiosError){
    return  alert(error.response?.data.message)
    }
    }
    
   
   }


  return {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
  }
}