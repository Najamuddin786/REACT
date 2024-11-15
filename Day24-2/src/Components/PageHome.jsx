import { useEffect, useState } from "react"


export default function PageHome(){

let [data,setData]=useState([])

    useEffect(()=>{
        let getData=async ()=>{
                try {
                    let res=await fetch('https://jsonplaceholder.typicode.com/albums')
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
                        return <div  style={{alignItems:'center',gap:'10px',display:"flex",background:'black',cursor:"pointer",borderRadius:'10px',padding:'5px 20px'}} key={e.id}>
                            <h2 style={{background:'green',padding:'10px 15px',borderRadius:"50px"}}>{e.title.split("")[0].toUpperCase()}</h2>
                            <p >{e?.title}</p>
                        </div>
                    })}
                    <div style={{background:"green",width:"98vw",padding:'10px 20px',position:'absolute',bottom:"0px"}}>
                        <h2>Form Create User</h2>
                        <br/>
                        <label >Enter Nam</label>
                        <input type="text"  placeholder="Enter Your Name"/>
                        <br />
                        <label >Enter ID</label>
                        <input type="number"  placeholder="Enter ID"/>
                    </div>
                </div>

    </>
}