import './scss/styles.scss';
import countyTemplates from './templates/country.hbs';

const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

const countryArr = fetch ('https://restcountries.eu/rest/v2/name/uk')
.then(response => { return response.json();})
.then( countries => {
    console.log(countries);
    countryInfo.innerHTML = countyTemplates(countries[0]);
})
.catch( error => {console.log('error');});

console.log(countryArr);

countryInfo.innerHTML = countyTemplates();

