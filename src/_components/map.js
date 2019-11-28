import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        return (
            <Map
              className='map'
              google={this.props.google}
              zoom={4}
              initialCenter={{ lat: this.props.latlng[0], lng: this.props.latlng[1]}}
            >
            <Marker position={{ lat: this.props.latlng[0], lng: this.props.latlng[1]}} />
            </Map>
        );
      } 
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDTmbT1uUlkoIiIYYDxpGOgM693uY6yKuo'
  })(MapContainer);

