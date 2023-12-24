import React from 'react';
 
const UserRegister_page = () => {
    return(
        <>
			<div class="app sidebar-mini ltr login-img">
				{/*begin::Authentication - Sign-in */}
				{/* BACKGROUND-IMAGE */}
    			<div class="">
        			{/* PAGE */}
        			<div class="page">
            			<div class="row">

							{/* CONTAINER OPEN */}
							<div class="col-lg-6 col-md-12 col-login" style={{'display':'flex', 'flexDirection': 'column', 'justifyContent': 'space-around'}}>
								<div class="m-auto">
									<img src="images/brand/logo-white.png" class="header-brand-img" alt=""/>
									<h3 className='text-white mt-2'>Babul Madina Air Services</h3>
								</div>
							</div>

							<div class="col-lg-6 col-md-12 container-login100">
								<div class="wrap-login100 p-8">
									<form class="login100-form validate-form">
										<span class="login100-form-title pb-0">
											Sign Up
										</span>
										<label class="login-social-icon"><span>Users</span></label>
										<div class="panel panel-primary">
											<div class="panel-body tabs-menu-body p-0 pt-5">
												<div class="tab-content">
													<div class="tab-pane active">

                                                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Name is required">
															<input class="input100 form-control form-control-lg ms-0" type="text" placeholder="Name"/>
														</div>

														<div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
															<input class="input100 form-control form-control-lg ms-0" type="email" placeholder="Email"/>
														</div>

                                                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Phone Number is required">
															<input class="input100 form-control form-control-lg ms-0" type="text" placeholder="Phone"/>
														</div>

														<div class="wrap-input100 validate-input input-group" id="Password-toggle">															
															<input class="input100 form-control form-control-lg ms-0" type="password" placeholder="Password" style={{'borderRight': '0px'}}/>
															<a href="javascript:void(0)" class="input-group-text bg-white text-muted">
																<i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
															</a>
														</div>

                                                        <div class="wrap-input100 validate-input input-group" id="conPassword-toggle">															
															<input class="input100 form-control form-control-lg ms-0" type="password" placeholder="Confirm Password" style={{'borderRight': '0px'}}/>
															<a href="javascript:void(0)" class="input-group-text bg-white text-muted">
																<i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
															</a>
														</div>

														<div class="container-login100-form-btn">
															<a href="/" class="login100-form-btn ">
																	Sign Up
															</a>
														</div>

														<div class="text-center pt-3">
															<p class="text-dark mb-0">Already have an Account?<a href="user_Signin" class="text-primary ms-1">Sign In</a></p>
														</div>
														<label class="login-social-icon"><span>SignUp with Social</span></label>
														<div class="d-flex justify-content-center">
																<a href="javascript:void(0)">
																	<div class="social-login me-4 text-center">
																		<i class="fa fa-google"></i>
																	</div>
																</a>
																<a href="javascript:void(0)">
																	<div class="social-login me-4 text-center">
																		<i class="fa fa-facebook"></i>
																	</div>
																</a>
																<a href="javascript:void(0)">
																	<div class="social-login text-center">
																		<i class="fa fa-twitter"></i>
																	</div>
																</a>
														</div>
													</div>
												</div>
											</div>
                            			</div>
                        			</form>
                    			</div>
                			</div>
                			{/* CONTAINER CLOSED */}
            			</div>
        			</div>
        			{/* End PAGE */}

    			</div>
    			{/* BACKGROUND-IMAGE CLOSED */}
				{/*end::Authentication - Sign-in*/}
			</div>

        </>
    )
}
    
export default UserRegister_page;