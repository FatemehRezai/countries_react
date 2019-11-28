import React, { Component } from 'react';
import '../_styles/bootstrap-grid.min.css';
import Axios from 'axios';
class Weather extends Component {
  constructor(props) {
    super(props)
    Axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: `${this.props.city},${this.props.country}`,
        APPID: '25b0509a98acd15e889f93580ebd9c07'
      }
    }).then(response => {
      this.setState({ ...response.data })
    })
  }

  render() {

    return (
      <div className="d-flex flex-column p-1 m-1 justify-content-center align-items-center weather">
        <h3>Weather</h3>
        <div className='d-flex '>
          <h2>{this.state ? this.state.weather[0].description : <span>loading...</span>}</h2>
          <img
            id="wicon"//////////////////////////////////////////////
            src={this.state && 'http://openweathermap.org/img/w/' + this.state.weather[0].icon + '.png'}
            alt="Weather icon" />
        </div>


        <div className="d-flex flex-column align-items-center">
          <p>Temperature: {this.state ? this.state.main.temp : <span>loading...</span>}</p>
          <p>Pressure: {this.state ? this.state.main.pressure : <span>loading...</span>}</p>
          <p>Humidity: {this.state ? this.state.main.humidity : <span>loading...</span>}</p>
        </div>

      </div>)
  }
}
export { Weather }