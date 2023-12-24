import React from "react";


const Profile_page = () => {
    return(
        <>
         {/*app-content open*/}
            <div className="main-content app-content mt-0">
                <div className="side-app">

                    {/* CONTAINER */}
                    <div className="main-container container-fluid">

                        {/* PAGE-HEADER */}
                        <div className="page-header">
                            <h1 className="page-title">Profile</h1>
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Profile</li>
                                </ol>
                            </div>
                        </div>
                        {/* PAGE-HEADER END */}

                        {/* ROW-1 OPEN */}
                        <div className="row" id="user-profile">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="wideget-user mb-2">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="row">
                                                        <div className="panel profile-cover">
                                                            <div className="profile-cover__action bg-img"></div>
                                                            <div className="profile-cover__img">
                                                                <div className="profile-img-1">
                                                                    <img src="images/users/21.jpg" alt="img"/>
                                                                </div>
                                                                <div className="profile-img-content text-dark text-start">
                                                                    <div className="text-dark">
                                                                        <h3 className="h3 mb-2">Nabi Amin</h3>
                                                                        <h5 className="text-muted">Senior Admin</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="btn-profile">
                                                                <a href="/editProfile" className="btn btn-primary mt-1 mb-1"> <i className="fa fa-pencil-square-o" style={{'fontSize': '16px'}}></i> <span>Edit Profile</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="px-0 px-sm-4">
                                                            <div className="social social-profile-buttons mt-5 float-end">
                                                                <div className="mt-3">
                                                                    <a className="social-icon text-primary" href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>
                                                                    <a className="social-icon text-primary" href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a>
                                                                    <a className="social-icon text-primary" href="https://www.youtube.com/" target="_blank"><i className="fa fa-youtube"></i></a>
                                                                    <a className="social-icon text-primary" href="#"><i className="fa fa-rss"></i></a>
                                                                    <a className="social-icon text-primary" href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin"></i></a>
                                                                    <a className="social-icon text-primary" href="https://myaccount.google.com/" target="_blank"><i className="fa fa-google-plus"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-9">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="card-title">About</div>
                                            </div>
                                            <div className="card-body">
                                                <div>
                                                    <h5>Biography<i className="fe fe-edit-3 text-primary mx-2"></i></h5>
                                                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                                        Consectetur voluptas tempora voluptate perferendis totam recusandae dicta, eius repellat facere eum?
                                                        <a href="#">Read more</a>
                                                    </p>
                                                </div>
                                                <hr/>
                                                <div className="d-flex align-items-center mb-3 mt-3">
                                                    <div className="me-4 text-center text-primary">
                                                        <span><i className="fe fe-briefcase fs-20"></i></span>
                                                    </div>
                                                    <div>
                                                        <strong>San Francisco, CA </strong>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3 mt-3">
                                                    <div className="me-4 text-center text-primary">
                                                        <span><i className="fe fe-map-pin fs-20"></i></span>
                                                    </div>
                                                    <div>
                                                        <strong>Francisco, USA</strong>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3 mt-3">
                                                    <div className="me-4 text-center text-primary">
                                                        <span><i className="fe fe-phone fs-20"></i></span>
                                                    </div>
                                                    <div>
                                                        <strong>+125 254 3562 </strong>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3 mt-3">
                                                    <div className="me-4 text-center text-primary">
                                                        <span><i className="fe fe-mail fs-20"></i></span>
                                                    </div>
                                                    <div>
                                                        <strong>georgeme@abc.com </strong>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3 mt-3">
                                                    <div className="me-4 text-center text-primary">
                                                        <span><i className="fe fe-globe fs-20"></i></span>
                                                    </div>
                                                    <div>
                                                        <strong>www.abcd.com </strong>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-0 mt-3">
                                                    <div className="me-4 text-center text-primary">
                                                        <span><i className="ti-gift fs-20"></i></span>
                                                    </div>
                                                    <div>
                                                        <strong>DOB-12.04.2023</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="card-title">Users</div>
                                            </div>
                                            <div className="card-body">
                                                <div className="">
                                                    <div className="media overflow-visible">
                                                        <img className="avatar brround avatar-md me-3" src="images/users/18.jpg" alt="avatar-img"/>
                                                        <div className="media-body valign-middle mt-2">
                                                            <a href="#" className=" fw-semibold text-dark">John Paige</a>
                                                            <p className="text-muted mb-0">johan@gmail.com</p>
                                                        </div>
                                                        <div className="media-body valign-middle text-end overflow-visible mt-2">
                                                            <a href="user_profile" className="btn btn-sm btn-primary">View</a>
                                                        </div>
                                                    </div>
                                                    <div className="media overflow-visible mt-sm-5">
                                                        <span className="avatar cover-image avatar-md brround bg-pink me-3">LQ</span>
                                                        <div className="media-body valign-middle mt-2">
                                                            <a href="#" className="fw-semibold text-dark">Lillian Quinn</a>
                                                            <p className="text-muted mb-0">lilliangore</p>
                                                        </div>
                                                        <div className="media-body valign-middle text-end overflow-visible mt-1">
                                                            <a href="user_profile" className="btn btn-sm btn-secondary">View</a>
                                                        </div>
                                                    </div>
                                                    <div className="media overflow-visible mt-sm-5">
                                                        <img className="avatar brround avatar-md me-3" src="images/users/2.jpg" alt="avatar-img"/>
                                                        <div className="media-body valign-middle mt-2">
                                                            <a href="#" className="text-dark fw-semibold">Harry Fisher</a>
                                                            <p className="text-muted mb-0">harryuqt</p>
                                                        </div>
                                                        <div className="media-body valign-middle text-end overflow-visible mt-1">
                                                            <a href="user_profile" className="btn btn-sm btn-danger">View</a>
                                                        </div>
                                                    </div>
                                                    <div className="media overflow-visible mt-sm-5">
                                                        <span className="avatar cover-image avatar-md brround me-3 bg-primary">IH</span>
                                                        <div className="media-body valign-middle mt-2">
                                                            <a href="#" className="fw-semibold text-dark">Irene Harris</a>
                                                            <p className="text-muted mb-0">harris@gmail.com</p>
                                                        </div>
                                                        <div className="media-body valign-middle text-end overflow-visible mt-1">
                                                            <a href="user_profile" className="btn btn-sm btn-success">View</a>
                                                        </div>
                                                    </div>
                                                    <div className="media overflow-visible mt-6">
                                                        <div className="media-body valign-middle text-center overflow-visible mt-1">
                                                            <a href="users_info" className="btn btn-sm btn-primary w-100" type="button">Show All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                            {/* COL-END */}
                        </div>
                        {/* ROW-1 CLOSED */}

                    </div>
                    {/* CONTAINER CLOSED */}

                </div>
            </div>
            {/*app-content closed*/}
        </>
    )
}

export default Profile_page;