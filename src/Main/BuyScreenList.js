import React, { Component } from 'react';
import { 
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './style';
// import { Container, Button, Text,Header, Content, Tab, Tabs  } from 'native-base';
const Name=[
         {
            id: 0,
            image:require('../images/homeImg2.png'),
            personText:'  1 person here',
              BrassTacksText:"  Brass Tacks",
           CraftBeerText :"#CraftBeer  #CocktailBar  #LaidBack"
         },
         {
            id: 1,
              image:require('../images/homeImg.png'),
                 personText:'  1 person here',
                   BrassTacksText:"  Brass Tacks",
                     CraftBeerText :"#CraftBeer  #CocktailBar  #LaidBack"
            //image:require('../images/camera.png')
         },
         {
            id: 2,
             image:require('../images/homeImg.png'),
                personText:'  1 person here',
                  BrassTacksText:"  Brass Tacks",
                    CraftBeerText :"#CraftBeer  #CocktailBar  #LaidBack"
            //image:require('../images/ring.png')
         },
         {
            id: 3,
            image:require('../images/homeImg.png'),
               personText:'  1 person here',
                 BrassTacksText:"  Brass Tacks",
                   CraftBeerText :"#CraftBeer  #CocktailBar  #LaidBack"
             //image:require('../images/camera.png')
         },
         {
            id: 4,
             image:require('../images/homeImg.png'),
                personText:'  1 person here',
                  BrassTacksText:"  Brass Tacks",
                    CraftBeerText :"#CraftBeer  #CocktailBar  #LaidBack"
                //image:require('../images/ring.png')
         },
         {
            id: 5,
            image:require('../images/homeImg.png'),
               personText:'  1 person here',
                 BrassTacksText:"  Brass Tacks",
                   CraftBeerText :"#CraftBeer  #CocktailBar  #LaidBack"
            // image:require('../images/camera.png')
         }
      ]
export default class BuyScreenList extends Component {
    state = {
      names: Name
   }

   alertItemName = (item) => {
     alert(item.name)

   
   }

   render() { 
      return (
        <View>
             <ScrollView style={{top:30}}>
                 <View>    
                      {
                         this.state.names.map((item, index) => (
                           <View  key = {item.id} style = {styles.container}>
                                  <Image  source = {item.image} style={styles.demoImage} ></Image>
                                   <View style={styles.imgDiscrptions}>
                                     <View style={{height:40,flexDirection:'row' }}>
                                        <Text style={styles.Brasstextstyle}>{item.BrassTacksText}</Text> 
                                        <Text style={styles.PersonTextstyle}>{item.personText}</Text>  
                                               </View>
                                         <Text style={styles.CraftBeertextstyle}>{item.CraftBeerText}</Text>            
                                   </View>            
                           </View>
                           )
                          )
                           
                          }   
                   </View>
                   <View style={styles.bottomView}></View>

                 </ScrollView>
          </View>

      )                              
   }

}