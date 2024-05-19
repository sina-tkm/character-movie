import { useEffect, useState } from "react"

export default function uselocaleStorage(key,initialstate){
    const [value,setValue] = useState(()=>JSON.parse(localStorage.getItem(key)) || initialstate)
    useEffect(()=>{ 
        localStorage.setItem(key,JSON.stringify(value))},
        [value]);


        return [value,setValue]

}