import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
let initialUser = {
    username:"",
    email:"",
    token:"",
}
let authContext = createContext(initialUser)


export default function AuthProvider({children}){
    const [user,setUser] = useState(initialUser)

    return(
        <authContext.Provider value={{initialUser, user,setUser}} >
            {children}
        </authContext.Provider>
    )
}


let useAuth =  ()=>useContext(authContext)

export {useAuth}
