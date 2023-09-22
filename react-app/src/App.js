import {useState, useEffect} from 'react';

import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Error from './components/Error';
import Products from './pages/Products';
import Ford from './components/Ford';
import BMW from './components/BMW';
import TESLA from './components/TESLA';

import './App.css';

import {Container} from 'react-bootstrap';

import {UserProvider} from './UserContext';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  // const [user, setUser] = useState({email: localStorage.getItem('email')});
  const [user, setUser] = useState({
    id: null, 
    isAdmin: null
  });

  const unsetUser = () => {
    localStorage.clear();
  }

  // Used to check if the user information is properly stored upon login in the localStorage and cleared upon logout
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then( data => {

      // user is logged in
      if(typeof data._id !== "undefined") {
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        })
        // user is logged out
      } else {
        setUser({
          id: null,
          isAdmin: null
        })
      }
    })
  }, []);

  return (
    <>
      <UserProvider value = {{user, setUser, unsetUser}}>
        <Router>
          <AppNavbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />  
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path='products' element= {<Products/>}/>
              <Route path="/*" element={<Error />} />
              <Route path="/products/ford" element={<Ford/>} />
              <Route path="/products/bmw" element={<BMW/>} />
              <Route path="/products/tesla" element={<TESLA/>} />
            </Routes>
          </Container>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
