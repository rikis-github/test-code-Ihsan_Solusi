"use client"

import { createContext, PropsWithChildren, useContext, useState, VoidFunctionComponent } from "react"
import { initialState, INITIALSTATETYPE } from "./page.type"

interface PageContextType {
   result: string
   error: string
   setFrom: (value: number) => void
   setTo: (value: number) => void
   setValue: (value: string) => void 
   convert: () => void
}

const PageContext = createContext<PageContextType | undefined>(undefined)

export function PageProvider({ children }:PropsWithChildren){
   const [form, setFrom] = useState<number>(1)
   const [to, setTo] = useState<number>(2)
   const [value, setValue] = useState<string>("")
   const [result, setResult] = useState<string>("")
   const [error, setError] = useState<string>("")
   const convert = () => {
      setError("")
      if((form == 1 && to == 2)){
         try{
            if(form == 1){
               setResult(parseInt(value, 10).toString(2))
            }else if( form == 2){
               setResult(parseInt(value, 2).toString(10))
            }
         }catch (err){
            setError("invalid input")
         }
      }else {
         setError("invalid conversion type")
         setResult('invalid')
      }
   }
   return <PageContext.Provider value={{result, error, setFrom, setTo, setValue, convert}}>
      {children}
   </PageContext.Provider>
}

export function usePageContext(){
   const context = useContext(PageContext)
   if(!context){
      throw new Error("use{ageContext must be userd")
   }
   return context
}