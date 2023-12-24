import React from "react";
import Header from "../includes/header";
import AddCustomer_page from "../components/AddCustomer_page";
import Footer from "../includes/footer";


const Add_customer = () => {
    return(
        <>
        <div className="page-main">
         <Header/>
         <AddCustomer_page/>
         <Footer/>
         </div>
        </>
    )
}

export default Add_customer; 