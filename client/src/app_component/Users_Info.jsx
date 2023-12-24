import React from "react";
import Header from "../includes/header";
import UsersInfo_page from "../components/UsersInfo_page";
import Footer from "../includes/footer";


const Users_Info = () => {
    return(
        <>
        <div className="page-main">
         <Header/>
         <UsersInfo_page/>
         <Footer/>
         </div>
        </>
    )
}

export default Users_Info; 