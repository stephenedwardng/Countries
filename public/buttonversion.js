var app = function(){
  var url = "https://restcountries.eu/rest/v2/all";

  var populateButton = document.querySelector("#populate-button");
  populateButton.addEventListener('click', function(){
    makeRequest(url, requestComplete)
  });

//  makeRequest(url, requestComplete);
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
  var ul = document.getElementById('country-list');

  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }

  countries.forEach(function(country){
    var li = document.createElement('li');
    li.innerText = country.name;
    ul.appendChild(li);
  })
}


window.addEventListener('load', app);