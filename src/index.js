import _ from 'lodash';
import './style.css';
import getForecast from './getForecast';

//search specific location

const searchcity = document.querySelector('#city');
const searchBtn = document.querySelector('#searchbtn');
const weatherContainer = document.querySelector('#weatherContainer');
//toggle fahrenheit or celsius
//change the look of the page based on the data

const checkLocation = 'paris';
getForecast(checkLocation);

searchBtn.addEventListener('click', (e) => {
  weatherContainer.textContent = ' ';
  const newCity = searchcity.value;
  const newCityLowerCase = newCity.toLowerCase();
  getForecast(newCityLowerCase);
});
