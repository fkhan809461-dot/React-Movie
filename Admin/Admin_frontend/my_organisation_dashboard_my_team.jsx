<div>
  {/* Mirrored from www.gambolthemes.net/html-items/barren-html/disable-demo-link/my_organisation_dashboard_my_team.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 May 2025 16:42:40 GMT */}
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
  {/* Invite Team Member Model Start*/}
  <div className="modal fade" id="inviteTeamModal" tabIndex={-1} aria-labelledby="inviteTeamModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="inviteTeamModalLabel">Invite a Team Member</h5>
          <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
        </div>
        <div className="modal-body">
          <div className="model-content main-form">
            <div className="form-group mt-30">
              <label className="form-label">Which team members do you wish to invite?*</label>
              <input className="form-control h_40" type="text" placeholder="Enter email" defaultValue />
            </div>
            <div className="form-group mt-30">
              <label className="form-label">What role do you wish to assign?*</label>
              <select className="selectpicker" title="Select Role">
                <option value={1}>Account owner</option>
                <option value={2}>Basic access</option>
                <option value={3}>Finance</option>
                <option value={4}>Power user</option>
                <option value={5}>Producer access</option>
              </select>																							
            </div>
            <div className="form-group mt-30">
              <div className="d-flex align-items-start">
                <label className="btn-switch m-0 me-3">
                  <input type="checkbox" className id="bird-discount" defaultValue />
                  <span className="checkbox-slider" />
                </label>
                <div className="d-flex flex-column">
                  <label className="color-black fw-bold mb-0">Send system emails to this team member</label>
                  <p className="mt-2 fs-14 d-block mb-0">System emails provide information about events created, as well as updates to the system.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="co-main-btn min-width btn-hover h_40" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="main-btn min-width btn-hover h_40">Invite</button>
        </div>
      </div>
    </div>
  </div>
  {/* Invite Team Member Model End*/}
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
                  </li>
                  <li><a href="#" className="social-link"><i className="fab fa-instagram" /></a>
                  </li>
                  <li><a href="#" className="social-link"><i className="fab fa-twitter" /></a>
                  </li>
                  <li><a href="#" className="social-link"><i className="fab fa-linkedin-in" /></a>
                  </li>
                  <li><a href="#" className="social-link"><i className="fab fa-youtube" /></a>
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
            <a href="my_organisation_dashboard_my_team.html" className="menu--link team-lock active" title="My Team" data-bs-toggle="tooltip" data-bs-placement="right"> 
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
              <h3><i className="fa-solid fa-user-group me-3" />Team Members</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="conversion-setup">
              <div className="main-card mt-5">
                <div className="dashboard-wrap-content p-4">
                  <div className="d-md-flex flex-wrap align-items-center">
                    <div className="nav custom2-tabs btn-group" role="tablist">
                      <button className="tab-link ms-0 active" data-bs-toggle="tab" data-bs-target="#overview-tab" type="button" role="tab" aria-controls="overview-tab" aria-selected="true">Overview</button>
                      <button className="tab-link" data-bs-toggle="tab" data-bs-target="#role-tab" type="button" role="tab" aria-controls="role-tab" aria-selected="false">Role</button>
                    </div>
                    <div className="rs ms-auto mt_r4">
                      <button className="main-btn btn-hover h_40 w-100" data-bs-toggle="modal" data-bs-target="#inviteTeamModal">Invite a Team Member</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="overview-tab" role="tabpanel">
                  <div className="table-card mt-4">
                    <div className="main-table">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Role</th>
                              <th scope="col">Last Login</th>
                              <th scope="col">2FA Enable</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>										
                              <td>John Doe</td>	
                              <td>johndoe@example.com</td>	
                              <td>Account Owner</td>	
                              <td>20 May 22, 10.27 AM</td>	
                              <td>No</td>	
                              <td><span className="action-btn disabled"><i className="fa-solid fa-lock" /></span></td>	
                            </tr>
                            <tr>										
                              <td>Rock Smith</td>	
                              <td>rocksmith@example.com</td>	
                              <td>Basic access</td>	
                              <td>20 May 22, 11.15 AM</td>	
                              <td>No</td>	
                              <td><span className="action-btn"><i className="fa-solid fa-trash-can" /></span></td>	
                            </tr>
                            <tr>										
                              <td>Jassica William</td>	
                              <td>jassicawilliam@example.com</td>	
                              <td>Finance</td>	
                              <td>20 May 22, 11.45 AM</td>	
                              <td>No</td>	
                              <td><span className="action-btn"><i className="fa-solid fa-trash-can" /></span></td>	
                            </tr>
                            <tr>										
                              <td>Lizzy Wizzy</td>	
                              <td>lizzywizzy@example.com</td>	
                              <td>Power User</td>	
                              <td>20 May 22, 12.20 PM</td>	
                              <td>No</td>	
                              <td><span className="action-btn"><i className="fa-solid fa-trash-can" /></span></td>	
                            </tr>
                          </tbody>									
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="role-tab" role="tabpanel">
                  <div className="role-slider-content mt-4">
                    <div className="owl-carousel role-slider owl-theme">
                      <div className="item">
                        <div className="main-card">
                          <div className="role-header">
                            <h6>Account Owner</h6>
                            <span>1 per account</span>
                          </div>
                          <div className="role-body-content">
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Banking</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Team members</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Events</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Reports</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Customer service</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Amend bookings</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Gift certificates</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Marketing tools</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Integration tools</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Scanning app</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="main-card">
                          <div className="role-header">
                            <h6>Power user</h6>
                            <span>Unlimited</span>
                          </div>
                          <div className="role-body-content">
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Banking</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Team members</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Events</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Reports</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Customer service</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Amend bookings</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Gift certificates</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Marketing tools</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Integration tools</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Scanning app</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="main-card">
                          <div className="role-header">
                            <h6>Finance</h6>
                            <span>Unlimited</span>
                          </div>
                          <div className="role-body-content">
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Banking</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Team members</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Events</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Reports</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Customer service</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Amend bookings</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark" />
                              <span>Gift certificates</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Marketing tools</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Integration tools</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Scanning app</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="main-card">
                          <div className="role-header">
                            <h6>Basic access</h6>
                            <span>Unlimited</span>
                          </div>
                          <div className="role-body-content">
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Banking</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Team members</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Events</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Reports</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Customer service</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Amend bookings</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Gift certificates</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Marketing tools</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Integration tools</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Scanning app</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="main-card">
                          <div className="role-header">
                            <h6>Producer access</h6>
                            <span>1 per event</span>
                          </div>
                          <div className="role-body-content">
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Banking</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Team members</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Events</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Reports</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Customer service</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Amend bookings</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Gift certificates</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Marketing tools</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-xmark i-disabled" />
                              <span>Integration tools</span>
                            </div>
                            <div className="role-item">
                              <i className="fa-solid fa-check" />
                              <span>Scanning app</span>
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
        </div>
      </div>
    </div>
  </div>
  {/* Body End */}	
  {/* Mirrored from www.gambolthemes.net/html-items/barren-html/disable-demo-link/my_organisation_dashboard_my_team.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 May 2025 16:42:40 GMT */}
</div>
