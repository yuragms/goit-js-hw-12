
function fetchCountries(inputValue) {
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}`;
    return fetch (url)
    .then(response => { return response.json();})

}
export default { fetchCountries };