// import React, { useState, useEffect } from 'react'
// import "./feedback.css"
// import ReactDOM from "react-dom";
// import "sanitize.css";
// import { useNavigate } from "react-router-dom"

// function Feedback() {
//   const [values, setValues] = useState({
//     firstName: "",
//     lastName: "",
//     gender: "",
//     country: "",
//     phoneNo: "",
//     email: "",
//     textArea: ""
//   })
//   useEffect( ()=> {
//    const getcountry= async() =>{

//    }
//    getcountry();
//   });

//   const handleChange = (e) => {
//     const {value, name} = e.target;
//     setValues({...values, [name] : value})
//   }

//   const handleSubmit = () => {
//     let dataToBeInserted = {
//         first_name: values.firstName,
//         last_name: values.lastName,
//         email: values.email
//     }
//     const stringifiedData = JSON.stringify(dataToBeInserted)
//     fetch("https://reqres.in/api/users", {
//         method: "POST",
//         body: stringifiedData
//     })
//         .then(res => res.json())
//         .then(res => console.log(res))
//         .catch(err => console.log(err))


//   }
//   const navigate = useNavigate();
//   const handleHome = () => {
//      navigate("/")
//   }

//   return (
//     <div className='feedback'>
//         <h1 className="feedback-head">Feedback</h1>
//         <div className='feedback-form'>
//             <input onChange={handleChange} type="text" name="firstName" value={values.firstName} placeholder="First name" />
//             <input onChange={handleChange} type="text" name="lastName" value={values.lastName} placeholder="Last name"/>
//             <p className="gender">Please choose your gender</p>
//             <tr className="radio">
//               <td>
//                 <input onChange={handleChange} type="radio" name="gender" value="male" />
//                 <input onChange={handleChange} type="radio" name="gender" value="female" />
//                 <input onChange={handleChange} type="radio" name="gender" value="other" />

//               </td>
//             </tr>
//             <div >
//             <select name="country" className="select" >
//               <option>--select country--</option>
//               <option>india</option>
//               <option>usa</option>
//             </select>
//             </div>
//             <input onChange={handleChange} type="email" name="email" value={values.email} placeholder="Email"/>
//             <div className="phone">
//             <input onChange={handleChange} type="number" name="phoneNo" value={values.phoneNo} placeholder="Phone no"/>
//             </div>
//             <div >
//             <textarea className="textArea" onChange={handleChange} type="text" name="textArea" value={values.textArea} placeholder="Please comment your experiance here"></textarea>
//             </div>
//             <div className="feed-submit">
//             <button  onClick={handleSubmit}>Submit</button>
//             <button  onClick={handleHome}>Home</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Feedback

import React, { Component } from "react"
import { useState, useEffect } from 'react'
import "./feedback.css"
import { useNavigate } from "react-router-dom"


// const navigate="";
class Feedback extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            country: "country",
            textarea: "",
            isFriendly: false,
            countries: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit(value) {
        const stringifiedData = JSON.stringify(value)
        fetch("https://reqres.in/api/users", {
            method: "POST",
            body: stringifiedData
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        console.log(value)
    }
    // country = () => {
    //     const[country, setCountry]=useState([]);
    //     const[countryId, setCountryId]= useState("");

    //     useEffect( () => {
    //         const getCountry= async ()=>{
    //             const res= await fetch("https://api.first.org/data/v1/countries");
    //             const getCon= await res.json();

    //             setCountry(await getCon);
    //         }
    //         getCountry();
    //     },[]);
    //     const handleCountry=(event)=> {
    //         const getCountryId=event.target.value;
    //         console.log(getCountryId);
    //         setCountryId(getCountryId);
    //     }

    // }

    handleHome = (e) => {
        e.preventDefault()
        window.location.href = "/"
    }

    componentDidMount() {
        const fetchCountries = () => {
            fetch("https://restcountries.com/v3.1/all")
                .then(resp => resp.json())
                .then(resp => this.setState({ countries: resp }))
        }

        fetchCountries()
    }

    render() {
        return (
            <div className='feedback'>
                <h1 className="feedback-head">Feedback</h1>
                <form className='feedback-form'>
                    <input
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />

                    <br />
                    <input
                        type="email"
                        value={this.state.email}
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        className="email"
                    />

                    <br />
                    <p className="gender">Please choose your gender</p>
                    <div className="radio">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male

                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female

                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={this.state.gender === "other"}
                            onChange={this.handleChange}
                        /> Other
                    </div>
                    <br />

                    <select
                        value={this.state.country}
                        // onChange={(e) => this.handleCountry(e)}
                        name="country"
                        className="select"
                    >
                        <option value="select">--select country--</option>
                        {
                            this.state.countries.map((countryget) => (
                                <option value={countryget.name.common}>{countryget.name.common}</option>
                            )

                            )}



                    </select>


                    <h1>{this.state.firstName} {this.state.lastName}</h1>

                    <textarea
                        name="textarea"
                        value={this.state.textarea}
                        onChange={this.handleChange}
                        className="textArea"
                        placeholder="Please comment your experiance here"
                    />
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleChange}
                        /> Would you like to signup for the newsletter?
                    </div>
                    <div className="feed-submit">
                        <button onSubmit={this.handleSubmit}>Submit</button>
                        <button onClick={this.handleHome}>Home</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Feedback
