import React,{useEffect,useState} from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './style.scss'
const Home = () => {
  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    async function loadMovies(){
      const response = await api.get('r-api/?api=filmes/')
      setMovies(response.data)
      setLoading(false)
     
    }
    loadMovies()
  },[])
  if(loading){
    return (
      <div>
        <h2>Carregando...</h2>
      </div>
    )}
    else{
      return (
        <div className='container'>
          <div className="movies-list">
            {movies.map(movie =>{
              return(
                <article key={movie.id}>
                  <h2>{movie.nome}</h2>
                  <img src={movie.foto} alt={movie.nome} />
                  <Link to={`/movies/${movie.id}`}>Acessar</Link>
                </article>
              )
            })}
          </div>
        </div>
      )
    }
}

export default Home
