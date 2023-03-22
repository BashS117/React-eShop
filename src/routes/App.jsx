import '../styles/global.css';
import { Routes,BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Layout from '../containers/Layout';
import ProductDetail from '../containers/ProductDetail';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ProductList from '../containers/ProductList';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

function App() {
  const initialState= useInitialState();
  return (
    <AppContext.Provider value={initialState} >
    <BrowserRouter basename='/react-eshop'>
    <Layout>
    <Routes>
    
      <Route exact path= "/" element={<Home/>}/>
      <Route exact path="/ProductDetail" element={<ProductDetail />} />   
      <Route exact path= "/ProductList" element={<ProductList/>}/>

      <Route  element={<NotFound/>}/>

    </Routes>
    </Layout>
    </BrowserRouter>
    </AppContext.Provider>
    
  );
}

export default App;
