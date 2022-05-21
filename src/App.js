import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './FormAuthentication/Dashboard';
import Preferences from './FormAuthentication/Preferences';
import Login from './FormAuthentication/Login';
import useToken from './FormAuthentication/UseToken';


function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="Wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>   
          </Route>
          <Route path="/preferences" element={<Preferences/>}>   
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
