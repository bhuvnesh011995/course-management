import { useEffect, useState } from "react"

export default function useCustomUseEffect(callback) {
    const [ready,setReady]= useState(false)
    useEffect(()=>{
        if(ready) callback()
        else setReady(true)
        
    },[ready])
};
