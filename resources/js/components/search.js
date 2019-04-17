import { Map, TileLayer, Marker, MapControl, Popup, withLeaflet } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import MapD from './map'
import React, { Component } from 'react';


class Search extends MapD {

    createLeafletElement() {
      return GeoSearchControl({
        provider: new OpenStreetMapProvider(),
        style: 'bar',
        showMarker: true,
        showPopup: false,
        autoClose: true,
        retainZoomLevel: false,
        animateZoom: true,
        keepResult: false,
        searchLabel: 'search'
      });
    }
    // componentDidMount() {
    //     const { map } = this.props.leaflet;
    //     map.addControl(this.leafletElement);
    //   }
  }

export default Search;