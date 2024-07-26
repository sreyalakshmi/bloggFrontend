import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Add from './components/Add';
import ViewAll from './components/ViewAll';
import ViewMypost from './components/ViewMypost';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
      <Route path='/MyPost' element={<ViewMypost/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
