import React, { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount(){ //this google map component for mount on requried part... 
        new google.maps.Map(this.refs.map, { //implementing the google map on screen using googleMapApi... <refer this>index.html
            zoom:12,
            center:{
                lat:this.props.lat,
                lng:this.props.lon
            }
        });
    }

  render() {
      //this.refs.map for javascript element...
    return <div ref="map" />; //html element using refernce using for map
  }
}

export default GoogleMap;