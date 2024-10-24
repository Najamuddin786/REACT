import { useEffect, useState } from "react"
export default function Product(){

    let [product,setProduct]=useState([])


    useEffect(()=>{
        (async function () {
            try {
                fetch('https://fakestoreapi.com/products/')
                .then((res)=>res.json())
                .then((data)=>{
                    console.log(data)
                    setProduct(data)
                })
            } catch (error) {
                console.log(error)
                
            }
            
        })()

    },[])

    let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}



    return <>
                <div>
                    {product?.map((e,i)=>{
                        return <div key={i} style={{background:"green",color:"white",margin:"10px",padding:"10px",borderRadius:"10px"}}>
                                <img src={e.image} style={{width:'150px'}}/>
                                <h2>{e.title}</h2>
                                <p>{e.category}</p>
                                <h2>Price {e.price}</h2>
                                <button>Buy</button>
                                <br />
                                <p>Move your mouse to see its position.</p>
                                <p id="screen-log"></p>
                        </div>
                    })}
                </div>

    </>
}