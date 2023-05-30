import React, { useState } from 'react'

// dropItems should be an array
function Dropdown({ dropItems, className }) {
  const [current, setCurrent] = useState(dropItems[0])
  const [isDropdownActive, setIsDropDownActive] = useState(false)
  return (
    <div className={'dropdown ' + className}>
      <p className='dropdown__current' onClick={() => {
        setIsDropDownActive(true)
      }}>{current}</p>
      <ul className={isDropdownActive ? "dropdown__items dropdown__items--active" : "dropdown__items"}>
        {
          dropItems.map((item, i) => {
            return <li className='dropdown__item' key={i}
              onClick={() => {
                setCurrent(item)
                setIsDropDownActive(false)
              }}
            >
              {item}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Dropdown