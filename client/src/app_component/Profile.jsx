import React from "react";
import Header from "../includes/header";
import Profile_page from "../components/Profile_page";
import Footer from "../includes/footer";


const Profile = () => {
    return(
        <>
        <div className="page-main">
         <Header/>
         <Profile_page/>
         <Footer/>
         </div>
        </>
    )
}

export default Profile; 