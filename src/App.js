import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Student from './components/Student'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/Home' element={<Home/>}></Route>
        <Route exact path='/Student' element={<Student/>}></Route>
        <Route exact path='/Contact' element={<Contact />}></Route>
      </Routes>
      </BrowserRouter>
    </>
    
      

  );
}

export default App;
