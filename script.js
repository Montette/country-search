const url = 'https://restcountries.eu/rest/v2/name/';
const countriesList = $('#countries');

$('#search').click(searchCountries);

//run fuction on a keypress event
$('#country-name').keyup(e => {
    if (e.which === 13) {
        searchCountries();
    }
});

function searchCountries() {
    let countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.getJSON(url + countryName)
        .done(showCountriesList)
        .fail(showError)
}

//Function execute in case of 404 error
const showError = () => {
    countriesList.empty();
    $('.list').remove();
    $('#country-name').after('<h2 class="list">Country not found</p>');
}

// Show country

const showCountriesList = (resp) => {
    countriesList.empty();
    $('.list').remove();
    $('#country-name').after('<h2 class="list">List of countries</p>');
    resp.forEach(item => {
        //create table
        const table = $(`
        <table class="country">
            <tr class="row">
                <td>
                    <img src="${item.flag}" alt="" class="flag">
                </td>
                <td class="name">${item.name}</td>
            </tr>
            <tr>
                <td class="informations" colspan="2">Background Informations</td>
            </tr>
            <tr>
                <td class="description">Capital: </td>
                <td class="value">${item.capital}</td>
            </tr>
            <tr>
                <td class="description">Area: </td>
                <td class="value">${item.area} km<sup>2</sup></td>
            </tr>
            <tr>
                <td class="description">Population: </td>
                <td class="value">${item.population}</td>
            </tr>
            <tr>
                <td class="description">Languages: </td>
                <td class="value">${item.languages[0].name}</td>
            </tr>
            <tr>
                <td class="description">Currency: </td>
                <td class="value">${item.currencies[0].code}</td>
            </tr>
            <tr>
                <td class="description">Timezone: </td>
                <td class="value">${item.timezones}</td>
            </tr>
            <tr>
                <td class="informations" colspan="2"></td>
            </tr>
        </table>
`)
        table.appendTo(countriesList);
    });
}
