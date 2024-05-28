import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const CountrySelect = ({ width }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading countries...</p>}
      {error && <p>Error: {error}</p>}
      {countries.length > 0 && (
        <Autocomplete
          placeholder="Select a country"
          className={`${width ? width : ""}`}
          radius="sm"
          size="sm"
          color="primary"
          variant="bordered"
        >
          {countries.map((country) => (
            <AutocompleteItem key={country.cca3} value={country.cca3}>
              {country.name.common}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      )}
    </div>
  );
};

export default CountrySelect;
