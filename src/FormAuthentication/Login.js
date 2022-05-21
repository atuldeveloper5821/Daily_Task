import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [formData, setFormData] = useState({});

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      ...formData
    });
    setToken(token);
    console.log(formData);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" name="username" required value={formData.username || ""} onChange={handleChange}/><br />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" required value={formData.password || ""} onChange={handleChange}/>
          <br />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}