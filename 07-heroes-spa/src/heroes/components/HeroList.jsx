import { useEffect, useMemo, useState } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './';

export const HeroList = ({publisher}) => {
    const data= useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    
  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
        {
            data?.map(hero => (
                <HeroCard key={hero.id} {...hero}/>
            ))
        }
    </div>
  )
}
