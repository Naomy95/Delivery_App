import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../themes/Images'
import {FontAwesome5} from "@expo/vector-icons"

export default function Detail() {
  return (
    <View style={{flexDirection:'column'}}>
      <View style={{height:281}}>
        <Image style={{height:281}} source={Images.media}></Image>
      </View>
      <View style={{marginTop:37, padding:20}}>
        <Text style={styles.text}>Boston Lettuce</Text>
        <View style={{marginTop:16, flexDirection:'row'}}>
          <Text style={{fontSize:32,color:'#2D0C57'}}>1.10</Text>
          <Text style={{fontSize:24,color:"#9586A8"}}>€ / piece</Text>
        </View>

        <Text style={{color:'#06BE77', fontSize:17}} >~ 150 gr / piece</Text>
        <View style={{marginTop:32}}>
          <Text style={{fontSize:22,color:"#2D0C57"}}>Spain</Text>
          <Text style={{color:'#9586A8', fontSize:17,marginTop:16}}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:56}}>
          <TouchableOpacity style={{width:78, height:56}}>
            <Image source={Images.button} style={{width:78, height:56}}></Image>
          </TouchableOpacity>
        <TouchableOpacity style={styles.Button}
       >
          <FontAwesome5 name='shopping-cart' size={15} style={styles.icon}></FontAwesome5>
            <Text style={{color:'white', fontSize:15, marginLeft:17, paddingTop:22}}>Add to cart</Text>
          </TouchableOpacity>

       
            
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'#2D0C57',
    fontSize:30,

  },
  Button:{
    width:255,
    height:56,
    marginLeft:21,
    
    backgroundColor:'#0BCE83',
    flexDirection:'row'
  },
  icon:{
    color:'white',
    paddingLeft:68,
    paddingTop:22,
    
  }
})