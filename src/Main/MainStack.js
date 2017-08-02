import React from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Iconn from 'react-native-vector-icons/Ionicons';
import BuyScreenList from './BuyScreenList';
import SearchScreenList from './SearchScreenList';
import MapSearch from './MapSearch';
import styles from './style';


const BuyBaseView = ({ navigation }) => (
    <BuyScreenList navigation={ navigation } />
);
const SearchBarDetail = ({ navigation }) => (
    <SearchScreenList navigation={ navigation } />
);

const MapView = ({ navigation }) => (
    <MapSearch navigation={ navigation } />
);


const MainStack = StackNavigator({
  BuyBaseView: {
    screen: BuyScreenList,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Hayes Valley',
      headerLeft: (
       < TouchableOpacity onPress={() => navigation.navigate('MapView')}  >
      <Image style={{height:30,width:30}} source = {require('../images/location.png')} ></Image>
      </TouchableOpacity>
          
      ),
      headerRight: (
        //  <Iconn name="ios-search-outline" style={{ paddingRight: 10, color: "#FFFFFF", fontSize: 26, fontWeight: "bold"}} onPress={() => navigation.setParams({ search:'yes' })} />

       <TouchableOpacity onPress={() => navigation.navigate('SearchScreenList')} >
         <Image style={{height:25,width:25, marginRight:10}} source = {require('../images/search.png')} ></Image>
        </TouchableOpacity>
      ),
       headerTintColor: "#000000",
       headerStyle: {
         backgroundColor:"#FFFFFF",
         
       }
    }),
  }, 
  
  MapView: {
    screen: MapSearch,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Hayes Valley',
      headerLeft: (
       < TouchableOpacity onPress={() => navigation.navigate('SearchScreenList')} >
      <Image style={{height:30,width:30}} source = {require('../images/location.png')} ></Image>
      </TouchableOpacity>
          
      ),
      headerRight: (
        //  <Iconn name="ios-search-outline" style={{ paddingRight: 10, color: "#FFFFFF", fontSize: 26, fontWeight: "bold"}} onPress={() => navigation.setParams({ search:'yes' })} />

       <TouchableOpacity onPress={() => navigation.navigate('SearchScreenList')} >
         <Image style={{height:25,width:25, marginRight:10}} source = {require('../images/search.png')} ></Image>
        </TouchableOpacity>
      ),
       headerTintColor: "#000000",
       headerStyle: {
         backgroundColor:"#FFFFFF",
         
       }
    }),
  }
  
});


export default MainStack;