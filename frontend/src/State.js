import { selector, atom } from 'recoil';

// country to be presented
const selectedCountryId = atom({
    key: 'selectedCountryId',
    default: 0,
});

// used to prevent catching 
const changeIndication = atom({
    key: 'changeIndication',
    default: 0,
});

// fetch one country by ID
const fetchCountry = selector({
    key: 'fetchCountry',
    get: async ({ get }) => {
        get(changeIndication);
        const countryId = get(selectedCountryId);
        if (countryId === 0) {
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/country/' + countryId);
            const data = await response.json();
            return data;
        } catch (error) {
            return [];
        }
    },
});

// fetch all countries
const fetchAllCountries = selector({
    key: 'fetchAllCountries',
    get: async ({ get }) => {
        get(changeIndication);
        try {
            const response = await fetch('http://localhost:3000/country');
            const data = await response.json();
            return data;
        } catch (error) {
            return [];
        }
    },
});

export { selectedCountryId, fetchAllCountries, fetchCountry, changeIndication }