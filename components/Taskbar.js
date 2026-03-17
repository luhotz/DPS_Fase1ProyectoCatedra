import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Taskbar(){

return(

<View style={styles.taskbar}>

<View style={styles.startButton}>
<Text style={styles.startText}>Inicio</Text>
</View>

<View style={styles.clock}>
<Text style={{color:"white"}}>00:00</Text>
</View>

</View>

)
}

const styles=StyleSheet.create({

taskbar:{
position:"absolute",
bottom:0,
width:"100%",
height:40,
backgroundColor:"#1f4ea3",
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

startButton:{
backgroundColor:"#2aa32a",
paddingHorizontal:15,
paddingVertical:5,
marginLeft:5,
borderRadius:10
},

startText:{
color:"white",
fontWeight:"bold"
},

clock:{
marginRight:10
}

})