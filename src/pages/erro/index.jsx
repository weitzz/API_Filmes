import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
const Erro = () => {
  return (
    <div className='not-found'>
      <h2>404</h2>
      <h3>Página não encontrada</h3>
      <Link to='/'>Voltar para página principal</Link>
    </div>
  )
}

export default Erro
