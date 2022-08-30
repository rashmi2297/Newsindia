import {useState, useEffect} from 'react'
import React from "react"
function Entertainment() {
  const[entertain, setEntertain]=useState([])
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=68825892e0354082b6776c34857a459c")
    .then((res) => res.json())
    .then((res) => setEntertain(res.articles))
  },[]);

  return (
    <div>
      <div>
        {entertain.map((dt) => {
          return(
            <div style={{margin:"10px", backgroundColor:"#F5F5DC"}}>
            <img 
              style={{width:"50%", padding:"10px"}}
              src={dt.urlToImage}
              alt="entertainment images"
            />
            <div style={{width:"50%", padding:"10px"}}>
              {dt.author}
              {dt.publishedAt}
            </div>
            <div style={{width:"50%"}}>
              {dt.content}
            </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Entertainment