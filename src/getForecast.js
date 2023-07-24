const weatherContainer = document.querySelector('#weatherContainer');

export default async function getForecast(checkLocation) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=84aeac0362a74d1d87732615232207&q=${checkLocation}`,
    { mode: 'cors' }
  );

  const locationForecast = await response.json();

  const cityName = locationForecast.location.name;
  const cityRegion = locationForecast.location.region;
  const cityCountry = locationForecast.location.country;
  const cityLocalTime = locationForecast.location.localtime;
  const forecastCondition = locationForecast.current.condition.text;
  const celsius = locationForecast.current.temp_c;
  const fahrenheit = locationForecast.current.temp_f;

  console.log(locationForecast.location.localtime);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('iconContainer');
  const iconImage = document.createElement('img');
  iconImage.classList.add('icon');
  imageContainer.appendChild(iconImage);
  iconImage.src = locationForecast.current.condition.icon;

  const dayContainer = document.createElement('div');
  dayContainer.classList.add('dayContainer');

  const cityInfoContainer = document.createElement('div');
  cityInfoContainer.classList.add('cityInfoContainer');

  const cityNameContainer = document.createElement('h2');
  cityNameContainer.textContent = cityName;

  const cityRegionContainer = document.createElement('p');
  cityRegionContainer.textContent = cityRegion + ', ' + cityCountry;

  cityInfoContainer.appendChild(cityNameContainer);
  cityInfoContainer.appendChild(cityRegionContainer);

  const tempContainer = document.createElement('div');
  tempContainer.classList.add('tempContainer');

  const fahrenheitContainer = document.createElement('h2');
  fahrenheitContainer.textContent = fahrenheit + ' F\u00B0';
  fahrenheitContainer.classList.add('temperature');

  const celsiusContainer = document.createElement('h2');
  celsiusContainer.textContent = celsius + ' C\u00B0';
  celsiusContainer.classList.add('temperature');
  celsiusContainer.classList.add('hidden');

  const changeTempBtn = document.createElement('button');
  changeTempBtn.classList.add('ChangeTempBtn');

  tempContainer.appendChild(fahrenheitContainer);
  tempContainer.appendChild(celsiusContainer);
  tempContainer.appendChild(imageContainer);
  tempContainer.appendChild(changeTempBtn);

  const forecastConditionContainer = document.createElement('p');
  forecastConditionContainer.textContent = forecastCondition;

  dayContainer.appendChild(cityInfoContainer);
  dayContainer.appendChild(tempContainer);
  dayContainer.appendChild(forecastConditionContainer);

  weatherContainer.appendChild(dayContainer);
}
