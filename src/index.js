import _ from 'lodash';
import './style.css';

const check = document.createElement('h2');
check.textContent = 'Testing Connection hello';

document.body.appendChild(check);

//search specific location
//toggle fahrenheit or celsius
//change the look of the page based on the data

const checkLocation = 'montebello';

async function getForecast() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=84aeac0362a74d1d87732615232207&q=${checkLocation}`,
    { mode: 'cors' }
  );

  const locationForecast = await response.json();
  console.log(locationForecast);

  console.log(locationForecast.location.name);
  console.log(locationForecast.location.region);
  console.log(locationForecast.location.country);
  console.log(locationForecast.location.localtime);

  console.log(locationForecast.current.condition.text);
  console.log(locationForecast.current.condition.code);
  console.log(locationForecast.current.temp_c);
  console.log(locationForecast.current.temp_f);
}

const codeTest = 1000;

async function getIcon(codeNumber) {
  const iconResponse = await fetch(
    'https://www.weatherapi.com/docs/weather_conditions.json',
    { mode: 'cors' }
  );
  const icons = iconResponse.json();
  console.log(icons);
}

getIcon();
getForecast();
