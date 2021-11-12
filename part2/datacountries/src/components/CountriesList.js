import Country from "./Country"

const CountriesList = ({countries}) => {
  if (countries === null) {
    return (<div></div>);
  } else if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    );
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]} />
    );
  } else {
    return (
      <div>
        {countries.map(country => <p key={country.name}>{country.name}</p>)}
      </div>
    );
  }
}

export default CountriesList;