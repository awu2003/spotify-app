import {useState, useEffect} from 'react'
import {REDIRECT_URI} from './tokens.js';
import axios from 'axios'

function UseAuth({code}) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setrefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        });
        .then(res => {
            console.log(res.data);
        })
    }, [code])
    
}

export default UseAuth