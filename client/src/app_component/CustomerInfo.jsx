import React from "react";
import Header from "../includes/header";
import CustomerInfo_page from "../components/CustomerInfo_page";
import Footer from "../includes/footer";


const CustomerInfo = () => {
    return(
        <>
        <div className="page-main">
         <Header/>
         <CustomerInfo_page/>
         <Footer/>
         </div>
        </>
    )
}

export default CustomerInfo; 