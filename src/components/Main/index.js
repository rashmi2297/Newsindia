import React from "react"
import { useNavigate } from "react-router-dom"

export default function Main() {
  const navigate = useNavigate();

  const handleBusiness = () => {
    navigate("/business")
  }
  const handleHealth = () => {
    navigate("/health")
  }
  const handleSports = () => {
    navigate("/sports")
  }
  const handleEntertainment = () => {
    navigate("/entertainment")
  }
  const handlePolitics = () => {
    navigate("/politics")
  }
  const handleTechnology = () => {
    navigate("/technology")
  }
  
  
  

  return (
    <div>
      <button onClick={() => handleBusiness()} type="button" className="business-btn"><img className="business-btn" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRCEe5w8DBJPyY1ueSVnFgiRqKepYUWVpEw&usqp=CAU" alt="weather" /></button>
      <button onClick={() => handleHealth()} type="button" className="health-btn"><img className="health-btn" src="http://prod-upp-image-read.ft.com/4bddfb6e-fa84-11e6-9516-2d969e0d3b65" alt="health" /></button>
      <button onClick={() => handleSports()} type="button" className="sports-btn"><img className="sports-btn" src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?w=360" alt="sports" /></button>
      <button onClick={() => handleEntertainment()} type="button" className="entertainment-btn"><img className="entertainment-btn" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1v2-KM4qtTM6FoeBc0sfdJqn7Tn2PopLsCNIceOtsfAXlwqL43eY44UdkZVZEV11v1g&usqp=CAU" alt="entertainment" /></button>
      <button onClick={() => handlePolitics()} type="button" className="politics-btn"><img className="politics-btn" src="https://thumbs.dreamstime.com/b/politics-government-referendum-democracy-vote-concept-76390514.jpg" alt="politics" /></button>
      <button onClick={() => handleTechnology()} type="button" className="technology-btn"><img className="technology-btn" src="https://archive.org/download/Technology3/Technology3.jpg" alt="technology" /></button>
      
      <hr />
      <img className="img1" src="https://www.bing.com/th?id=ALSTUB0229B49F0A810A4C836549BC73ACF362FC811E56313F605CAA467B48E632AA2&w=384&h=228&rs=2&o=6&oif=webp&dpr=1.5&pid=SANGAM" alt="indian culture" />
      <p className="culture">Indian culture is the oldest and famous among the other cultures of the world. Indian literature refers to an amalgamation of distinct cultures of all communities, traditions, customs, and religions in India. The diversity of Indian culture is known worldwide.

        Various Indian cultures profoundly influence Indian Philosophy, art, music, and even Literature. The Dharmic religions and Indian cultures throughout Indian history have a significant impact on the customs and traditions. India comprises of diverse lingual tones and communities that are multi-cultural, multi-religious, and multi-ethnic.</p>
      <hr />
    </div>

  )
}