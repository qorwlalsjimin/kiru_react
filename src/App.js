import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import './styles/common/App.css';
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";

function App(){
    return (
      <>
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="trad" element={<ProductList category_id="110"/>}/>
            <Route path="imporv" element={<ProductList category_id="120"/>}/>
            <Route path="shoes" element={<ProductList category_id="130"/>}/>
            <Route path="acc" element={<ProductList category_id="140"/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;