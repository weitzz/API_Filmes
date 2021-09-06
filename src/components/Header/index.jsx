import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
const Header = () => {
  return (
    <header>
      <Link className='logo' to='/'>Filmes</Link>
      <Link className='favorites' to='/favorites'>Salvos</Link>

    </header>
  )
}

export default Header
