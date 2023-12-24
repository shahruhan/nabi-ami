import React from "react";
import Header from "../includes/header";
import Edit_UserProfile_page from "../components/Edit_UserProfile_page";
import Footer from "../includes/footer";


const Edit_UserProfile = () => {
    return(
        <>
        <div className="page-main">
         <Header/>
         <Edit_UserProfile_page/>
         <Footer/>
         </div>
        </>
    )
}

export default Edit_UserProfile; 