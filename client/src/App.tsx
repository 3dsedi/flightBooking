import React , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import {FetchData} from './interfaces/FlightInterFace'

import './App.css';
import SearchResult from './components/SearchResult';

function App() {
  const [searchResult, setSearchResult] = useState<FetchData>({message: '', flights: []});

  const searchHandler = async (enteredData: {
    from: string;
    to: string;
    date: string;
    directFlight: boolean
  }) => {
    console.log(enteredData)
    const { from, to, date, directFlight } = enteredData;
    const reqBody = { from, to, date, directFlight};
    const response = await fetch("http://localhost:8000/api/flights", {
      mode: 'cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(reqBody),
      
    });

    if (response.status === 200) {
      const result = await response.json();
      console.log(result)
      setSearchResult(result);
    ;
      
    }
      
  };
   
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home onSearch={searchHandler}/> }  />
        <Route path="/search-results" element={<SearchResult searchResult={searchResult} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
