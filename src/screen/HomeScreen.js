import { Text, StyleSheet, View ,Image, ImageBackground,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Images } from '../themes/Images'
import { Button } from 'react-native-web'
// import { ImageBackground } from 'react-native-web'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function HomeScreen({navigation})  {
   {
    return (
      <View style={styles.view1}>
      <View style={styles.View2}>
        <Image style={styles.icon} source={Images.based}></Image>
        
      </View>

      <View style={styles.view3}>
      <View style={styles.view4}>
     <ImageBackground source={Images.base2} style={styles.background}>
<Image source={Images.box}></Image>

     </ImageBackground>
      </View>

      <View style={styles.view5}>
        <Text style={{fontSize:34, textAlign:'center', color:'#2D0C57', lineHeight:41}}>
                Non-Contact
                {'\n'} Deliveries
        </Text>
        <Text style={{fontSize:17, textAlign:'center', color:'#9586A8'}}>
        When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.

        </Text>
      </View>

       <View style={styles.view6}>
       <TouchableOpacity style={styles.Button}
       onPress={()=>navigation.navigate('Detail')}
       >
          
            <Text style={{color:'white', fontSize:16,textAlign:'center'}}>Order Now</Text>
          </TouchableOpacity>

       <TouchableOpacity style={{marginTop:32}}>
          
            <Text style={{fontSize:16,textAlign:'center'}}>Dissmiss</Text>
          </TouchableOpacity>
       </View>


      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    view1:{
        flex:1,
        flexDirection:'column'
    },
    View2:{
        height:315,
        backgroundColor:'#A259FF',
    
    },
    icon:{
        height:63,
        width:63,
        marginLeft:20,
        marginTop:63
    },
    background:{
        height:104,
        width:104,
        justifyContent:'center',
        alignItems:'center'
    },
    view4:{
        marginTop:64,
        
        justifyContent:'center',
        alignItems:'center',
      
        
    },
    view3:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderTopColor:'#A259FF'
    
    },
    view6:{
        marginTop:48,
        flexDirection:'column'
    },
    Button:{
        backgroundColor:'#0BCE83',
        width:356,
        height:56,
        textAlign:'center',
        justifyContent:'center',
        marginLeft:20

    }
})