import React,{useEffect,useState} from 'react'
import './style.scss'
import {useParams,useHistory} from 'react-router-dom'
import api from '../../services/api'
import {toast} from 'react-toastify'

const Movie = () => {
  const {id}= useParams()
  const history = useHistory()
  const [movie,setMovie] = useState([])
  const [loading,setLoading] = useState(true)


  useEffect(()=>{
    async function loadMovie(){
      const response = await api.get(`r-api/?api=filmes/${id}`)
      if(response.data.length === 0){
        history.replace('/')
        return
      }
      setMovie(response.data)
      setLoading(false)
    }
    loadMovie()
    
  },[history,id])

  function saveMovie(){
    const listData = localStorage.getItem('movies')
    let moviesSave = JSON.parse(listData) || []

    // SOME() VAI PERCORRER E PROCURAR SE EXISTE ALGUM FILME COM ESSE ID
    //SE TIVER ,NAO VAI SALVAR POIS JA ESTA SALVO
    const hasMovie = moviesSave.some(save => save.id === movie.id)
    if(hasMovie){
     toast.error('Você já possui esse filme salvo!')
      return
      //PARA A EXECUCAO AQUI
    }
    //SALVA NO LOCALSTORAGE
    moviesSave.push(movie)
    localStorage.setItem('movies',JSON.stringify(moviesSave))
    toast.success('Filme Salvo!!')


  }
if(loading){
  return (
    <div>
      <h2>Carregando...</h2>
    </div>
  )
}else{
  return (
    <div className="info-movie">
      <h3> {movie.nome}</h3>
      <img src={movie.foto} alt={movie.nome} />
      <h4>Sinopse</h4>
      <p>{movie.sinopse}</p>
      <div className="btn">
        <button onClick={saveMovie}>Salvar</button>
        <button><a target='blank'  href={`https://www.youtube.com/results?search_query=${movie.nome} Trailer`}>Trailer </a>
          </button>
      </div>
    </div>
  )
}

 
}

export default Movie
