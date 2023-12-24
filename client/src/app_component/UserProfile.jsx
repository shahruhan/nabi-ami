import React from "react";
import Header from "../includes/header";
import UserProfile_page from "../components/UserProfile_page";
import Footer from "../includes/footer";


const UserProfile = () => {
    return(
        <>
        <div className="page-main">
         <Header/>
         <UserProfile_page/>
         <Footer/>
         </div>
        </>
    )
}

export default UserProfile; 