import React from "react";
import { useState, useEffect } from "react";
import apiData from "./api";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await apiData();
      setCountries(data);
      console.log(data[0]);
    };
    fetchData();
  }, []);
  // console.log(countries);

  return (
    <div className="App">
      {countries.map((country) => {
        return (
          <div className="card">
            <img src={country.flag} alt={country.abbr} />
            <h3>{country.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
