import React from 'react'

const Personaje = ({item}) => {
  return (
    <div className='card'>{item.name}
        <div className='card-inner'>
            <div className='card-front'>
                <img src={item.img}></img>
            </div>
            <div className='card-back'>
                <h1>{item.name}</h1>
            <ul>
                <li>
                    <strong>Actor:</strong> {item.portrayed}
                </li>
                <li>
                    <strong>Apodo:</strong> {item.nickname}
                </li>
                <li>
                    <strong>Cumpleaos:</strong> {item.birthday}
                </li>
                <li>
                    <strong>Estado:</strong> {item.status}
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Personaje