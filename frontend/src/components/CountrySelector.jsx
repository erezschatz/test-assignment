import { useRecoilValue, useSetRecoilState } from 'recoil'
import '../css/CountrySelector.css'
import { selectedCountryId, fetchAllCountries } from '../State'

const CountrySelector = () => {
  const allCountries = useRecoilValue(fetchAllCountries);
  const setSelectedCountry = useSetRecoilState(selectedCountryId);

  return (
    <div className='CountrySelector'>
      <table>
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Capital</th>
            <th>Region</th>
            <th>sub-region</th>
            <th>Population</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            allCountries.map(country =>
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>{country.subregion}</td>
                <td>{country.population.toLocaleString()}</td>
                <td><button onClick={() => setSelectedCountry(country.id)}>Details</button></td>
              </tr>)
          }
        </tbody>
      </table>

    </div>
  )
}

export default CountrySelector