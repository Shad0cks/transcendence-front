import React, { useEffect, useState, useRef } from 'react';
import Chat from '../../Components/Chat';
import PongGame from '../../Components/PongGame';
import "../../css/Pages/MainGame.css"
import  HiddenChatIcon from "../../icons/arrow-left.png"
import  DispayChatIcon from "../../icons/arrow-right.png"

function MainGame () 
{
    const [gameType, setGameType] = useState<number>(1)
    const [botLevel, setBotLevel] = useState<number>(3)
    const [hiddeChat, setHiddeChat] = useState<boolean>(false)
    
    useEffect(() =>{

    }, [gameType])

    return (
        <div className='mainGame_block'>

            <div className='mainGame_Chatcontainer'>
                <img onClick={() => setHiddeChat(prevState => !prevState)} alt="hiddeChat" className='mainGame_iconDispay' src={hiddeChat ? DispayChatIcon : HiddenChatIcon}/>
                {   
                  hiddeChat ?
                    <div className='mainGame_ChatcontainerIn'>
                        <Chat/>
                    </div>
                    :
                    null
                }
                
            </div>

            <div className={hiddeChat ? 'mainGame_container' : "mainGame_containerWithoutChat"}>
                <h1 className='mainGame_GameTitle'> Game Page </h1>
                <div className='mainGame_selectTypeGame'>
                    <button type="button" className="btn btn-outline-danger" onClick={() => setGameType(1)}>Local 1v1</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => setGameType(3)}>Bot</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => setGameType(2)}>Online</button>
                </div>
                <div className="mainGame_boLevel" style={gameType != 3 ? {visibility: "hidden"} : undefined}>
                    <label className="form-label">Bot Level : {botLevel}</label>
                    <input type="range" className="form-range" onChange={(e) => setBotLevel(+e.target.value)} min="1" max="9" step="0.1" defaultValue="3" id="customRange2"/>
                </div>
                <div key={gameType + botLevel} className='mainGame_blockGame'>
                    <PongGame width={1000} height={600} gameType={gameType} botLevel={botLevel}/>
                </div>
            </div>
        </div>
    )
}


export default MainGame