import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0)
  const [on,setOn]=useState(true)

  useEffect(() => {
    let intervalId;

    if (on) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } 

    return () => clearInterval(intervalId); // Clean up interval

  }, [on]);

  return (
    <>
        {on==true ? <h1>Timer Mounting .... {timer}<sub>s</sub></h1>
        : ''}
        <button onClick={()=>{if(on){setOn(false)}else{setOn(true)}}}>Unmount Timer</button>
    </>
  )
}

export default App
