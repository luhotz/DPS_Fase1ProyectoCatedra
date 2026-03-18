import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { fetchSpotifyTrack, getAccessToken } from '../api/spotifyApi';
import XPWindow from "./../components/XPWindow.js";

export default function PlayMusicScreen({ navigation }) {
  const [trackInfo, setTrackInfo] = useState(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const idTrack = "0nD62ke95NJvAI8chsRjRg";
    async function fetchData() {
      try {
        const accessToken = await getAccessToken();
        const data = await fetchSpotifyTrack(idTrack, accessToken);
        setTrackInfo(data);
        // Para calcular la duración en formato mm:ss
        const totalSeconds = Math.floor(data.duration_ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        setDuration(`${minutes}:${seconds}`);
      } catch (error) {
        console.error("Error fetching Spotify track:", error);
      }
    }
    fetchData();
  }, []);

  return (

    <XPWindow title="Reproductor Spotify">

      {/* MENU SUPERIOR */}
      <Text style={styles.backButton} onPress={() => navigation.navigate("Desktop")}>
        Volver
      </Text>
      <View style={styles.menuBar}>
        <Text style={styles.menuText}>Archivo</Text>
        <Text style={styles.menuText}>Ver</Text>
        <Text style={styles.menuText}>Reproducción</Text>
        <Text style={styles.menuText}>Herramientas</Text>
      </View>

      <View style={styles.playerContainer}>

        {/* PANEL IZQUIERDO */}
        <View style={styles.leftPanel}>

          <Image
            source={{ uri: trackInfo ? trackInfo.album.images[1].url : "../assets/images/album.png" }}
            style={styles.album}
          />

          <Text style={styles.song}>{trackInfo ? trackInfo.name : "Título"}</Text>
          <Text style={styles.artist}>{trackInfo ? trackInfo.artists[0].name : "Artista"}</Text>

          {/* VISUALIZADOR */}
          <View style={styles.visualizer}>
            {Array.from({ length: 14 }).map((_, i) => (
              <View key={i} style={[styles.bar, { height: Math.random() * 25 + 5 }]} />
            ))}
          </View>

        </View>

        {/* PANEL DERECHO */}
        <View style={styles.rightPanel}>

          <Text style={styles.playlistTitle}>Lista de reproducción</Text>

          <View style={styles.track}>
            <Text>1. {trackInfo ? trackInfo.name : "Título"}</Text>
            <Text>{duration}</Text>
          </View>

          <View style={styles.track}>
            <Text>2. Le festin</Text>
            <Text>2:50</Text>
          </View>

          <View style={styles.track}>
            <Text>3. Le festin</Text>
            <Text>2:50</Text>
          </View>

        </View>

      </View>

      {/* BARRA INFERIOR */}
      <View style={styles.bottomBar}>

        <Text style={styles.time}>2:00</Text>

        <View style={styles.progress} />

        <Text style={styles.time}>2:50</Text>

      </View>

      {/* CONTROLES */}
      <View style={styles.controls}>

        <Text style={styles.controlBtn}>⏮</Text>
        <Text style={styles.controlBtn}>▶</Text>
        <Text style={styles.controlBtn}>⏭</Text>

      </View>

    </XPWindow>

  )
}

const styles = StyleSheet.create({

  menuBar: {
    flexDirection: "row",
    gap: 15,
    padding: 6,
    borderBottomWidth: 1,
    borderColor: "#999"
  },

  menuText: {
    fontSize: 12
  },

  playerContainer: {
    flexDirection: "row",
    marginTop: 10
  },

  leftPanel: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0d2a5c",
    padding: 15
  },

  rightPanel: {
    width: 170,
    backgroundColor: "#dcdcdc",
    padding: 10
  },

  album: {
    width: 140,
    height: 140,
    marginBottom: 10
  },

  song: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },

  artist: {
    color: "#ddd",
    fontSize: 12,
    marginBottom: 10
  },

  visualizer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
    marginTop: 10
  },

  bar: {
    width: 5,
    backgroundColor: "#f9b233"
  },

  playlistTitle: {
    fontWeight: "bold",
    marginBottom: 10
  },

  track: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5
  },

  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 10
  },

  progress: {
    flex: 1,
    height: 6,
    backgroundColor: "#3fa9f5",
    borderRadius: 4
  },

  time: {
    fontSize: 12
  },

  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 20
  },

  controlBtn: {
    fontSize: 20
  }

})