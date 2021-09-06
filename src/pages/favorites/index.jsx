import { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import './style.scss'
import {toast} from 'react-toastify'


const Favorites = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const listMovies = localStorage.getItem('movies')
    setMovies(JSON.parse(listMovies) || [])
  }, [])

  function handleDelete(id){
    let filterMovies = movies.filter((item)=>{
      return (item.id !== id)
    })
    setMovies(filterMovies)
    localStorage.setItem('movies',JSON.stringify(filterMovies))
    toast.success('Filme deletado')
  }


  return (
    <div className='favorites-list'>
      <h2>Favoritos</h2>
      {movies.length === 0 && <span>Você não possui nenhum filme salvo!</span>}

      <ul>
        {movies.map(movie =>{
            return(
        <li key={movie.id}>
          <span>{movie.nome}</span>
          <div>
            <Link to={`/movies/${movie.id}`} >Ver detalhes</Link>
            <button onClick={()=> handleDelete(movie.id)}>Excluir</button>
          </div>
        </li>
        )
        })
         
        }
      </ul>

    </div>
  )
}

export default Favorites
