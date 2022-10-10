import React, { useEffect, useState } from 'react';
import PongGame from '../../Components/PongGame';
import "../../css/Pages/MainGame.css"

export default function MainGame () 
{
    const [gameType, setGameType] = useState<number>(1)

    useEffect(() =>{

    }, [gameType])

    return (
        <div className='mainGame_block' key={gameType}>
            <h1 className='mainGame_GameTitle'> Game Page </h1>
            <div className='mainGame_selectTypeGame'>
                <button type="button" className="btn btn-outline-danger" onClick={() => setGameType(1)}>Local 1v1</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => setGameType(3)}>Bot</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => setGameType(2)}>Online</button>
            </div>

            <div  className='mainGame_blockGame'>
                <PongGame width={1500} height={800} gameType={gameType}/>
            </div>
        
        </div>
    )
}


