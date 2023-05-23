import { heroes } from "../data/heroes"

export const getHerobyName = (nombre) => {
  nombre = nombre.toLowerCase().trim()
  if (nombre.length === 0) return []
  
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(nombre))
}
