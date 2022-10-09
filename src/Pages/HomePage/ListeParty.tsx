import React, { useEffect, useState } from 'react'
import AvailableParty from '../../Components/AvailableParty'
import "../../css/Pages/ListeParty.css"

interface gamesProps {
    connected: number;
    author: string;
    id:     string;
}

export default function ListeParty() {
    let [games, setGames] = useState<gamesProps[]>([])

    useEffect(() => {
        for (let index = 0; index < 10; index++) {
            setGames(prevState => [...prevState, {connected: 0, author: "billy", id: index.toString()}])
        }
    }, [])
    
  return (
    <div className='ListeParty_block'>
        <h2 className='ListeParty_title'>Available Party: </h2>
        <div className='ListeParty_list'>

            {games.map((e, i) => {
                
                return  <AvailableParty key={i} author={e.author} playersCount={e.connected} id={e.id} />
            })}

        </div>
    </div>
  )
}
