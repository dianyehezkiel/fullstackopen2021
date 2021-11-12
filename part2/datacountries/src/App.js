import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import CountriesList from './components/CountriesList';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(null);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  const filterChange = (filter) => {
    const fc = filter
      ? countries.filter((countries) => countries.name.toLowerCase().includes(filter.toLowerCase()))
      : null;

    setFilteredCountries(fc);
  };


  return (
    <div>
      <Filter onChange={filterChange} />
      <CountriesList countries={filteredCountries} />
    </div>
  );
}

export default App;
