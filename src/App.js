import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Login"
import { getTokenFromUrl } from "./spotify";
import Player from './Player';
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

// Spotify : Client ID : "540ad0aacd69482cb1d6a9202bf0c53f"


function App() {
  
  const [{ user, token }, dispatch] = useDataLayerValue();
 
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;

    if (_token) {
        dispatch({
          type: "SET_TOKEN",
          token: _token,
        });
      
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {       
        dispatch ({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      
     spotify.getPlaylist('37i9dQZF1DWUIDYTCle9M9').then((response) => {
      dispatch ({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
     }) 
    }        
  }, []);


  return (
    <div className="App"> 
     {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App


