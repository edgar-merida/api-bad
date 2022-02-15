import React, { useState } from 'react'

const Buscar = ({ getQuery }) => {
    
    const [texto, setTexto] = useState('')

    const onChange = (q)  =>{
        setTexto(q)
        getQuery(q)
    }

  return (
    <section className='search'>
        <form>
            <input 
            type="text" 
            className='form-control' 
            placeholder='Buscar' 
            value={texto}
            onChange={(e)=> onChange(e.target.value)}
            autoFocus />
        </form>

    </section>
  )
}

export default Buscar