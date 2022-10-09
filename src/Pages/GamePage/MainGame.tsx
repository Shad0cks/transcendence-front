import React from 'react';
import PongGame from '../../Components/PongGame';
import "../../css/Pages/MainGame.css"

export default function MainGame () 
{
    return (
        <div className='mainGame_block'>
            <h1 className='mainGame_GameTitle'> Game Page </h1>
            <PongGame width={1000} height={600}/>
        </div>
    )
}


