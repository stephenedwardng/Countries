var app = function(){
  var url = "https://restcountries.eu/rest/v2/all";
  makeRequest(url, requestComplete);

// grab the 'select' by its ID
// For each of the countries from the country JSON object, create an 'option'
// Add an event listener to the select
// On select, display country details (name, population, capital)

// persist in local storage

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
  populateList(countries);
}

var populateList = function(countries){
  var select = document.getElementById('country-select');

  countries.forEach(function(country){
    var option = document.createElement('option');
    option.innerText = country.name;
    select.appendChild(option);
  })
}


window.addEventListener('load', app);