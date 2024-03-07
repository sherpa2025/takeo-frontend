import { useState, useEffect } from "react";

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();

        if (data.success) {
          setCountries(data);
        } else {
          throw new Error("Failed to fetch countries from the ");
        }
      } catch (error) {
        console.error("Error fetching the countries ", error);
      }
    };

    getCountries();
  }, []);

  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            <img
              src={country.flags.svg}
              alt={country.name.common}
              width="30"
              height="20"
            />
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
