import { useRecoilValue } from 'recoil';
import CountryDisplay from './components/CountryDisplay'
import CountrySelector from './components/CountrySelector'
import './css/App.css'
import { selectedCountryId } from './State';

const App = () => {
  const countryId = useRecoilValue(selectedCountryId);

  // toggle between table presentation and single country presentation
  return (
    <div className='mainApp'>
      <div>
        <div>
          {countryId === 0 ?
            <CountrySelector /> : 
            <CountryDisplay />
          }
        </div>
      </div>
    </div>
  )
}

export default App

