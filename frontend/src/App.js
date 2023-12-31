import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from "react";

function App() {
    const makeApiRequest = () => {
        axios.get("/api/users").then((response) => {
            console.log(response)
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload 123.425
                </p>
                <button onClick={makeApiRequest}>Отримати користувачів</button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
