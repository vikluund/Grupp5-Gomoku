import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'


let user = localStorage.getItem('user');

if (user) {
  console.log(`Användare: ${user.name} ID: ${user.id}`);
} else {
  console.log('User not found in local storage');
  fetch('http://localhost:3000/api/gomoku/player/create')
    .then((response) => response.json())
    .then((aUser) => {
      console.log(aUser);
      user = aUser;
      localStorage.setItem('user', JSON.stringify(user));
    })
    .catch((err) => console.error('request failed', err));
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
