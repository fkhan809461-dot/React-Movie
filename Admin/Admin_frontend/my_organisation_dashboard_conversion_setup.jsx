<div>
  {/* Mirrored from www.gambolthemes.net/html-items/barren-html/disable-demo-link/my_organisation_dashboard_conversion_setup.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 May 2025 16:42:40 GMT */}
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
  <link href="css/datepicker.min.css" rel="stylesheet" />
  <link href="css/responsive.css" rel="stylesheet" />
  <link href="css/night-mode.css" rel="stylesheet" />
  {/* Vendor Stylesheets */}
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
  <link href="vendor/OwlCarousel/assets/owl.carousel.css" rel="stylesheet" />
  <link href="vendor/OwlCarousel/assets/owl.theme.default.min.css" rel="stylesheet" />
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" />	
  {/* Create Coupon Model Start*/}
  <div className="modal fade" id="trackingModal" tabIndex={-1} aria-labelledby="trackingModalLabel" aria-hidden="false">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="trackingModalLabel">Add Tracking</h5>
          <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
        </div>
        <div className="modal-body">
          <div className="model-content main-form">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="add-tracking-text mt-4">
                  Setup conversion tracking to ensure your marketing budget is spent as effectively as possible.																			
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="tracking-tab">
                  <div className="tracking-head">
                    <ul className="nav nav-tabs border-0 justify-content-between" role="tablist">
                      <li className="nav-item tracking-nav-item">
                        <a className="nav-link active" id="facebook-tab" data-bs-toggle="tab" href="#facebook" role="tab" aria-controls="facebook" aria-selected="true">
                          Facebook
                        </a>
                      </li>
                      <li className="nav-item tracking-nav-item">
                        <a className="nav-link" id="google-adwords-tab" data-bs-toggle="tab" href="#google-adwords" role="tab" aria-controls="google-adwords" aria-selected="false">
                          Google Adwords
                        </a>
                      </li>
                      <li className="nav-item tracking-nav-item">
                        <a className="nav-link" id="google-analytics-tab" data-bs-toggle="tab" href="#google-analytics" role="tab" aria-controls="google-analytics" aria-selected="false">
                          Google Analytics
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tracking-body">
                  </div>
                </div>
                <div className="tracking-body">
                  <div className="tab-content">
                    <div className="tab-pane fade active show" id="facebook" role="tabpanel" aria-labelledby="facebook-tab">
                      <div className="form-group mt-4">
                        <label className="form-label">Facebook ID*</label>
                        <input className="form-control h_40" type="text" placeholder={123456789012345} defaultValue />
                        <small>This is the unique id found in the base code of your Facebook Pixel Code</small>
                      </div>
                      <div className="specific-event">											
                        <h4>Exclude Specific Event</h4>
                        <div className="form-group main-form mt-4">
                          <select className="selectpicker" data-size={5} title="Nothing selected" data-live-search="true">
                            <option value="Algeria">No results found</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="google-adwords" role="tabpanel" aria-labelledby="google-adwords-tab">
                      <div className="form-group mt-4">
                        <label className="form-label">Conversion ID*</label>
                        <input className="form-control h_40" type="text" placeholder="AW-123456789" defaultValue />
                        <small>This is the unique id found in the Base Code of your Google Adwords Code</small>
                      </div>
                      <div className="form-group mt-4">
                        <label className="form-label">Code*</label>
                        <input className="form-control h_40" type="text" placeholder="xyz1234567895" defaultValue />
                      </div>
                      <div className="specific-event">											
                        <h4>Exclude Specific Event</h4>
                        <div className="form-group main-form mt-4">
                          <select className="selectpicker" data-size={5} title="Nothing selected" data-live-search="true">
                            <option value="Algeria">No results found</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="google-analytics" role="tabpanel" aria-labelledby="google-analytics-tab">
                      <div className="form-group mt-4">
                        <label className="form-label">Tracking ID*</label>
                        <input className="form-control h_40" type="text" placeholder="UA-000000-2" defaultValue />
                        <small>This is the unique id found in the Base Code of your Google Universal Analytics Code</small>
                      </div>
                      <div className="specific-event">											
                        <h4>Exclude Specific Event</h4>
                        <div className="form-group main-form mt-4">
                          <select className="selectpicker" data-size={5} title="Nothing selected" data-live-search="true">
                            <option value="Algeria">No results found</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="co-main-btn min-width btn-hover h_40" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="main-btn min-width btn-hover h_40">Save</button>
        </div>
      </div>
    </div>
  </div>
  {/* Create Coupon Model End*/}
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
            <a href="my_organisation_dashboard_subscription.html" className="menu--link" title="Subscription" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-bahai menu--icon" />
              <span className="menu--label">Subscription</span>
            </a>
          </li>
          <li className="menu--item">
            <a href="my_organisation_dashboard_conversion_setup.html" className="menu--link active" title="Conversion Setup" data-bs-toggle="tooltip" data-bs-placement="right">
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
              <h3><i className="fa-solid fa-square-plus me-3" />Conversion Setup</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="main-card mt-5">
              <div className="dashboard-wrap-content p-4">
                <h5 className="mb-4">Setup Visitor &amp; Conversion Tracking</h5>
                <div className="d-md-flex flex-wrap align-items-center">
                  <div className="dashboard-date-wrap">
                    <div className="form-group">
                      <div className="relative-input position-relative">
                        <input className="form-control h_40" type="text" placeholder="Search by coupon name" defaultValue />
                        <i className="uil uil-search" />
                      </div>
                    </div>
                  </div>
                  <div className="rs ms-auto mt_r4">
                    <button className="main-btn btn-hover h_40 w-100" data-bs-toggle="modal" data-bs-target="#trackingModal">Add Tracking</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="conversion-setup">
              <div className="main-card mt-5">
                <div className="contact-list">
                  <div className="top d-flex flex-wrap justify-content-between align-items-center p-4 border_bottom">
                    <div className="icon-box">
                      <span className="icon-big icon">
                        <i className="fa-solid fa-chart-column" />
                      </span>
                      <h5 className="font-18 mb-1 mt-1 f-weight-medium">Google Universal Analytics</h5>
                      <p className="text-gray-50 m-0"><span className="visitor-date-time">Created on May 12, 2022</span></p>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="dropdown dropdown-default dropdown-text dropdown-icon-item">
                        <button className="option-btn-1" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa-solid fa-ellipsis-vertical" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#" className="dropdown-item"><i className="fa-solid fa-pen me-3" />Edit</a>
                          <a href="#" className="dropdown-item"><i className="fa-solid fa-trash-can me-3" />Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom d-flex flex-wrap justify-content-between align-items-center p-4">
                    <div className="icon-box ">
                      <span className="icon">
                        <i className="fa-solid fa-group-arrows-rotate" />
                      </span>
                      <p>Applicable for</p>
                      <h6 className="coupon-status">All Events</h6>
                    </div>
                    <div className="icon-box">
                      <span className="icon">
                        <i className="fa-regular fa-address-card" />
                      </span>
                      <p>Tracking ID</p>
                      <h6 className="coupon-status">UA-000000000-1</h6>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="icon-box">
                      <span className="icon">
                        <i className="fa-regular fa-calendar-days" />
                      </span>
                      <p>Last Updated</p>
                      <h6 className="coupon-status">N/A</h6>
                    </div>
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
  {/* Mirrored from www.gambolthemes.net/html-items/barren-html/disable-demo-link/my_organisation_dashboard_conversion_setup.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 May 2025 16:42:40 GMT */}
</div>
