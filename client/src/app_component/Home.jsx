import React from "react";
import Header from "../includes/header";
import Dashboard_page from "../components/Dashboard_page";
import Footer from "../includes/footer";


const Home = () => {
    return(
        <>
        <div className="page-main">
         <Header/>
         <Dashboard_page/>
         <Footer/>
         </div>
        </>
    )
}

export default Home; 