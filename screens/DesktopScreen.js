import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import DesktopIcon from "./../components/DesktopIcon.js";
import Taskbar from "./../components/Taskbar.js";

export default function DesktopScreen({navigation}){

return(

<ImageBackground
source={require("../assets/images/desktop.windowsxp.jpg")}
style={styles.desktop}
resizeMode="cover"
>

<View style={styles.icons}>

<DesktopIcon
icon={require("../assets/images/folder.png")}
label="Mis Álbumes"
onPress={()=>navigation.navigate("Albums")}
/>

<DesktopIcon
icon={require("../assets/images/folder.png")}
label="Reproductor"
onPress={()=>navigation.navigate("PlayMusic")}
/>

<DesktopIcon
icon={require("../assets/images/user.png")}
label="Mi Perfil"
/>

</View>

<Taskbar/>

</ImageBackground>

)
}

const styles=StyleSheet.create({

desktop:{
  flex:1,
  width:"100%",
  height:"100%"
},

icons:{
marginTop:50,
marginLeft:20
}

})