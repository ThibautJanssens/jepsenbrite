import React, { Component } from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from "leaflet"


export default class MapD extends React.Component {
  render() {
    return (
      <div className="map" 
         ref={ ref => this.container = ref } />
    )
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.map = L.map(this.container, {
          center: new L.LatLng(50.6412, 5.5718),
          zoom: 15,
          maxZoom: 20,
          layers: new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      }, 100)
    })
  }
  
  componentWillUnmount() {
    this.map.remove()
  }
}




