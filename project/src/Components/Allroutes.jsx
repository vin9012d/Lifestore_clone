import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Home from "./Home";
import Product1 from "./Producct1/Product1";
import Products from "./Products/Products";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/women" element={<Product1/>} />
            <Route path="/women/products" element={<Products/>} />
            <Route path="/women/products/cart" element={<Cart/>} />
            <Route path="/women/products/cart/checkout" element={<Checkout/>} />
        </Routes>
    )
}