import React, { useState } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
}*/
function App() {
  // Component variables go here
  const [books, setBooks] = useState(null);
  const apiURL = "https://hopp-lab4-backend.herokuapp.com/";
  // const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setBooks(response.data) 
    }
  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
      </div>
      
      <div className="books">
        {books}
      </div>
    </div>
  );
}

export default App;