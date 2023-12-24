import React from "react";
import Header from "../includes/header";
import EditCustomer_page from "../components/EditCustomer_page";
import Footer from "../includes/footer";


const Edit_customer = () => {
    return(
        <>
        <div className="page-main">
         <Header/>
         <EditCustomer_page/>
         <Footer/>
         </div>
        </>
    )
}

export default Edit_customer; 