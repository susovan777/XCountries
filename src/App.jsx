import React from "react";
import { useState, useEffect } from "react";
import apiData from "./api";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://xcountries-backend.azurewebsites.net/all");
        const apiData = await data.json();
        setCountries(apiData);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };
    fetchData();
  }, []);
  // console.log(countries);

  return (
    <div className="App">
      {countries.map((country) => {
        return (
          <div className="card" key={country.name}>
            <img src={country.flag} alt={country.name} />
            <h3>{country.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
