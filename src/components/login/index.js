// import React, { useState } from 'react';

// import { useNavigate } from "react-router-dom"

// import PropTypes from 'prop-types';

// import './login.css';

// async function loginUser(credentials) {

//   return fetch('http://localhost:8080/login ', {

//     method: 'POST',

//     headers: {

//       'Content-Type': 'application/json'

//     },

//     body: JSON.stringify(credentials)

//   })

//     .then(data => data.json())

// }

// export default function Login({ setToken }) {

//   const [username, setUserName] = useState();

//   const [password, setPassword] = useState();

//   const navigate = useNavigate();
//   const handleRegister = () => {
//     navigate("/register")
//   }

//   const handleSubmit = async e => {

//     e.preventDefault();

//     const token = await loginUser({

//       username,

//       password

//     });

//     setToken(token);

//   }

//   return (

//     <div className="login-wrapper">

//       <h1 className="log-head">Login</h1>

//       <form className="input-form" onSubmit={handleSubmit}>

//         <label>

//           <p>Username</p>

//           <input type="text" onChange={e => setUserName(e.target.value)} />

//         </label>

//         <label>

//           <p>Password</p>

//           <input type="password" onChange={e => setPassword(e.target.value)} />

//         </label>

//         <div>

//           <button type="submit">Submit</button>
//           <p>New user ? Please Register</p>
//           <button onClick={()=> handleRegister()} >Register</button>
          

//         </div>

//       </form>

//     </div>

//   )

// }

// Login.propTypes = {

//   setToken: PropTypes.func.isRequired

// };
import React, { useState } from 'react';
import './login.css';
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [values, setValues] = useState({
    userName: "",
    password: "",
  })

  const handleChange = (e) => {
    const {value, name} = e.target;
    setValues({...values, [name] : value})
  }
  const navigate = useNavigate();
  const handleRegister = () => {
     navigate("/register")
  }
  const handleCancel = () => {
    navigate("/")
  }

  const handleSubmit = () => {
    let dataToBeInserted = {
        user_name: values.userName,
        password: values.password,
    }
    const stringifiedData = JSON.stringify(dataToBeInserted)
    fetch("https://reqres.in/api/login", {
        method: "POST",
        body: stringifiedData
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }

  return (
    <div className='login-wrapper'>
        <h1 className="log-head">Login</h1>
        <div className='input-form'>
            <input onChange={handleChange} type="text" name="userName" value={values.userName} placeholder="Enter username" />
            <input onChange={handleChange} type="password" name="password" value={values.password} placeholder="Enter password"/>
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            <p className="newUser">New User? Please Register</p>
            <button className="register-btn" onClick={handleRegister}>Register</button>
            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
    </div>
  )
}

