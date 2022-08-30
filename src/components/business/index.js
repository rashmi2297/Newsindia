import React from 'react'
import {useState, useEffect} from "react"

function Business() {
  const[business, setBusiness]=useState([])
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=68825892e0354082b6776c34857a459c")
    .then((res) => res.json())
    .then((res) => setBusiness(res.articles))
  },[]);

  return (
     <div>
      <div>
        {business.map((dt) => {
          return(
            <div style={{margin:"10px"}}>
              <div>
                <img
                style={{width:"50%"}}
                 src={dt.urlToImage}
                 alt="business images"
                />
                <div style={{width:"50%"}}>
                  {dt.author}
                  {dt.publishedAt}
                  {dt.content}
                </div>
              </div>  
            </div>
          )
        })}
      </div>
     </div>
  )
}

export default Business