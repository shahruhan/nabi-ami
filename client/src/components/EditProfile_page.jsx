import React from "react";


const EditProfile_page = () => {
    return(
        <>
        {/*app-content open*/}
            <div className="main-content app-content mt-0">
                <div className="side-app">

                    {/* CONTAINER */}
                    <div className="main-container container-fluid">

                        {/* PAGE-HEADER */}
                        <div className="page-header">
                            <h1 className="page-title">Edit Profile</h1>
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/profile">Profile</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Edit Profile</li>
                                </ol>
                            </div>
                        </div>
                        {/* PAGE-HEADER END */}

                        {/* ROW-1 OPEN */}
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">Edit Password</div>
                                    </div>
                                    <div className="card-body">
                                        <div className="text-center chat-image mb-5">
                                            <div className="avatar avatar-xxl chat-profile mb-3 brround">
                                                <a className="" href="profile.html">
                                                    <img alt="avatar" src="images/users/7.jpg" className="brround"/>
                                                </a>
                                            </div>
                                            <div className="main-chat-msg-name">
                                                <a href="profile.html">
                                                    <h5 className="mb-1 text-dark fw-semibold">Nabi Amin</h5>
                                                </a>
                                                <p className="text-muted mt-0 mb-0 pt-0 fs-13">Senior Admin</p>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Current Password</label>
                                            <div className="wrap-input100 validate-input input-group" id="Password-toggle">
                                                <a href="#" className="input-group-text bg-white text-muted">
                                                    <i className="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                                                </a>
                                                <input className="input100 form-control" type="password" placeholder="Current Password"/>
                                            </div>
                                            {/* <input type="password" className="form-control" value="password"> */}
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">New Password</label>
                                            <div className="wrap-input100 validate-input input-group" id="Password-toggle1">
                                                <a href="#" className="input-group-text bg-white text-muted">
                                                    <i className="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                                                </a>
                                                <input className="input100 form-control" type="password" placeholder="New Password"/>
                                            </div>
                                            {/* <input type="password" className="form-control" value="password"> */}
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Confirm Password</label>
                                            <div className="wrap-input100 validate-input input-group" id="Password-toggle2">
                                                <a href="#" className="input-group-text bg-white text-muted">
                                                    <i className="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
                                                </a>
                                                <input className="input100 form-control" type="password" placeholder="Confirm Password"/>
                                            </div>
                                            {/* <input type="password" className="form-control" value="password"> */}
                                        </div>
                                    </div>
                                    <div className="card-footer text-end">
                                        <a href="#" className="btn btn-primary">Update</a>
                                        <a href="#" className="btn btn-danger ms-1">Cancel</a>
                                    </div>
                                </div>                                
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">Delete Account</div>
                                    </div>
                                    <div className="card-footer text-end">
                                        <a href="#" className="btn btn-primary my-1">Deactivate</a>
                                        <a href="#" className="btn btn-danger ms-1 my-1">Delete Account</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Edit Profile</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputname">First Name</label>
                                                    <input type="text" className="form-control" id="exampleInputname" placeholder="First Name"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputname1">Last Name</label>
                                                    <input type="text" className="form-control" id="exampleInputname1" placeholder="Last Name"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputaddress">Address</label>
                                                    <input type="text" className="form-control" id="exampleInputaddress" placeholder="Address"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputwork">Place of work</label>
                                                    <input type="text" className="form-control" id="exampleInputnamework" placeholder="Place of work"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email address"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputnumber">Contact Number</label>
                                            <input type="number" className="form-control" id="exampleInputnumber" placeholder="Contact number"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">About Me</label>
                                            <textarea className="form-control" rows="1">My bio.........</textarea>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Website</label>
                                            <input className="form-control" placeholder="http://splink.com"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Date Of Birth</label>
                                            <div className="row">
                                                <div className="col-md-4 mb-2">
                                                    <select className="form-control select2 form-select">
                                                            <option value="0">Date</option>
                                                            <option value="1">01</option>
                                                            <option value="2">02</option>
                                                            <option value="3">03</option>
                                                            <option value="4">04</option>
                                                            <option value="5">05</option>
                                                            <option value="6">06</option>
                                                            <option value="7">07</option>
                                                            <option value="8">08</option>
                                                            <option value="9">09</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                            <option value="16">16</option>
                                                            <option value="17">17</option>
                                                            <option value="18">18</option>
                                                            <option value="19">19</option>
                                                            <option value="20">20</option>
                                                            <option value="21">21</option>
                                                            <option value="22">22</option>
                                                            <option value="23">23</option>
                                                            <option value="24">24</option>
                                                            <option value="25">25</option>
                                                            <option value="26">26</option>
                                                            <option value="27">27</option>
                                                            <option value="28">28</option>
                                                            <option value="29">29</option>
                                                            <option value="30">30</option>
                                                            <option value="31">31</option>
                                                        </select>
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <select className="form-control select2 form-select">
                                                            <option value="0">Mon</option>
                                                            <option value="1">Jan</option>
                                                            <option value="2">Feb</option>
                                                            <option value="3">Mar</option>
                                                            <option value="4">Apr</option>
                                                            <option value="5">May</option>
                                                            <option value="6">June</option>
                                                            <option value="7">July</option>
                                                            <option value="8">Aug</option>
                                                            <option value="9">Sep</option>
                                                            <option value="10">Oct</option>
                                                            <option value="11">Nov</option>
                                                            <option value="12">Dec</option>
                                                        </select>
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <select className="form-control select2 form-select">
                                                            <option value="0">Year</option>
                                                            <option value="1">2018</option>
                                                            <option value="2">2017</option>
                                                            <option value="3">2016</option>
                                                            <option value="4">2015</option>
                                                            <option value="5">2014</option>
                                                            <option value="6">2013</option>
                                                            <option value="7">2102</option>
                                                            <option value="8">2012</option>
                                                            <option value="9">2011</option>
                                                            <option value="10">2010</option>
                                                            <option value="11">2009</option>
                                                            <option value="12">2008</option>
                                                            <option value="13">2007</option>
                                                            <option value="14">2006</option>
                                                            <option value="15">2005</option>
                                                            <option value="16">2004</option>
                                                            <option value="17">2003</option>
                                                            <option value="18">2002</option>
                                                            <option value="19">2001</option>
                                                            <option value="20">1999</option>
                                                            <option value="21">1998</option>
                                                            <option value="22">1997</option>
                                                            <option value="23">1996</option>
                                                            <option value="24">1995</option>
                                                            <option value="25">1994</option>
                                                            <option value="26">1993</option>
                                                            <option value="27">1992</option>
                                                            <option value="28">1991</option>
                                                            <option value="29">1990</option>
                                                            <option value="30">1989</option>
                                                            <option value="31">1988</option>
                                                            <option value="31">1987</option>
                                                            <option value="31">1986</option>
                                                            <option value="31">1985</option>
                                                            <option value="31">1984</option>
                                                            <option value="31">1983</option>
                                                            <option value="31">1982</option>
                                                            <option value="31">1981</option>
                                                            <option value="31">1980</option>
                                                        </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-end">
                                        <a href="#" className="btn btn-success my-1">Save</a>
                                        <a href="#" className="btn btn-danger ms-1 my-1">Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ROW-1 CLOSED */}

                    </div>
                    {/*CONTAINER CLOSED */}

                </div>
            </div>
            {/*app-content open*/}
        </>
    )
}

export default EditProfile_page;