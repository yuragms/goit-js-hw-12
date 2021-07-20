
function fetchCountries(inputValue) {
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}?fields=name;capital;currencies;flag;languages;
    `;
    return fetch (url)
    .then(response => { return response.json();})

}
export default { fetchCountries };