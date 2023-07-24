import _ from 'lodash';
import './style.css';

//search specific location

const searchcity = document.querySelector('#city');
const searchBtn = document.querySelector('#searchbtn');
const weatherContainer = document.querySelector('#weatherContainer');
//toggle fahrenheit or celsius
//change the look of the page based on the data

const checkLocation = 'chicago';

async function getForecast() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=84aeac0362a74d1d87732615232207&q=${checkLocation}`,
    { mode: 'cors' }
  );

  const locationForecast = await response.json();
  console.log(locationForecast);

  const cityName = locationForecast.location.name;
  const cityRegion = locationForecast.location.region;
  const cityCountry = locationForecast.location.country;
  const cityLocalTime = locationForecast.location.localtime;
  const forecastCondition = locationForecast.current.condition.text;
  const celsius = 'celsius: ' + locationForecast.current.temp_c;
  const fahrenheit = locationForecast.current.temp_f;

  console.log(locationForecast.location.name);
  console.log(locationForecast.location.region);
  console.log(locationForecast.location.country);
  console.log(locationForecast.location.localtime);

  console.log(locationForecast.current.condition.text);

  console.log('celsius: ' + locationForecast.current.temp_c);
  console.log('fahrenheit: ' + locationForecast.current.temp_f);

  const imageContainer = document.createElement('div');
  const iconImage = document.createElement('img');
  imageContainer.appendChild(iconImage);
  iconImage.src = locationForecast.current.condition.icon;

  const dayContainer = document.createElement('div');
  dayContainer.classList.add('dayContainer');

  const cityNameContainer = document.createElement('h2');
  cityNameContainer.textContent = cityName;

  const cityRegionContainer = document.createElement('p');
  cityRegionContainer.textContent = cityRegion;

  const fahrenheitContainer = document.createElement('h2');
  fahrenheitContainer.textContent = fahrenheit;

  const forecastConditionContainer = document.createElement('p');
  forecastConditionContainer.textContent = forecastCondition;

  dayContainer.appendChild(cityNameContainer);
  dayContainer.appendChild(cityRegionContainer);
  dayContainer.appendChild(imageContainer);
  dayContainer.appendChild(fahrenheitContainer);
  dayContainer.appendChild(forecastConditionContainer);

  weatherContainer.appendChild(dayContainer);
}

getForecast();
