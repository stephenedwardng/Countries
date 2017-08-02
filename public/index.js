// grab the 'select' by its ID
// For each of the countries from the country JSON object, create an 'option' - COMPLETE
// Add an event listener to the select
// On select, display country details (name, population, capital)

// persist in local storage

var app = function(){
  var url = "https://restcountries.eu/rest/v2/all";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  // var country = countries[0];
  populateSelect(countries);
}

var populateSelect = function(countries){
  var select = document.getElementById('country-select');

  countries.forEach(function(country){
    var option = document.createElement('option');
    option.innerText = country.name;

    option.addEventListener('click', function(){
      displayCountry(country)
    });
    select.appendChild(option);
  })

}

var displayCountry = function(country){
  var ul = document.getElementById('country-details');
    var nameLi = document.createElement('li');
    nameLi.innerText = country.name;
    ul.appendChild(nameLi);

    var populationLi = document.createElement('li');
    populationLi.innerText = country.population;
    ul.appendChild(populationLi);

    var capitalLi = document.createElement('li');
    capitalLi.innerText = country.capital;
    ul.appendChild(capitalLi);
}


window.addEventListener('load', app);