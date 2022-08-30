import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './register.css';

async function loginUser(credentials) {

  return fetch('https://reqres.in/api/register', {

    method: 'POST',

    headers: {

      'Content-Type': 'application/json'

    },

    body: JSON.stringify(credentials)

  })

    .then(data => data.json())

}

export default function Register({ setToken }) {

  const [username, setUserName] = useState();

  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const handleLog = () => {
     navigate("/login")
  }
  const handleCancel = () => {
    navigate("/")
  }

  const handleSubmit = async e => {

    e.preventDefault();

    const token = await loginUser({

      username,

      password

    });

    setToken(token);

  }

  return (

    <div className="login-wrapper">

      <h1 className="log-head">Register</h1>

      <form className="input-form" onSubmit={handleSubmit}>

        <label>

          <p className="newUser">Username</p>

          <input type="text" onChange={e => setUserName(e.target.value)} />

        </label>

        <label>

          <p className="newUser">Password</p>

          <input type="password" onChange={e => setPassword(e.target.value)} />

        </label>

        <div>
          <button className="submit-btn" type="submit">Submit</button>
        </div>
        <span>
        <p className="newUser">Already have an account? Please Login</p>
        <button onClick={handleLog} className="login-btn">Login</button>
        <button onClick={handleCancel} className="cancel-btn">Cancel</button>
        </span>

      </form>

    </div>

  )

}

Register.propTypes = {

  setToken: PropTypes.func.isRequired

};