import React from 'react'

export default function AvailableParty({author, playersCount} : {author: string, playersCount: number}) {
  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://ponggame.io/images/pong-thumbnail.png" className="card-img-top" alt="pong"/>
            <div className="card-body">
                <h5 className="card-title">{author}'s party</h5>
                <p className="card-text">Online player : {playersCount}</p>
                <a href="#" className="btn btn-primary">Join</a>
            </div>
        </div>
    </div>
  )
}