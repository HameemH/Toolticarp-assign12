import logo from './logo.svg';
import './App.css';

import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
   <div>
     <Header></Header>
    
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
     </Routes>
     <Footer></Footer>
   </div>
  );
}

export default App;
