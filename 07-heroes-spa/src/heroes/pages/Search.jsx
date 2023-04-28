import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import queryString from 'query-string';
import { getHerobyName } from '../helpers';

export const Search = () => {
  const navigate = useNavigate()

  const location = useLocation()
  const { q = "" } = queryString.parse(location.search)
  const hero = getHerobyName(q)
  const showSearch = (q === "") ? true : false
  const { searchText, onInputChange } = useForm({ searchText: q })


  const onSearchSubmit = (e) => {
    e.preventDefault()
    // if (searchText.trim().length < 2) return;
    navigate(`./?q=${searchText}`)

  }

  return (
    <>
      <h1>Busqueda</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Ingrese...</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type={"text"}
              placeholder={"Encontrar tu heroe"}
              className={"form-control"}
              name={"searchText"}
              autoComplete={"off"}
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-3'>Ir...</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados...</h4>
          <hr />
          {/* {
            (q === "") 
            ? <div className="alert alert-info">Buscar un heroe...</div>
            : (hero.length === 0) 
            && <div className="alert alert-danger">No se encontró el heroe <b>{q}</b></div>
          } */}

          <div className="alert alert-info" style={{ display: showSearch ? '' : 'none' }}>Buscar un heroe...</div>
          <div className="alert alert-danger"
            style={{ display: (q !== "" && hero.length === 0) ? '' : 'none' }}
          > No se encontró el heroe <b>{q}</b></div>
          {
            hero?.map(h => (
              <HeroCard key={h.id} {...h} />
            ))
          }
        </div>
      </div>

    </>
  )
}
