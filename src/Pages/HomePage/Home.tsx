import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../css/Pages/Home.css"
import { OAuth2Client } from '@badgateway/oauth2-client';

export default function Home () 
{     
    return (
        <div className='home_block'>
            <h1 className='home_title'>ft_transcendence</h1>
            <Link to="/user_profile"><img className='home_user_icon' width={60} src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png" alt="User icon"/></Link>
        </div>
    )
}