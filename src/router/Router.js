import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home"
import {Product} from "../pages/product/Product";


const Routers = () => {

    return (
        <div >
            <Routes >
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="product" element={<Product />} />
                </Route>
                    
            </Routes>
        </div>
    )
}

export default Routers;