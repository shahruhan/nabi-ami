import React from "react";
import Header from "../includes/header";
import Add_UserProfile_page from "../components/Add_UserProfile_page";
import Footer from "../includes/footer";


const Add_UserProfile = () => {
    return(
        <>
        <div className="page-main">
         <Header/>
         <Add_UserProfile_page/>
         <Footer/>
         </div>
        </>
    )
}

export default Add_UserProfile; 