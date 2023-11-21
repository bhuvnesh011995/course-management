import { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {IntlProvider} from "react-intl"
import { AxiosInstance } from "../common-components/axiosInstance";
import { toast } from "react-toastify";
let initialUser = {
    username:"",
    email:"",
    token:"",
}
let authContext = createContext(initialUser)


export default function AuthProvider({children}){
    const [user,setUser] = useState(initialUser)
    const [lanCode,setLanCode] = useState()
    const [language,setLanguage] = useState()
    const getLanguage = useCallback(async (languageCode)=>{
        try {
            let response = await AxiosInstance.get("/languages/language/?code="+languageCode ?? "")
            if(response && response.status===200){
                console.log(response)
                setLanguage(response.data.language)
                setLanCode(response.data.code)
            }else{
                
                toast.error("cannot get language data")
            }
        } catch (error) {
            console.log(error)
            toast.error("error occured while fetching data")
        }
    })
    useEffect(()=>{
        getLanguage(lanCode)
    },[lanCode])
    return(
        <IntlProvider locale={lanCode||"en"} messages={language}>
        <authContext.Provider value={{initialUser, user,setUser,lanCode,setLanCode}} >
            {children}
        </authContext.Provider>
        </IntlProvider>
    )
}


let useAuth =  ()=>useContext(authContext)

export {useAuth}
