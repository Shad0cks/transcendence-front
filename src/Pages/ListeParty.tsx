import React, { useEffect, useState } from 'react'
import AvailableParty from '../css/Components/AvailableParty'
import "../css/Pages/ListeParty.css"

interface gamesProps {
    connected: number;
    author: string;
}

export default function ListeParty() {
    let [games, setGames] = useState<gamesProps[]>([])

    useEffect(() => {
        let gameInfo = {
            connected: 0,
            author: "billy"
        }
        for (let index = 0; index < 10; index++) {
            setGames(prevState => [...prevState, gameInfo])
        }
    }, [])
  return (
    <div className='ListeParty_block'>
        <h2 className='ListeParty_title'>Available Party: </h2>
        <div className='ListeParty_list'>

            {games.map(e => {
                return  <AvailableParty author={e.author} playersCount={e.connected} />
            })}

        </div>
    </div>
  )
}
