import { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();

        if (res.ok) {
          setCountries(data);
        } else {
          throw new Error("Failed to fetch countries from the URL");
        }
      } catch (error) {
        console.error("Error fetching the countries ", error);
      }
    };

    getCountries();
  }, []);

  return (
    <div className="container">
      {countries.map((country) => (
        <div key={country.name.common} className="country">
          <div>
            <img
              className="flag"
              src={country.flags.svg}
              alt={country.name.common}
            />
          </div>
          <div className="name">{country.name.common}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
