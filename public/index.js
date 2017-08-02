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
  populateSelect(countries);
}

var populateSelect = function(countries){
  // grab the 'select' by its ID - COMPLETE
  var select = document.getElementById('country-select');
  // For each of the countries from the country JSON object, create an 'option' - COMPLETE

  countries.forEach(function(country, index){
    var option = document.createElement('option');
    option.innerText = country.name;
    option.value = index;
    select.appendChild(option);
  });

  // Add an event listener to the select - COMPLETE
  // On select, display country details (name, population, capital) - COMPLETE
  select.addEventListener('change', function(){
    var country = countries[this.value];
    var ul = document.getElementById('country-details');

    while(ul.firstChild){
      ul.removeChild(ul.firstChild);
    }

    var nameLi = document.createElement('li');
    nameLi.innerText = country.name;
    ul.appendChild(nameLi);

    var populationLi = document.createElement('li');
    populationLi.innerText = country.population;
    ul.appendChild(populationLi);

    var capitalLi = document.createElement('li');
    capitalLi.innerText = country.capital;
    ul.appendChild(capitalLi);
  });
}





window.addEventListener('load', app);