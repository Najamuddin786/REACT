import { useEffect, useState } from "react"


export default function PageHome(){

let [data,setData]=useState([])

    useEffect(()=>{
        let getData=async ()=>{
                try {
                    let res=await fetch('https://jsonplaceholder.typicode.com/users')
                    let final=await res.json()
                    console.log(final)
                    setData(final)
                } catch (error) {
                    console.log(error)
                }
        }
        getData()
    },[])

    return <>
                <div style={{flexDirection:"column",gap:'10px' ,color:"white",display:"flex"}}>
                    {data?.map((e,i)=>{
                        return <div style={{background:'black',cursor:"pointer",borderRadius:'10px',padding:'5px 20px'}} key={e.id}>
                            <h1>{e.name}</h1>
                            <p style={{opacity:'0.8'}}>{e.email}</p>
                            <p>Address : {e.address.street} , {e.address.city}, {e.address.zipcode}</p>
                        </div>
                    })}
                </div>

    </>
}