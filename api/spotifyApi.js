// Funciones de la API de Spotify
// Obtiene el token de acceso, necesario para hacer peticiones a la API
export async function getAccessToken() {
  const url = "https://accounts.spotify.com/api/token";
  const clientId = "f586637eacb54e20b1abb403b147ee63";
  const clientSecret = "3cacf10ccc6a4a2986fa5d707333e890";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret
    }).toString()
  });
  const data = await response.json();
  return data.access_token;
}

// Obtiene los datos de una canción de Spotify usando su ID
export async function fetchSpotifyTrack(trackId, accessToken) {
  const url = `https://api.spotify.com/v1/tracks/${trackId}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Spotify API error: ${response.status}`);
  }
  return response.json();
}
