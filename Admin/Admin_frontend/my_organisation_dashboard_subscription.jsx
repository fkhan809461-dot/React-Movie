<div>
  {/* Mirrored from www.gambolthemes.net/html-items/barren-html/disable-demo-link/my_organisation_dashboard_subscription.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 May 2025 16:42:39 GMT */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, shrink-to-fit=9" />
  <meta name="description" content="Gambolthemes" />
  <meta name="author" content="Gambolthemes" />		
  <title>Barren - Simple Online Event Ticketing System</title>
  {/* Favicon Icon */}
  <link rel="icon" type="image/png" href="images/fav.png" />
  {/* Stylesheets */}
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
  <link href="vendor/unicons-2.0.1/css/unicons.css" rel="stylesheet" />
  <link href="css/style.css" rel="stylesheet" />
  <link href="css/vertical-responsive-menu.min.css" rel="stylesheet" />
  <link href="css/responsive.css" rel="stylesheet" />
  <link href="css/night-mode.css" rel="stylesheet" />
  {/* Vendor Stylesheets */}
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
  <link href="vendor/OwlCarousel/assets/owl.carousel.css" rel="stylesheet" />
  <link href="vendor/OwlCarousel/assets/owl.theme.default.min.css" rel="stylesheet" />
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" />	
  {/* Billing Information Model Start*/}
  <div className="modal fade" id="billinginfoModal" tabIndex={-1} aria-labelledby="billinginfoModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="billinginfoModalLabel">Billing Information</h5>
          <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
        </div>
        <div className="modal-body">
          <div className="model-content main-form">
            <div className="row">							
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Address 1*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue="140 St" />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Address 2*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue="Kilda Rd" />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group main-form mt-4">
                  <label className="form-label">Country*</label>
                  <select className="selectpicker" data-size={5} title="Nothing selected" data-live-search="true">
                    <option value="Algeria">Algeria</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Australia" selected>Australia</option>
                    <option value="Austria">Austria (Österreich)</option>
                    <option value="Belgium">Belgium (België)</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Greece">Greece</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Norway">Norway</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Spain">Spain</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Turkey">Turkey</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Vietnam">Vietnam</option>																					
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">State*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue="Melbourne" />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">City/Suburb*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue="Victoria" />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Zip/Post Code*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue={3000} />																								
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="co-main-btn min-width btn-hover h_40" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="main-btn min-width btn-hover h_40">Update</button>
        </div>
      </div>
    </div>
  </div>
  {/* Billing Information Model End*/}
  {/* Payment Information Model Start*/}
  <div className="modal fade" id="paymentinfoModal" tabIndex={-1} aria-labelledby="paymentinfoModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="paymentinfoModalLabel">Add Credit or Debit Card</h5>
          <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
        </div>
        <div className="modal-body">
          <div className="model-content main-form">
            <div className="row">							
              <div className="col-lg-12 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label d-flex justify-content-between align-items-center">Card Number<img className="c-img" src="images/visa-master-card.png" alt /></label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Expiry date*</label>
                  <input className="form-control h_40" type="text" placeholder="MM/YY" defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">CVV*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="co-main-btn min-width btn-hover h_40" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="main-btn min-width btn-hover h_40">Add</button>
        </div>
      </div>
    </div>
  </div>
  {/* Payment Information Model End*/}
  {/* Header Start*/}
  <header className="header">
    <div className="header-inner">		
      <nav className="navbar navbar-expand-lg bg-barren barren-head navbar fixed-top justify-content-sm-start pt-0 pb-0 ps-lg-0 pe-2">
        <div className="container-fluid ps-0">
          <button type="button" id="toggleMenu" className="toggle_menu">
            <i className="fa-solid fa-bars-staggered" />
          </button>
          <button id="collapse_menu" className="collapse_menu me-4">
            <i className="fa-solid fa-bars collapse_menu--icon " />
            <span className="collapse_menu--label" />
          </button>
          <button className="navbar-toggler order-3 ms-2 pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars" />
            </span>
          </button>
          <a className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto" href="index.html">
            <div className="res-main-logo">
              <img src="images/logo-icon.svg" alt />
            </div>
            <div className="main-logo" id="logo">
              <img src="images/logo.svg" alt />
              <img className="logo-inverse" src="images/dark-logo.svg" alt />
            </div>
          </a>
          <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <div className="offcanvas-logo" id="offcanvasNavbarLabel">
                <img src="images/logo-icon.svg" alt />
              </div>
              <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="offcanvas-body">
              <div className="offcanvas-top-area">
                <div className="create-bg">
                  <a href="create.html" className="offcanvas-create-btn">
                    <i className="fa-solid fa-calendar-days" />
                    <span>Create Event</span>
                  </a>
                </div>
              </div>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe_5">
                <li className="nav-item">
                  <a className="nav-link" href="organiser_profile_view.html">
                    <i className="fa-solid fa-right-left me-2" />My Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="explore_events.html">
                    <i className="fa-solid fa-compass me-2" />Explore Events
                  </a>
                </li>
              </ul>
            </div>
            <div className="offcanvas-footer">
              <div className="offcanvas-social">
                <h5>Follow Us</h5>
                <ul className="social-links">
                  <li><a href="#" className="social-link"><i className="fab fa-facebook-square" /></a>
                  </li><li><a href="#" className="social-link"><i className="fab fa-instagram" /></a>
                  </li><li><a href="#" className="social-link"><i className="fab fa-twitter" /></a>
                  </li><li><a href="#" className="social-link"><i className="fab fa-linkedin-in" /></a>
                  </li><li><a href="#" className="social-link"><i className="fab fa-youtube" /></a>
                  </li></ul>
              </div>
            </div>
          </div>
          <div className="right-header order-2">
            <ul className="align-self-stretch">
              <li>
                <a href="create.html" className="create-btn btn-hover">
                  <i className="fa-solid fa-calendar-days" />
                  <span>Create Event</span>
                </a>
              </li>
              <li className="dropdown account-dropdown order-3">
                <a href="#" className="account-link" role="button" id="accountClick" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="images/profile-imgs/img-13.jpg" alt />
                  <i className="fas fa-caret-down arrow-icon" />
                </a>
                <ul className="dropdown-menu dropdown-menu-account dropdown-menu-end" aria-labelledby="accountClick">
                  <li>
                    <div className="dropdown-account-header">
                      <div className="account-holder-avatar">
                        <img src="images/profile-imgs/img-13.jpg" alt />
                      </div>
                      <h5>John Doe</h5>
                      <p>johndoe@example.com</p>
                    </div>
                  </li>
                  <li className="profile-link">
                    <a href="organiser_profile_view.html" className="link-item">My Profile</a>									
                    <a href="sign_in.html" className="link-item">Sign Out</a>									
                  </li>
                </ul>
              </li>
              <li>
                <div className="night_mode_switch__btn">
                  <div id="night-mode" className="fas fa-moon fa-sun" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="overlay" />
    </div>
  </header>
  {/* Header End*/}
  {/* Left Sidebar Start */}
  <nav className="vertical_nav">
    <div className="left_section menu_left" id="js-menu">
      <div className="left_section">
        <ul>
          <li className="menu--item">
            <a href="my_organisation_dashboard.html" className="menu--link" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-gauge menu--icon" />
              <span className="menu--label">Dashboard</span>
            </a>
          </li>
          <li className="menu--item">
            <a href="my_organisation_dashboard_events.html" className="menu--link" title="Events" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-calendar-days menu--icon" />
              <span className="menu--label">Events</span>
            </a>
          </li>
          <li className="menu--item">
            <a href="my_organisation_dashboard_promotion.html" className="menu--link" title="Promotion" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-rectangle-ad menu--icon" />
              <span className="menu--label">Promotion</span>
            </a>
          </li>
          <li className="menu--item">
            <a href="my_organisation_dashboard_contact_lists.html" className="menu--link" title="Contact List" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-regular fa-address-card menu--icon" />
              <span className="menu--label">Contact List</span>
            </a>
          </li>
          <li className="menu--item">
            <a href="my_organisation_dashboard_payout.html" className="menu--link" title="Payouts" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-credit-card menu--icon" />
              <span className="menu--label">Payouts</span>
            </a>
          </li>
          <li className="menu--item">
            <a href="my_organisation_dashboard_reports.html" className="menu--link" title="Reports" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-chart-pie menu--icon" />
              <span className="menu--label">Reports</span>
            </a>
          </li>
          <li className="menu--item">
            <a href="my_organisation_dashboard_subscription.html" className="menu--link active" title="Subscription" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-bahai menu--icon" />
              <span className="menu--label">Subscription</span>
            </a>
          </li>
          <li className="menu--item">
            <a href="my_organisation_dashboard_conversion_setup.html" className="menu--link" title="Conversion Setup" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-square-plus menu--icon" />
              <span className="menu--label">Conversion Setup</span>
            </a>
          </li>
          <li className="menu--item">
            <a href="my_organisation_dashboard_about.html" className="menu--link" title="About" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-circle-info menu--icon" />
              <span className="menu--label">About</span>
            </a>
          </li>
          <li className="menu--item">
            <a href="my_organisation_dashboard_my_team.html" className="menu--link team-lock" title="My Team" data-bs-toggle="tooltip" data-bs-placement="right"> 
              <i className="fa-solid fa-user-group menu--icon" />
              <span className="menu--label">My Team</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Left Sidebar End */}
  {/* Body Start */}
  <div className="wrapper wrapper-body">
    <div className="dashboard-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="d-main-title">
              <h3><i className="fa-solid fa-bahai me-3" />Subscription</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="main-card subscription-bg mt-5">
              <div className="d-md-flex d-sm-block justify-content-between align-items-center">
                <div className="s-info">
                  <h3>Basic</h3>
                  <p>All the tools you need to organise your free online and venue events, absolutely free!</p>
                </div>
                <div className="s-price">
                  <h3>Free<span className="font-15 font-weight-semibold" /></h3>
                </div>
              </div>
              <div className="since-text">Member since 026/04/2022</div>
            </div>
            <div className="main-card mt-4 p-4">
              <div className="subscription-title">
                <h3 className="mb-4 mt-3">Premium plan includes all of these great features :</h3>							
              </div>
              <div className="subscription-feature-lists">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="feature-item text-start p_30 mt-4 subscription-item">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-1.png" alt />
                      </div>
                      <h4>Remove the Restrictions</h4>
                      <p>No restriction on free events. Host large venue and online events.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="feature-item text-start p_30 mt-4 subscription-item">
                      <div className="feature-icon">`
                        <img src="images/icons/feature-icon-12.png" alt />
                      </div>
                      <h4>Organiser App</h4>
                      <p>Stay on top of things, manage and monitor your events using the organiser app.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="feature-item text-start p_30 mt-4 subscription-item">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-9.png" alt />
                      </div>
                      <h4>Advanced Tools</h4>
                      <p>Turbo charge your sales, marketing and attendee management with the premium only tools.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="feature-item text-start p_30 mt-4 subscription-item">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-8.png" alt />
                      </div>
                      <h4>Live Streaming</h4>
                      <p>Livestream your online events on Facebook, YouTube and other social networks.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="feature-item text-start p_30 mt-4 subscription-item">
                      <div className="feature-icon">
                        <img src="images/icons/online-class.png" alt />
                      </div>
                      <h4>Messaging and Sharing</h4>
                      <p>Exchange instant messages, securely share screens and files in your online events.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="feature-item text-start p_30 mt-4 subscription-item">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-7.png" alt />
                      </div>
                      <h4>Recording</h4>
                      <p>Securely record your online events and save on the cloud of your choice.</p>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="text-center mt-5">
                      <a href="checkout_premium.html" className="main-btn btn-hover">Upgrade to Premium<i className="fa-solid fa-arrow-right ms-2" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-card mt-4 p-4 d-flex justify-content-between align-items-center">
              <div className="bp-info">
                <h4>Billing Information</h4>
                <p className="mb-0">140 St Kilda Rd, Melbourne, Victoria, 3000, Australia</p>
              </div>
              <button className="pe-4 ps-4 text-center co-main-btn h_40 d-inline-block" data-bs-toggle="modal" data-bs-target="#billinginfoModal">Edit</button>
            </div>
            <div className="main-card mt-4 p-4 d-flex justify-content-between align-items-center">
              <div className="bp-info">
                <h4>Payment Information</h4>
                <p className="mb-0">No payment information added yet.</p>
              </div>
              <button className="pe-4 ps-4 text-center co-main-btn h_40 d-inline-block" data-bs-toggle="modal" data-bs-target="#paymentinfoModal">Edit</button>
            </div>
            <div className="main-card mt-4 p-4">
              <div className="bp-info">
                <h4>Payment History</h4>
              </div>
              <div className="table-card mt-4">
                <div className="main-table">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Details</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Status</th>
                          <th scope="col">Invoice</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>										
                          <td>INV-0QAXMJ-0000</td>	
                          <td>Basic</td>	
                          <td>$0.00</td>	
                          <td>N/A</td>	
                          <td>
                            <a href="#" className="btn-gray no-bg ml-1">
                              <svg width={28} height={24} viewBox="0 0 28 24" fill="none">
                                <path d="M20.3023 18V21H6.76796V18H5.07617V21C5.07617 21.3978 5.25441 21.7794 5.57169 22.0607C5.88896 22.342 6.31927 22.5 6.76796 22.5H20.3023C20.751 22.5 21.1813 22.342 21.4986 22.0607C21.8158 21.7794 21.9941 21.3978 21.9941 21V18H20.3023Z" fill="#FF2116" />
                                <path d="M17.7636 15.75L16.5675 14.6895L14.3801 16.629V10.5H12.6883V16.629L10.5008 14.6895L9.30469 15.75L13.5342 19.5L17.7636 15.75Z" fill="#FF2116" />
                                <path d="M23.6847 3V1.5H18.6094V9H20.3012V6H22.8389V4.5H20.3012V3H23.6847Z" fill="#FF2116" />
                                <path d="M14.3797 9H10.9961V1.5H14.3797C15.0525 1.5006 15.6976 1.73784 16.1733 2.15967C16.6491 2.5815 16.9167 3.15345 16.9174 3.75V6.75C16.9167 7.34655 16.6491 7.9185 16.1733 8.34033C15.6976 8.76216 15.0525 8.9994 14.3797 9ZM12.6879 7.5H14.3797C14.604 7.4998 14.819 7.42072 14.9776 7.28011C15.1362 7.1395 15.2253 6.94885 15.2256 6.75V3.75C15.2253 3.55115 15.1362 3.3605 14.9776 3.21989C14.819 3.07928 14.604 3.0002 14.3797 3H12.6879V7.5Z" fill="#FF2116" />
                                <path d="M7.61229 1.5H3.38281V9H5.0746V6.75H7.61229C8.06077 6.7494 8.49069 6.59118 8.80782 6.31C9.12495 6.02883 9.30341 5.64764 9.30408 5.25V3C9.30363 2.6023 9.12524 2.221 8.80807 1.93978C8.49089 1.65856 8.06084 1.5004 7.61229 1.5ZM5.0746 5.25V3H7.61229L7.61313 5.25H5.0746Z" fill="#FF2116" />
                              </svg>
                            </a>
                          </td>	
                        </tr>
                      </tbody>									
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Body End */}
  {/* Mirrored from www.gambolthemes.net/html-items/barren-html/disable-demo-link/my_organisation_dashboard_subscription.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 May 2025 16:42:40 GMT */}
</div>
