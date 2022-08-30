import React, { useEffect, useState} from 'react'

function Technology() {
     const[tech, setTech]=useState([])
     useEffect(() => {
       fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=68825892e0354082b6776c34857a459c"
       , {mode: 'no-cors'})
      .then((res) => res.json())
      .then((res) => setTech(res.articles))
   }, []);
   console.log(tech);
  return (
    <div>
      <div style={{ flex:1, flexDirection:"row"}}>
      {tech.map((dt) => {
      return(
        <div>
          <img 
           src={dt.urlToImage}
           alt="Not Found"
           style={{display:"block"}}
          />
          <div style={{display:"block"}}>{dt.author}</div>
          <div style={{display:"block"}}>{dt.publishedAt}</div>
          <div style={{width:"50%"}}>{dt.content}</div>
        </div>
        
      )
      })}
      </div>
    </div>
  )
}

export default Technology