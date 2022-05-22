import logo from './logo.svg';
import './App.css';

import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Authorization/Login';
import Register from './Pages/Authorization/Register';
import Purchase from './Pages/RoutePages/Purchase';

function App() {
  return (
   <div>
     <Header></Header>
    
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
     </Routes>
     <Footer></Footer>
   </div>
  );
}

export default App;
