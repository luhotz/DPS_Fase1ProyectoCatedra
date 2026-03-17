import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function DesktopIcon({icon,label,onPress}){

return(

<TouchableOpacity style={styles.icon} onPress={onPress}>

<Image source={icon} style={styles.image}/>

<Text style={styles.text}>{label}</Text>

</TouchableOpacity>

)
}

const styles=StyleSheet.create({

icon:{
alignItems:"center",
marginBottom:20
},

image:{
width:50,
height:50
},

text:{
color:"white",
textShadowColor:"black",
textShadowRadius:4
}

})