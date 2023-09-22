import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const user = {
//   firstname : "jane",
//   lastname : "smith"
// };

// function formatName(user){
//   return user.firstName + ' ' + user.lastname;

// }

// const element = <h1>Hello, {formatName(user)}</h1>
// root.render(element);