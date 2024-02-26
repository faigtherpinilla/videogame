import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from '../src/views/Landing/Landing.jsx';
import Home from '../src/views/Home/Home.jsx';
import GameDetail from './componentes/GameDetail/GameDetail.jsx';
import Form from './views/Form/Form.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/videogames/:idVideogame' element={ <GameDetail /> }/>
        <Route path='/form' element={ <Form /> }/>
      </Routes>
  
    </div>
  );
}

export default App;
