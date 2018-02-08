import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import Markers from './Markers.js';

export class MapContainer extends Component {
  render() {
    if(Object.getOwnPropertyNames(this.props.coinmap).length === 0){
      return(
        <div>

        </div>
      )
    }else{
      return(
        <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{
            lat: 37.759,
            lng: -122.428
          }}
        >
        <Markers venues={this.props.coinmap.venues}/>

        </Map>
      )
    }


  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBhOxZUEsHd7Ql9KoMh_D7ec8SmuoqKz0Y')
})(MapContainer)
