import React from 'react'

function Card({title, desc}) {
  return (
    <div className='card'>

        <h4 className='card__title'>{title}</h4>
        <p className='card__desc'>{desc}</p>
    </div>
  )
}

export default Card