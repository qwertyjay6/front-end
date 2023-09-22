// Import necessary modules
import React, { useState, useEffect ,useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
// import {useNavigate} from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2';
import {Navigate} from 'react-router-dom';
export default function Login() {

	const {user,setUser} = useContext(UserContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password]);

  function LoginUser(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/users/login`,{
      method : 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(typeof data.access!=="undefined") {
        localStorage.setItem('token',data.access)

        retrieveUserDetails(data.access);
             Swal.fire({
                title: "Login Successful",
                icon: "success",
                text: "Welcome to Albion"
            })
        } else {
            Swal.fire({
                title: "Authentication Failed",
                icon: "error",
                text: "Please, check your login details and try again."
            });

      };

    });


    setEmail("");
    setPassword("");

  }



const retrieveUserDetails =(token)=> {
  fetch(`${process.env.REACT_APP_API_URL}/users/details`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(data=>{
    console.log(data);

    setUser({
      id:data._id,
      isAdmin : data.isAdmin
    })
  })
} 


  return (
  	(user.id)?
  	<Navigate to="/products"/>
  	:

    <Form onSubmit={e => LoginUser(e)}>
      <Form.Group controlId="userEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {isActive ?
          <Button variant="primary" type="submit" id="submitBtn">
            Submit
          </Button>
          :
          <Button variant="danger" type="submit" id="submitBtn" disabled>
            Submit
          </Button>
        }
      </Form.Group>
    </Form>
  );
}
