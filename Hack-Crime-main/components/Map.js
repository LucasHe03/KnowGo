import React from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Heatmap } from 'react-native-maps';

const Map = (props) => {
  

  return (
    // <View>
    <MapView
         style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         scrollEnabled = {true}
         zoomEnabled = {true}
         
         
         region={{
          
            latitude: 29.780875,
            longitude: -95.350348,
            latitudeDelta: 0.99,
            //longitudeDelta: 0.00002,

         }}>
         
       
      
         <Heatmap points={props.crime}
                         opacity={1}
                         radius={30}
                         maxIntensity={100}
                         gradientSmoothing={100}
                         heatmapMode={"POINTS_DENSITY"}
                         
                         gradient={{
                          colors: ["#990012"],
                          startPoints: [0.5],
                          colorMapSize: 256,
                         }}
                         
                         /> 
                         <View style={{backgroundColor: "#C1A87D"}}>
          <Text style={{ fontSize: 50, color: "#9D801E", fontFamily: "AvenirNext-Heavy", alignContent: "center", marginTop: 40}}>        KnowGo</Text>
          </View>
      
      </MapView> 
      /* </View> */

  );
}

export default Map;