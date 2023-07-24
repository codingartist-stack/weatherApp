import _ from 'lodash';
import './style.css';
import getForecast from './getForecast';

//search specific location

const searchcity = document.querySelector('#city');
const searchBtn = document.querySelector('#searchbtn');
const weatherContainer = document.querySelector('#weatherContainer');
//toggle fahrenheit or celsius
//change the look of the page based on the data

const checkLocation = 'las vegas';
getForecast(checkLocation);

searchBtn.addEventListener('click', (e) => {});
