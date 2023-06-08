import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import './styles/common/App.css';
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";

function App(){
  // 상품 금액 1000원 단위로 끊기
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

    return (
      <>
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="trad" element={<ProductList category_id="110" convertPrice = {convertPrice}/>}/>
            <Route path="imporv" element={<ProductList category_id="120" convertPrice = {convertPrice}/>}/>
            <Route path="shoes" element={<ProductList category_id="130" convertPrice = {convertPrice}/>}/>
            <Route path="acc" element={<ProductList category_id="140" convertPrice = {convertPrice}/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;