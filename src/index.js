import React from "react";
import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from 'react-router-dom'
import {CartProvider} from 'react-use-cart'
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <reportWebVitals>
    <BrowserRouter>
        <CartProvider>
            <App/>
        </CartProvider>
    </BrowserRouter>
    // </reportWebVitals>
)
// reportWebVitals();