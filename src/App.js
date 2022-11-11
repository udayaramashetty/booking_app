import './App.css';
import { HashRouter, Route,Routes } from 'react-router-dom';
import List from './Pages/list/List';
import Hotel from './Pages/hotel/Hotel';
import Home from './Pages/home/Home';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<List/>}/>
      <Route path='/hotels/:id' element={<Hotel/>}/>
    </Routes>
    </HashRouter>
  );
}

export default App;
