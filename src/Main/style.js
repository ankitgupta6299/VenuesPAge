import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
var deviceHeight=Dimensions.get('window').height;
var deviceWidth=Dimensions.get('window').width;

 module.exports = StyleSheet.create({
                        
                        container: {

                            height:270,  
                            
                            
                        },
                        text: {
                            color: 'black'
                        },
                            demoImage:{
                        height:200,
                        width:deviceWidth,
                        

                        resizeMode: 'stretch',
                            },
                        headerView:{
                            top:20,
                        height:50,

                        flexDirection:'row'


                        },
                        headerText:{
                        alignSelf:"center",
                        fontSize:20,
                        top:10,
                        paddingLeft:60




                        },
                        searchImageStly:{

                        left:80

                        },
                        imgDiscrptions:{
                        height:100,
                        
                  

                        },
                        Brasstextstyle:{
                        fontSize:20, 
                        marginTop:5
                        },

                        PersonTextstyle:{
                            fontSize:12,
                            padding:1,
                            flex:1,
                            marginTop:5,
                            marginLeft:150

                        },
                            CraftBeertextstyle:{
                                fontSize:18,
                                color:'#00CFD3',
                                paddingLeft:10
                            },
                            bottomView:{
                                height:70
                            }
           });