import React from 'react'
import { Link } from 'react-router-dom'

export default function AvailableParty({author, playersCount, id} : {author: string, playersCount: number, id: string}) {
  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://ponggame.io/images/pong-thumbnail.png" className="card-img-top" alt="pong"/>
            <div className="card-body">
                <h5 className="card-title">{author}'s party</h5>
                <p className="card-text">Online player : {playersCount}</p>
                <Link to={"/game_" + id} className="btn btn-primary">Join</Link>
            </div>
        </div>
    </div>
  )
}