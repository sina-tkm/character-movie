import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";


export default function useCharacters(url,query){
        const [characters,setcharacters] =useState([]);
        const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{ 
       
        const controller = new AbortController();
        const signal = controller.signal;
        async function fetchData(){
        try {
        setIsLoading(true)
          const {data} = await axios.get(
          `${url}=${query}`
          ,{signal}
          );
        setcharacters(data.results.slice(0,5)) 
        } catch (err) {
        if(!axios.isCancel()){
        setcharacters([])
        toast.error(err.response.data.error)
             
            }
        }finally{
        setIsLoading(false)
        }
       }
        if(query.length < 3){ 
          setcharacters([])
          return;
          }
        fetchData()
        return ()=>{
        controller.abort()
        }
    
      
      },[query]);

      return {characters,isLoading}
}