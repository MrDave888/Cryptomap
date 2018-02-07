import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        initialCenter={{
          lat: 37.759,
          lng: -122.428
        }}
      >
      <Marker
        name={'Dolores park'}
        position={{lat: 37.759703, lng: -122.428093}} />

      <Marker
        name={'Dolores Square'}
        position={{lat: 37.859703, lng: -122.528093}} />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBhOxZUEsHd7Ql9KoMh_D7ec8SmuoqKz0Y')
})(MapContainer)
