import { useEffect,useState } from 'react'
import React from "react"

function Health() {
  const[health, setHealth]=useState([])
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=68825892e0354082b6776c34857a459c")
    .then((res) => res.json())
    .then((res) => setHealth(res.articles))
  },[]);

  return (
    <div>
      <div>
        {health.map((dt) => {
          return(
            <div style={{margin:"10px"}}>
            <img
             style={{width:"50%"}}
             src={dt.urlToImage}
             alt="health imagess"
            />
            <div style={{width:"50%"}}>
              {dt.author}
              {dt.content}
            </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Health