import React, { Component } from 'react';
import api from '../api/search.json';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  Picker,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList } from 'react-native';
  import Dimensions from 'Dimensions';
var deviceHeight=Dimensions.get('window').height;
var deviceWidth=Dimensions.get('window').width;
var deviceBottom=deviceHeight-40;
var scrollHeight = deviceHeight -120;

export default class SearchScreenList extends Component {
    constructor(props){
      super(props);
      this.state = {
        data:api,
        searchQuery:''
        
      }
    }
    input(event){
      this.setState({
        searchQuery:event.nativeEvent.text
      })
    }
    render() {
        console.log("route back",this)
        var self=this
        return (
              <View style={styles.Wrapper}>
                  < ScrollView style={styles.searchContainer}>
                      <View style={styles.searchBox}>
                        <Image  source = {require('../images/search_small.png')}></Image>
                        <TextInput style={styles.textInputBox}
                          onChange={(event) => this.input(event)}
                          underlineColorAndroid = "transparent"
                          placeholder="Search For Venues"
                          autoCapitalize="none"
                        />
                      </View >
                        {
                          this.state.searchQuery.length>0 ? (<FlatList 
                          data={this.state.data}
                          extraData={this.state}
                          renderItem={(items) =>{
                                var title=items.item.title.toLowerCase();
                                var query=self.state.searchQuery.toLowerCase();

                                if(title.indexOf(query)<0){
                                  return null;
                                }  
                                return(
                                   <View style={styles.searchDiv}>
                                      <Text style={styles.title}>{items.item.title}</Text>
                                      <Text style={styles.address}>{items.item.address}</Text>
                                    </View>
                                    )
                              
                              
                            }}
                          keyExtractor={(items, index) => items.address}
                          ></FlatList>):null
                        }
                        
                   </ScrollView>     
                    <TouchableOpacity  style={styles.canCelButton} onPress={() => this.props.navigation.navigate('BuyBaseView')}>
                      <Text style={{marginTop:10,fontSize:16,}}> Cancel</Text>
                    </TouchableOpacity>
                    <KeyboardSpacer/> 
                 </View> 
            
    );
  }
}

const styles = StyleSheet.create({

  Wrapper:{
     backgroundColor:'#ffffff',
     height:deviceHeight,
     width:deviceWidth,
    
   
  },
  searchContainer:{
    flexDirection:'column',
    marginTop:20,
    flex:1,
    height:scrollHeight,
    paddingLeft:10,
    paddingRight:10
    
  },
  searchBox:{
    
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height:40
  },
  textInputBox: {
   width:200,

    backgroundColor: '#efefef',
    color: '#424242',
  },

  resultContainer:{
    flexDirection:'column',
    flex:1,
    marginTop:8
  },
  searchDiv:{
    flexDirection:'column',
    padding:15,
    borderBottomColor: '#c3c3c3',
    borderBottomWidth: 1
  },
  title:{
    fontSize:18,
    color:'#000000'
  },
  address:{
    fontSize:12,
    color:'gray',
    marginTop:2
  },
  canCelButton:{
    marginLeft:10,
    marginRight:10,
    height:40,
    alignItems:'center',
    borderWidth:1,
    borderColor:'#d3d3d3',
    marginBottom:40
    
  }

  
});