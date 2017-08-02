/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  AppRegistry,
  MapStyle
} from 'react-native';
import MapView from 'react-native-maps';




 export  default class MapSearch extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      marker1: true,
      marker2: false,
    };
  }



names= [
{lat:36.116203,long:-119.681564,name :'California'},
{lat:27.766279,long:-81.686783,name : 'Florida'},
{lat:35.565342,long:-96.928917,name : 'Oklahoma'},
{lat:31.054487,long:-97.563461,name : 'Texas'},
{lat:40.150032,long:-111.862434,name : 'Utah'},
{lat:47.400902,long:-121.490494,name : 'Washington'},
{lat:39.063946,long:-76.802101,name :'Maryland'},
{lat:61.370716,long:-152.404419,name : 'Alaska'},
{lat:44.240459,long:-114.478828,name : 'Idaho'},
{lat: 38.313515,long:-117.055374,name : 'Nevada '},
{lat: 46.921925 ,long:-110.454353,name : 'Montana'},
{lat: 44.572021 ,long:-122.070938,name : 'Oregon'},
      ]
 


  render() {
    


    return (
      <View style ={styles.Mapcontainer}>

        
       <MapView
          style={styles.map}
         region={{
            latitude: 40.150032,
           longitude: -115.4324,
           latitudeDelta: 0.5,
            longitudeDelta: 0.,
         }}
        >

         {
     this.names.map((item, index) => (
      <MapView.Marker
          
            coordinate={{
              latitude:item.lat,
              longitude: item.long,
            }}
             image={require('../images/marker.png')}
         
          >
          
          </MapView.Marker>

               ))}
        </MapView>
      </View>
    );
  }
}

MapSearch.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  Mapcontainer: {
    marginTop:80,
    flex:1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  
  },
});