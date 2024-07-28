import { useRecoilState, useRecoilValue } from 'recoil'
import '../css/CountryDisplay.css'
import { selectedCountryId, fetchCountry, changeIndication } from '../State';
import { useState } from 'react';

const CountryDisplay = () => {
  // get state id and fetch relevant country
  const [countryId, setCountryId] = useRecoilState(selectedCountryId);
  const country = useRecoilValue(fetchCountry);

  // once we have country, create states from population and capital
  // to use in input
  const [population, setPopulation] = useState(country.population);
  const [capital, setCapital] = useState(country.capital);

  const [change, setChange] = useRecoilState(changeIndication);

  const updateCountry = () => {
    // first, make sure changes to either value were made
    if (population !== country.population ||
      capital !== country.capital) {

      // send new values to server
      fetch('http://localhost:3000/country/' + countryId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          population: population,
          capital: capital
        })
      }).then(async response => {
        // make sure we have correct json and no errors
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        // check for error response
        if (!response.ok) {
          // if we got error code, display error and invalidate promise
          const error = (data && data.error) || response.status;
          return Promise.reject(error);
        } else {
          // all good, return to table presentation
          setChange(change + 1);
          setCountryId(0);
        }
      }).catch(error => {
        // show error, don't return
        alert(error);
      });
    } else {
      // no change, return to table
      setChange(change + 1);
      setCountryId(0);
    }
  };

  return (
    <div className={'CountryDisplay' + (Object.keys(country).length === 0 ? ' hideDisplay' : '')}>
      <h1>{country.name}</h1>
      <div className='displayGrid'>
        <div>
          <ul>
            <li>Country Name: {country.name}</li>
            <li>Capital City:
              <input type="text"
                value={capital} 
                onChange={e => setCapital(e.target.value)} 
                onClick={(event) => event.target.select()} /></li>
            <li>Region: {country.region}</li>
            <li>Sub-Region: {country.subregion}</li>
            <li>Population:  <input type="text"
                value={population} 
                onChange={e => setPopulation(e.target.value)} 
                onClick={(event) => event.target.select()} /></li>
            <li>Time Zone: {country.timezone}</li>
            <li>Continent: {country.continent}</li>
          </ul>
        </div>
        <div>
          <img src={country.flag_url} />
        </div>
      </div>
      <button onClick={() => updateCountry()}>Update and return to list</button>
    </div>
  )
}

export default CountryDisplay