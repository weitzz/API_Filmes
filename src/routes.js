import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/Header'
import Movie from './pages/movie'
import Favorites from './pages/favorites'
import Erro from './pages/erro'
const Routes =()=>{
  return(
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/movies/:id' component={Movie} />
      <Route exact path='/favorites' component={Favorites} />
      <Route exact path='*' component={Erro} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes