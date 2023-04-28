import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHerobyID } from '../helpers'

export const Hero = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHerobyID(id), [id]) 
  if (!hero) {
    return <Navigate to={'/marvel'} />
  }
  
  const regresar = () => {
    navigate(-1)
  }
  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img
          src={`../assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInLeft animate__delay-2s">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
          <li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li>
        </ul> 
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>

        <button className='btn btn-outline-info' onClick={regresar}>Regresar...</button>
      </div>
    </div>
  )
}
