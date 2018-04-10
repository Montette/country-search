const url = 'https://restcountries.eu/rest/v2/name/';
const countriesList = $('#countries');

const searchCountries = () => {
    let countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.getJSON(url + countryName)
        .done(showCountriesList)
        .fail(showError)
}

$('#search').click(searchCountries);

//run fuction on a keypress event
$('#country-name').keyup(e => {
    if (e.which === 13) {
        searchCountries();
    }
});

//Function execute in case of 404 error
const showError = () => {
    countriesList.empty();
    $('.list').remove();
    $('#country-name').after('<h2 class="list">Country not found</p>');
}

// Show country

const showCountriesList = (resp) => {
    const source   = document.getElementById("country").innerHTML,
          template = Handlebars.compile(source);

    let context, html, content = '';

    countriesList.empty();
    $('.list').remove();
    $('#country-name').after('<h2 class="list">List of countries</p>');
    resp.forEach(item => {
        context = {
            flag: item.flag,
            name: item.name,
            population: item.population,
            area: item.area,
            capital: item.capital,
            language: item.languages[0].name,
            currency: item.currencies[0].code,
            timezones: item.timezones
        };

        content += template(context);        
    });

    countriesList.append(content);
}
