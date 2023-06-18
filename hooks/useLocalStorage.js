import { useEffect, useState } from "react";

const PREFIX = 'codepen-clone-'
export default function useLocalStorage(key,initialvalue) {
    const prefixedkey = PREFIX + key
    
    const [value, setValue] = useState (()  => {
        const jsonValue = localStorage.getItem(prefixedkey)
        if(jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialvalue === 'function') {
            return initialvalue()
        } else {
            return initialvalue
        }
    })
    
    useEffect(() =>{
        localStorage.setItem(prefixedkey, JSON.stringify(value))
    },[prefixedkey,value])
    
    return [value, setValue]
}