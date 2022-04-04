import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      </Routes>

    </div>
  );
}

export default App;
