import React from "react";
import ReactDOM from "react-dom/client";
// import '../node_modules/animate.css/animate.css';
// import '../node_modules/animate.css/source/fading_entrances/fadeInUp.css';
// import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
// import '../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css';


// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


// className "owl-theme" is optional


import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);