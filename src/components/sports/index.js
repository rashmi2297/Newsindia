import React from 'react'
import {useState,useEffect} from "react"

function Sports() {
  const[sports, setSports]=useState([])
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=68825892e0354082b6776c34857a459c")
    .then((res) => res.json())
    .then((res) => setSports(res.articles))
  },[]);

  return (
    <div>
      <div>
        {sports.map((dt) => {
          return(
            <div style={{margin:"10px"}}>
              <img 
               style={{width:"50%"}}
               src={dt.urlToImage}
               alt="sports images"
              /> 
              <div style={{width:"50%"}}>
                {dt.author}
                {dt.publishedAt}
                {dt.content}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sports