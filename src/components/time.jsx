import {useState, useEffect} from "react"

export default function Time() {
    let [time, setTime] = useState(0);
   

    useEffect(() => {
        setInterval(() => {
            console.log (time, '<----time')
            setTime((previousTime) => (previousTime + 1))
        }, 1000)
        }, [])
  
    return(
        <div className="container">
            <spam>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/> 
             </svg>
             </spam>
            
               { " "} <spam>0</spam> <spam>0</spam> <spam>{Math.floor(time / 86400 ) % 24 }</spam> <spam>{Math.floor(time / 3600) % 60}</spam> <spam>{Math.floor(time / 60) % 60}</spam> <spam>{time % 60 }</spam>

             </div>
    )
}