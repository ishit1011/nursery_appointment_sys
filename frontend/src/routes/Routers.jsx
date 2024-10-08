import React from 'react'
import Home from '../pages/Home'
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Nurserys from "../pages/Nurserys/Nurserys";
import NurseryDetails from "../pages/Nurserys/NurseryDetails";
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/nursery-account/Dashboard';
import NotFound from './NotFound';
import CheckoutSuccess from '../pages/CheckoutSuccess';
import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => { 
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/nurserys' element={<Nurserys />} />
      <Route path='/nurserys/:id' element={<NurseryDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/checkout-success' element={<CheckoutSuccess />} />
      <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={['customer']}><MyAccount /></ProtectedRoute>} />
      <Route path='/nurserys/profile/me' element={<ProtectedRoute allowedRoles={['nursery']}><Dashboard /></ProtectedRoute>} />

      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

 
export default Routers;
// import React from 'react';


// export default Routers;