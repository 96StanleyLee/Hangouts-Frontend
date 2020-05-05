import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {LocationContext} from '../contexts/LocationContext'

class MapContainer extends React.Component {

    state = {
      zoom: 11
    } 

    static contextType = LocationContext
  
    render() {
    const position = [this.context.lat, this.context.lng]
    return (
    <div style={{textAlign: "center", marginBottom: "20px"}}>
      <Map center={position} zoom={this.state.zoom} 
      style={{display: "inline-block", height: "450px", width: "800px", border:"2px solid #EB5E55", borderRadius: "25px"}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}>
          <Popup>
            You are near {this.context.currentLocation}
          </Popup>
          {this.props.restaurants.length > 0? 
          this.props.restaurants.map(result => {
          return <Marker key={result.id} position={[result.coordinates.latitude,result.coordinates.longitude]}><Popup>
            <h3>{result.name}</h3>
            <img className="popup-image" src={result.image_url}/>
            <p>{result.location.display_address.join(', ')}</p>
            <p>{result.display_phone}</p>
            <p>{result.rating}</p>
            <p>{result.price}</p>
            </Popup></Marker>
          }):null  
        }
        </Marker>
      </Map>
    </div>
    )
    }


    
}




export default MapContainer