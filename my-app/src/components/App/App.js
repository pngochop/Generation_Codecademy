import React, { useState } from 'react';
import axios from 'axios';
//import logo from '../../logo.svg';
import './App.css';
//import '../SearchBar/SearchBar.css'
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
//import Business from '../Business/Business';

function FectDataF() {
  // Component variables go here
  const [persions, setPersons] = useState(null);
  const apiURL = "https://hopp-lab4-backend.herokuapp.com/contacts?memberid=72";
  // fetch data from server
    const fetchData = async () => {
        const response = await axios.post(apiURL, {"memberid":72})
        //const response = await axios.get(apiURL)
        setPersons(response.data.data) 
    }
  return (
    <div>
      <h1>My heroku server</h1>
      <h2>Fetch data from an API and display it</h2>

      <div>
        <button className="SearchBar-submit" onClick={fetchData}>
          Fetch Data 
        </button>
      </div>

      <div className="books">
      {persions &&
      persions.map((persion, index) => {
            //const cleanedDate = new Date(book.released).toDateString();
            //const authors = book.authors.join(', ');

            return (
              <div className="book" key={index}>
                <h3>Person {index + 1}</h3>
                <h2>{persion.firstname}</h2>

                <div className="details">
                  <p>👨: {persion.lastname}</p>
                  <p>🏘️: {persion.email}</p>
                  <p>⏰: {}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
        <FectDataF />
      </div>
    );
  }
}

export default App;