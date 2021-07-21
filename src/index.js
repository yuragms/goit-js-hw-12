import './scss/styles.scss';
import countyTemplates from './templates/country.hbs';
import countyListTemplates from './templates/listCountry.hbs';
import API from './js/fetchCountries.js';
import debounce from 'lodash.debounce';

import Notiflix from "notiflix";


const countryInfo = document.querySelector('.country-info');
const searchInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

const DEBOUNCE_DELAY = 300;

searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));


function onSearch (e) {
    
  e.preventDefault();
  let inputValue = e.currentTarget.value;
  console.log(inputValue);
  if (inputValue.trim('') === '') { clearListCountry();   return;  }
  API.fetchCountries(inputValue)
  .then(renderCountry)
  .catch(onFetchError);
}




function renderCountry (countries) {
    if ( countries.status === 404) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        clearListCountry();
    } else {
    // console.log(countries.status);
    let countCountries = countries.length;
    // console.log(countCountries);
    if (countCountries === 1) {
        
        console.log('one');
        countryInfo.innerHTML = countyTemplates(countries[0]);
        clearListCountry();
        // Notiflix.Notify.Init({useFontAwesome:true,fontAwesomeIconStyle:"shadow",});
       }

    else {
    if (countCountries > 1 && countCountries < 11 ) { 
        // console.log("стран от 1 до 10");
        countryList.innerHTML = countyListTemplates(countries);
        clearCountryInfo();
    } 
    else { Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')}
    }

}}

function onFetchError (error) {
    alert('error');
}

function clearListCountry() {
    countryList.innerHTML = '';
   
}

function clearCountryInfo() {
    countryInfo.innerHTML = '';
}




