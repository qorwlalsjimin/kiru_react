import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/header/Navigation';
import './styles/common/App.css';
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/footer/Footer";

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
            {/* 메인 */}
            <Route path="/" element={<Home/>}/>

            {/* 상품 목록 */}
            <Route path="/improv" element={<ProductList category_id="120" convertPrice = {convertPrice}/>}/>
            <Route path="/trad" element={<ProductList category_id="110" convertPrice = {convertPrice}/>}/>
            <Route path="/shoes" element={<ProductList category_id="130" convertPrice = {convertPrice}/>}/>
            <Route path="/acc" element={<ProductList category_id="140" convertPrice = {convertPrice}/>}/>
          
            {/* 상품 상세 페이지 */}
            <Route path="/item/:item_id" element={<ProductDetail convertPrice={convertPrice}/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    )
}

export default App;