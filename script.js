var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);


    $('#country-name').keyup(function(e) {
        if (e.which === 13) {
            searchCountries();
        }
    });

function searchCountries (){
    var countryName =  $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
//    $.ajax({
//        url: url + countryName;
//        method: 'GET';
//        success: showCountriesList
//    });
    $.getJSON(url+countryName, showCountriesList);
    
}

function showCountriesList(resp) {
  countriesList.empty();
     resp.forEach(function(item) {
         var table = $('<table>').addClass('country').appendTo(countriesList);
        var row =  $('<tr>').addClass('row').appendTo(table);
         
    	var flagTd = $('<td>').appendTo(row);
//          $('<figure>').addClass('flagBox').appendTo(flagTd);
      $('<img>').addClass('flag').attr('src', item.flag).appendTo(flagTd);
         $('<td>').text(item.name).addClass('name').appendTo(row);
         
         
         //background informations row
         var row =  $('<tr>').appendTo(table);
           $('<td>').text("Background Informations").addClass('informations').attr('colspan', '2').appendTo(row);
         
         //Capital
         var row =  $('<tr>').addClass('row').appendTo(table);
          $('<td>').text("Capital: ").addClass('description').appendTo(row);
          $('<td>').text(item.capital).addClass('value').appendTo(row);
               
         
         //Area
         var row =  $('<tr>').addClass('row').appendTo(table);
          $('<td>').text("Area: ").addClass('description').appendTo(row);
          var area = $('<td>').text(item.area + ' km').addClass('value').appendTo(row);
         var sup = $('<sup>').text("2").appendTo(area);
         
         
         //Population
         var row =  $('<tr>').addClass('row').appendTo(table);
          $('<td>').text("Population: ").addClass('description').appendTo(row);
          $('<td>').text(item.population).addClass('value').appendTo(row);
         
         
         //languages
         var row =  $('<tr>').addClass('row').appendTo(table);
          $('<td>').text("Languages: ").addClass('description').appendTo(row);
          $('<td>').text(item.languages[0].name).addClass('value').appendTo(row);
         
          //Currency
         var row =  $('<tr>').addClass('row').appendTo(table);
          $('<td>').text("Currency: ").addClass('description').appendTo(row);
          $('<td>').text(item.currencies[0].code).addClass('value').appendTo(row);
         
         //Timezone
         var row =  $('<tr>').addClass('row').appendTo(table);
          $('<td>').text("Timexone: ").addClass('description').appendTo(row);
          $('<td>').text(item.timezones).addClass('value').appendTo(row);
         
        
         var row =  $('<tr>').addClass('informations').appendTo(table);
           $('<td>').attr('colspan', '2').appendTo(row)
     
     
    });
}