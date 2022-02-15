import React from 'react'
import Personaje from './Personaje'
import { Reloj } from '../ui/Reloj'

export const PersonajesGrid = ({ items, isLoading }) => {
  return (
    isLoading ? (<Reloj />) : (<section className='cards'>
        {items.map((item)=> (
        <Personaje key={item.char_id} item={item} />
        )
        )}
    </section>)

  )
}
