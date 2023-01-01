import React from 'react'
import {CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPE} from './tokens.js';
import Button from '@mui/material/Button';

function Login() {
    return (
      <div className="App">
        <header className="App-header">
          <Button variant='contained' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login to Spotify</Button>
        </header>
      </div>
    );
}

export default Login;