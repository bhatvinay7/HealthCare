import React from 'react';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import Home from './Components/Home';
import Doctor from './Components/FindDoctor'
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route  path="/" element={<Layout/>} >
      <Route index element={<Home/>} />

      <Route  path="/login" element={<Login/>} />
      <Route path="/doctor" element={<Doctor/>} />
    </Route>
    //<Route  path="/register" element={<Register/>} />



  ));
  return (
  
      <RouterProvider   router={router} />
  );
}

export default App;
