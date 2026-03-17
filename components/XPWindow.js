import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function XPWindow({title,children}){

return(

<View style={styles.window}>

<View style={styles.titleBar}>
<Text style={styles.title}>{title}</Text>
</View>

<View style={styles.content}>
{children}
</View>

</View>

)
}

const styles=StyleSheet.create({

window:{
backgroundColor:"#d4d0c8",
margin:40,
borderWidth:2,
borderColor:"#000"
},

titleBar:{
backgroundColor:"#0a246a",
padding:8
},

title:{
color:"white",
fontWeight:"bold"
},

content:{
padding:20
}

})