import React from 'react'
import HEREMap, { Marker, RouteLine } from 'here-maps-react'
 
export default class Map extends React.Component {
    render() {
      return (
        <HEREMap
          appId="my_app_id"
          appCode="my_app_code"
          center={{ lat: -12.0464, lng: -77.0428 }}
          zoom={12}
        >
          <Marker lat={-12.1199408} lng={-77.037241} />
          <Marker lat={-12.1261171} lng={-77.02060549999999} />
          <RouteLine
            shape={this.state.shape}
            strokeColor="#48dad0"
            lineWidth={4}
          />
        </HEREMap>
      )
    }
  }