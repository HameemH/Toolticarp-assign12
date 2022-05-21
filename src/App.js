import logo from './logo.svg';
import './App.css';

import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
   <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
     </Routes>
   </div>
  );
}

export default App;
