import React from "react";
import Header from "../includes/header";
import EditProfile_page from "../components/EditProfile_page";
import Footer from "../includes/footer";


const EditProfile = () => {
    return(
        <>
        <div className="page-main">
         <Header/>
         <EditProfile_page/>
         <Footer/>
         </div>
        </>
    )
}

export default EditProfile; 