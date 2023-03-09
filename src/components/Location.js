import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


function Location(){
    // const API = "AIzaSyBt1QYZH6DxkMZCGZBX8nbzTEfjsL9kF1M"
    const mapStyles = {        
        height: "75vh",
        width: "75%"};
      
      const defaultCenter = {
        lat: 40.650002, lng: -73.949997
      }
 
      const item= [
        {
          name: "rest",
          location: {
          lat: 40.6716 ,
          lng: [-73.9628]
          }
      }
    ];
    
      const Marker = item => {
        return <div className="SuperAwesomePin"></div>
      }

    return (
      <div>
        <h1>Map?</h1>
        <LoadScript
        googleMapsApiKey='API'>
         <GoogleMap
           mapContainerStyle={mapStyles}
           zoom={13}
           center={defaultCenter}>
         
              <Marker key={item.name} position={item.location}/>
         
          </GoogleMap>
      </LoadScript>
      </div>
    )

}

export default Location;