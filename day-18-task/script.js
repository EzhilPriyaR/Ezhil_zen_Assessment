let firstCardHeader = document.querySelector('.firstCardHeader');
let firstcardbody  = document.querySelector('.firstcardbody');
let secondCardHeader = document.querySelector('.secondCardHeader');
let secondCardBody = document.querySelector('.secondCardBody');
let thirdcardHeader = document.querySelector('.thirdcardHeader');
let thirdCardBody = document.querySelector('.thirdCardBody');
let weatherDiv = document.querySelector('.weatherDiv');



function loadFirstCard(restcountry){
    let headerDiv = document.createElement('div');
    headerDiv.innerHTML = `${restcountry.name.common}`;
    firstCardHeader.append(headerDiv);

    let card = `<ul class="list-group list-group-flush">
                     <li class="list-group-item">
                     <img src=${restcountry.flags.png} class="card-img-top" alt=${restcountry.name.common}>
                     </li>
                     <li class="list-group-item">Capital: ${restcountry.capital}</li>
                     <li class="list-group-item">Region: ${restcountry.region}</li>
                     <li class="list-group-item">Country Code: ${restcountry.cioc}</li>
                     <li class="list-group-item">laatlng: ${restcountry.latlng}</li>
                     <li class="list-group-item">
                         <button type="button" class="btn btn-light firstWeatherButton">WEATHER</button>
                     </li>
                </ul>`;
    firstcardbody.innerHTML = card;

    document.querySelector('.firstWeatherButton').addEventListener('click', event => {
        displayWeather(`${restcountry.latlng}`);
    });
}

function loadSecondCard(restcountry){
    let headerDiv = document.createElement('div');
    headerDiv.innerHTML = `${restcountry.name.common}`;
    secondCardHeader.append(headerDiv);

    let card = `<ul class="list-group list-group-flush">
                     <li class="list-group-item">
                     <img src=${restcountry.flags.png} class="card-img-top" alt=${restcountry.name.common}>
                     </li>
                     <li class="list-group-item">Capital: ${restcountry.capital}</li>
                     <li class="list-group-item">Region: ${restcountry.region}</li>
                     <li class="list-group-item">Country Code: ${restcountry.cioc}</li>
                     <li class="list-group-item">laatlng: ${restcountry.latlng}</li>
                     <li class="list-group-item">
                         <button type="button" class="btn btn-light secondWeatherButton">WEATHER</button>
                     </li>
                </ul>`;
    secondCardBody.innerHTML = card;

    document.querySelector('.secondWeatherButton').addEventListener('click', event => {
        displayWeather(`${restcountry.latlng}`);
    });
    
}

function loadThirdCard(restcountry){
    let headerDiv = document.createElement('div');
    headerDiv.innerHTML = `${restcountry.name.common}`;
    thirdcardHeader.append(headerDiv);
    
    let card = `<ul class="list-group list-group-flush" style="background-color: rgb(161, 158, 157);">
                     <li class="list-group-item">
                     <img src=${restcountry.flags.png} class="card-img-top" alt=${restcountry.name.common}>
                     </li>
                     <li class="list-group-item">Capital: ${restcountry.capital}</li>
                     <li class="list-group-item">Region: ${restcountry.region}</li>
                     <li class="list-group-item">Country Code: ${restcountry.cioc}</li>
                     <li class="list-group-item">laatlng: ${restcountry.latlng}</li>
                     <li class="list-group-item">
                         <button type="button" class="btn btn-light weatherButton">WEATHER</button>
                     </li>
                </ul>`;
    thirdCardBody.innerHTML = card;

    document.querySelector('.weatherButton').addEventListener('click', event => {
        displayWeather(`${restcountry.latlng}`);
    });
}

async function displayWeather(cityName){
    let latlang = cityName.split(',');
    let latitude = parseInt(latlang[0]);
    let longitude = parseInt(latlang[1]);
    const apiKey = 'd911f949f2d44d7d6955bb4b8afbdea5';
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
        let weatherData = await response.json();
        let div = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-dark">Weather for ${weatherData.name}</li>
                            <li class="list-group-item list-group-item-secondary"><strong>Temperatue:</strong> ${weatherData.main.temp}</li>
                            <li class="list-group-item list-group-item-secondary"><strong>Pressure:</strong> ${weatherData.main.pressure}</li>
                            <li class="list-group-item list-group-item-secondary"><strong>Humidity:</strong> ${weatherData.main.humidity}</li>
                            <li class="list-group-item list-group-item-secondary"><strong>Sea Level:</strong> ${weatherData.main.sea_level}</li>
                            <li class="list-group-item list-group-item-secondary"><strong>Ground Level:</strong> ${weatherData.main.grnd_level}</li>
                            <li class="list-group-item list-group-item-secondary"><strong>Wind Speed:</strong> ${weatherData.wind.speed}</li>
                        </ul>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                   </div>`;
        weatherDiv.innerHTML = div;
    }catch(error){
        console.log('error loading the weather')
    }
}

/* the methoad is for loading data from restcountry api */
async function loadRestCountries(){
    try{
        let response = await fetch(`https://restcountries.com/v3.1/all`);
        let restCountryList = await response.json();
        for(let restcountry of restCountryList){
            if(restcountry.name.common === "India"){
                loadSecondCard(restcountry);
            }else if(restcountry.name.common === "China"){
                loadFirstCard(restcountry);
            }else if(restcountry.name.common === "South Korea"){
                loadThirdCard(restcountry);
            }
        }

    }catch(error){
        console.log("error loading restCountries");
    }

}


function setVisible(){
    loadRestCountries();
}

onReady(function(){
    setVisible();
});

function onReady(callBack){
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
          window.clearInterval(intervalId);
          callBack.call(this);
        }
      }, 1000);
}