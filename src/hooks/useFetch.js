import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const useFetch=(url)=>{
  const[data,setData]=useState(null)
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)

  const fetch= async ()=>{
    try {
      const response=await axios.get(url)
      if(response.status===200){
        setData(response.data.data)
      }
      else{
        setError('something went wrong')
      }
    } catch (error) {
      setError(error.message)
      
    }

    finally{
      setLoading(false)
    }
    
  }
  useEffect(()=>{
    fetch()
  },[])

  return{
    data,
    error,
    loading
  }
}

export default useFetch