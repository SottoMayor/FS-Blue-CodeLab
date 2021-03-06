import './App.css';
import Header from './components/Header/Header'
import Home from './pages/Home';
import About from './pages/About'
import {Route, Switch, Redirect} from 'react-router-dom'
import NotFound from './pages/NotFound';
import AddGame from './pages/AddGame';
import SeeMore from './pages/SeeMore';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/jogos"/>
        </Route>

        <Route path="/jogos" exact>
          <Home/>
        </Route>

        <Route path="/jogo/:id">
          <SeeMore/>
        </Route>

        <Route path="/sobre">
          <About/>
        </Route>

        <Route path="/adicionar-jogo">
          <AddGame/>
        </Route>

        <Route path="/">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
