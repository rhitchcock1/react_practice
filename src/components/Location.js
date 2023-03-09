import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


function Location(){
    
    const mapStyles = {        
        height: "75vh",
        width: "75%"};
      
      const defaultCenter = {
        lat: 40.68389, lng: -73.96762
      }
 
      const item= [
        {
          name: "rest",
          location: {
          lat: 40.68389 ,
          lng: [-73.96762]
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
        googleMapsApiKey='AIzaSyBt1QYZH6DxkMZCGZBX8nbzTEfjsL9kF1M'>
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