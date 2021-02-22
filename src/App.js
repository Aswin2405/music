import React, { useEffect } from "react";
import Login from "./Login";
import "./styles.css";
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
export default function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;

    if (token) {
      // setToken(token);
      dispatch({
        type: "SET_TOKEN",
        token: token
      });
      spotify.setAccessToken(token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });
      spotify.getPlaylist("37i9dQZF1DX3rxVfibe1L0").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        });
      });
    }
    // console.log("i have a >>>", token);
  }, []);
  // console.log(user);
  // console.log(token);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}
