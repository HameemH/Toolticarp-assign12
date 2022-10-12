import logo from './logo.svg';
import './App.css';

import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Authorization/Login';
import Register from './Pages/Authorization/Register';
import Purchase from './Pages/RoutePages/Purchase';
import RequireAuth from './Pages/Authorization/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myorders from './Pages/Dashboard/Myorders';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageAllProucts from './Pages/Dashboard/ManageAllProucts';
import NotFound from './Pages/Shared/NotFound';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import Payment from './Pages/Dashboard/Payment';
import Portfolio from './Pages/RoutePages/Portfolio';
import Blogs from './Pages/RoutePages/Blogs';
import PhoneLogin  from './Pages/Authorization/PhoneLogin';

function App() {
  return (
   <div>
     <Header></Header>
    
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/phoneLogin' element={<PhoneLogin></PhoneLogin>}></Route>
       <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/purchase/:id' element={<RequireAuth><Purchase/></RequireAuth>}></Route>
       <Route path ='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
       <Route index element={<MyProfile></MyProfile>}></Route>
       <Route path='review' element={<AddReview></AddReview>}></Route>
       <Route path='myorders' element={<Myorders></Myorders>}></Route>
       <Route path='payment/:id' element={<Payment></Payment>}></Route>
       <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
       <Route path='manageproducts' element={<ManageAllProucts></ManageAllProucts>}></Route>
       <Route path='manageorder' element={<ManageAllOrders></ManageAllOrders>}></Route>
       <Route path='admin' element={<MakeAdmin></MakeAdmin>}></Route>
       </Route>
       <Route path ='/*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
   </div>
  );
}

export default App;
