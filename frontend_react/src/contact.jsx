import { Header } from "./components/Header";
import { Footer } from "./components/Footer";



export const ContactPage = () => {

	return (
		<>
			<div>
	
	            <Header/>

				{/* Header End*/}
				{/* Body Start*/}
				<div className="wrapper">
					<div className="breadcrumb-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-10">
									<div className="barren-breadcrumb">
										<nav aria-label="breadcrumb">
											<ol className="breadcrumb">
												<li className="breadcrumb-item"><a href="index.html">Home</a></li>
												<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
											</ol>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="event-dt-block p-80">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-12 col-md-12">
									<div className="main-title checkout-title text-center">
										<h3>Contact Us</h3>
										<p className="mb-0">Have any questions? We'd love to hear from you.</p>
									</div>
								</div>
								<div className="col-lg-10">
									<div className="main-card mt-5">
										<div className="row">
											<div className="col-xl-7 col-lg-12 col-md-12 order-lg-2">
												<div className="contact-form bp-form p-lg-5 ps-lg-4 pt-lg-4 pb-5 p-4">
													<div className="row">
														<div className="col-md-6">
															<div className="form-group mt-4">
																<label className="form-label">First Name*</label>
																<input className="form-control h_50" type="text" placeholder defaultValue />
															</div>
														</div>
														<div className="col-md-6">
															<div className="form-group mt-4">
																<label className="form-label">Last Name*</label>
																<input className="form-control h_50" type="text" placeholder defaultValue />
															</div>
														</div>
														<div className="col-md-6">
															<div className="form-group mt-4">
																<label className="form-label">Email*</label>
																<input className="form-control h_50" type="Email" placeholder defaultValue />
															</div>
														</div>
														<div className="col-md-6">
															<div className="form-group mt-4">
																<label className="form-label">Phone*</label>
																<input className="form-control h_50" type="text" placeholder defaultValue />
															</div>
														</div>
														<div className="col-md-12">
															<div className="form-group mt-4">
																<label className="form-label">Message*</label>
																<textarea className="form-textarea" placeholder="About" defaultValue={""} />
															</div>
														</div>
														<div className="col-md-12">
															<div className="text-center mt-4">
																<button className="main-btn btn-hover h_50 w-100" type="submit">Submit</button>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-5 col-lg-12 col-md-12 order-lg-1 d-none d-xl-block">
												<div className="contact-banner-block">
													<div className="contact-hero-banner">
														<div className="contact-hero-banner-info">
															<h3>Contact information</h3>
															<p>Fill out the form and our team will get back to you soon.</p>
															<ul>
																<li>
																	<div className="contact-info d-flex align-items-center">
																		<div className="contact-icon">
																			<i className="fa-solid fa-square-phone fa-beat-fade"  />
																		</div>
																		<a href="#">+1(000)00-00000</a>
																	</div>
																</li>
																<li>
																	<div className="contact-info d-flex align-items-center">
																		<div className="contact-icon">
																			<i className="fa-solid fa-envelope fa-beat-fade"  />
																		</div>
																		<a href="#">contact@barren.com</a>
																	</div>
																</li>
																<li>
																	<div className="contact-info d-flex align-items-center">
																		<div className="contact-icon">
																			<i className="fa-solid fa-life-ring fa-beat-fade" />
																		</div>
																		<a href="#">Help Center</a>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-10 col-md-12 d-block d-xl-none">
									<div className="main-card mt-4">
										<div className="contact-banner-block">
											<div className="contact-hero-banner p_30 min-h-auto">
												<div className="contact-hero-banner-info">
													<h3>Contact information</h3>
													<p>Fill out the form and our team will get back to you soon.</p>
													<ul>
														<li>
															<div className="contact-info d-flex align-items-center">
																<div className="contact-icon">
																	<i className="fa-solid fa-square-phone fa-beat-fade" />
																</div>
																<a href="#">+1(000)00-00000</a>
															</div>
														</li>
														<li>
															<div className="contact-info d-flex align-items-center">
																<div className="contact-icon">
																	<i className="fa-solid fa-envelope fa-beat-fade" />
																</div>
																<a href="#">contact@barren.com</a>
															</div>
														</li>
														<li>
															<div className="contact-info d-flex align-items-center">
																<div className="contact-icon">
																	<i className="fa-solid fa-life-ring fa-beat-fade"  />
																</div>
																<a href="#">Help Center</a>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Body End*/}
				{/* Footer Start*/}
			<Footer/>
			</div>

		</>
	)

}