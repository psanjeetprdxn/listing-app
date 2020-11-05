import React from 'react'
import {NavLink} from 'react-router-dom'

import './nav.css'

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact title="Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/listing" title="Character">Characters</NavLink>
        </li>
      </ul>
    </nav>
  )
}


export default Nav
