import axios from 'axios';

const API_KEY = '2e0b9076c6fce7de4a3ddd1644acfd83'; //API key for weather
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //this is weather forecast fetching URL...

export const FETCH = 'FETCH_WEATHER';
export function fetchWeather(city)
{
    const url = `${URL}&q=${city},in`;
    const request = axios.get(url); //middleware used for the ajaxRequest by using axios
    
    // console.log('Request:',request);
    
    return{
        type: FETCH,
        payload : request  //action passes to the reducers_weather...
    };
}