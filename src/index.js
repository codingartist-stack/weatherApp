import _ from 'lodash';
import './style.css';

const check = document.createElement('h2');
check.textContent = 'Testing Connection hello';

document.body.appendChild(check);

//search specific location
//toggle fahrenheit or celsius
//change the look of the page based on the data

const location = 'montebello';

async function getCurrentWeather() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=84aeac0362a74d1d87732615232207&q=${location}`,
    { mode: 'cors' }
  );
  const locationData = await response.json();
  console.log(locationData);

  //only get the fahrenheit, celsius, condition code, condition text, condition icon, humidity
}

async function getForecast() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=84aeac0362a74d1d87732615232207&q=${location}`,
    { mode: 'cors' }
  );

  const locationForecast = await response.json();
  console.log(locationForecast);
}

getCurrentWeather();
getForecast();
