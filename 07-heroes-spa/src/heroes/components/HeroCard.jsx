import React from 'react'
import { Link } from 'react-router-dom'

// const charactersCard = ({alter_ego, characters}) =>{
//     if (alter_ego !== characters) {
//         return (<p className="card-text">{characters}</p>)
//     }
//     return(<></>)
// }

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    const url = `/assets/heroes/${id}.jpg`
    const charactersCard=(<p className="card-text">{characters}</p>)
    return (
        <div className='col'>
            <div className="card" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={url} className="card-img animate__animated animate__fadeIn" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) && charactersCard
                            }
                            {/* <charactersCard alter_ego={alter_ego} characters={characters}/> */}
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                                </p>
                                <Link to={`/hero/${id}`}>Más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
