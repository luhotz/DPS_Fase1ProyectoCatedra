import React from "react";
import { View, Text, StyleSheet } from "react-native";
import XPWindow from "./../components/XPWindow.js";

export default function AlbumsScreen(){

return(

<XPWindow title="Mis Álbumes Spotify">

{/* MENU SUPERIOR */}
<View style={styles.menuBar}>
<Text style={styles.menuText}>Archivo</Text>
<Text style={styles.menuText}>Ver</Text>
<Text style={styles.menuText}>Favoritos</Text>
<Text style={styles.menuText}>Herramientas</Text>
</View>

<View style={styles.container}>

{/* PANEL IZQUIERDO */}
<View style={styles.sidebar}>

<Text style={styles.sectionTitle}>Tareas de música</Text>

<Text style={styles.link}>▶ Reproducir todo</Text>
<Text style={styles.link}>▶ Buscar en Spotify</Text>
<Text style={styles.link}>▶ Opción 3 (?)</Text>

<Text style={[styles.sectionTitle,{marginTop:20}]}>Detalles</Text>

<View style={styles.detailsBox}>
<Text>ROCK CLÁSICO</Text>
<Text style={styles.small}>Carpeta de archivos</Text>
<Text style={styles.small}>Modificado: 00/00/0000</Text>
</View>

</View>

{/* AREA PRINCIPAL */}
<View style={styles.mainArea}>

<View style={styles.albumItem}>
<View style={[styles.cover,{backgroundColor:"#888"}]}/>
<Text style={styles.albumTitle}>Rock Clasico</Text>
<Text style={styles.albumSub}>Varios Artistas</Text>
</View>

<View style={styles.albumItem}>
<View style={[styles.cover,{backgroundColor:"#cc00aa"}]}/>
<Text style={styles.albumTitle}>Nuevos Lanzamientos</Text>
<Text style={styles.albumSub}>Recientes</Text>
</View>

<View style={styles.albumItem}>
<View style={[styles.cover,{backgroundColor:"#a3d9a5"}]}/>
<Text style={styles.albumTitle}>Favoritos</Text>
<Text style={styles.albumSub}>45 canciones</Text>
</View>

</View>

</View>

{/* BARRA INFERIOR */}
<View style={styles.statusBar}>
<Text style={styles.small}>3 objetos seleccionados</Text>
<Text style={styles.small}>Mi PC</Text>
</View>

</XPWindow>

)
}

const styles = StyleSheet.create({

menuBar:{
flexDirection:"row",
gap:15,
padding:6,
borderBottomWidth:1,
borderColor:"#999"
},

menuText:{
fontSize:12
},

container:{
flexDirection:"row",
marginTop:5
},

sidebar:{
width:170,
backgroundColor:"#e6eefc",
padding:10,
borderRightWidth:1,
borderColor:"#aaa"
},

sectionTitle:{
fontWeight:"bold",
marginBottom:8
},

link:{
color:"#1a4fb4",
marginBottom:5
},

detailsBox:{
marginTop:10,
backgroundColor:"#fff",
padding:8
},

mainArea:{
flex:1,
flexDirection:"row",
flexWrap:"wrap",
padding:15,
gap:20
},

albumItem:{
width:130
},

cover:{
width:80,
height:80,
marginBottom:5
},

albumTitle:{
fontWeight:"bold"
},

albumSub:{
fontSize:12,
color:"#555"
},

statusBar:{
flexDirection:"row",
justifyContent:"space-between",
borderTopWidth:1,
borderColor:"#aaa",
padding:5,
marginTop:10
},

small:{
fontSize:11,
color:"#444"
}

});