import React, { Component } from 'react'
import { connect } from "react-redux";
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class Weather_list extends Component {
    renderWeather(cityData)
    {
        const name = cityData.city.name; //fetching the name of the city form the searched...
        const temps = cityData.list.map(weather =>weather.main.temp);//this is fetching the information from the api using ajax request as well as other details...
        const pres = cityData.list.map(weather=>weather.main.pressure);
        const humi = cityData.list.map(weather=>weather.main.humidity);
        const { lon,lat } = cityData.city.coord;
        // console.log(humi);
        return( // this is mapping to chart component and googlemap component by (state,props)
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td> 
                <td><Chart data={temps} color="red" unit="K" /></td>
                <td><Chart data={pres} color="blue" unit="hPa" /></td>
                <td><Chart data={humi} color="orange" unit="%" /></td>
            </tr>
        );
    }

  render() {
    return (
      <table className="table table-hover">
      <thead>
          <tr>
              <th>City</th>
              <th>Temprature(K)</th>
              <th>Pressure(hPa)</th>
              <th>Humidity(%)</th>
          </tr>
      </thead>
        <tbody>
            {this.props.weather.map(this.renderWeather)} 
        </tbody>
      </table>
    );
  }
}

function mapState({weather})
{
    return{weather}; // ES6 version of code // basic version: return{ weather: state.weather }; 
}

export default connect(mapState)(Weather_list);//connection the weather into the list...