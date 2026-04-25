export const About_us = () => {
   return(
   <>
    <div>
  {/* Mirrored from www.gambolthemes.net/html-items/barren-html/disable-demo-link/my_organisation_dashboard_about.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 May 2025 16:42:40 GMT */}
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
  {/* Organisation Settings Model Start*/}
  <div className="modal fade" id="orgSettings" tabIndex={-1} aria-labelledby="orgSettingsLabel" aria-hidden="false">
    <div className="modal-dialog modal-medium-2 modal-dialog-scrollable modal-dialog-centered modal-sm-height modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="orgSettingsLabel">Privacy Settings</h5>
          <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
        </div>
        <div className="modal-body p-bg">
          <div className="model-content main-form pt-2 p-4">
            <div className="mt-4">	
              <div className="setting-step main-card p-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="setting-title">Allow Barren to Access My Organisation</h3>
                  <label className="btn-switch m-0 ml-2">
                    <input type="checkbox" />
                    <span className="checkbox-slider" />
                  </label>
                </div>
                <p className="mt-1">If you enable this, Eventbookings will be able to manage your organisation(s)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Organisation Settings Model End*/}
  {/* Organisation Privacy Settings Model Start*/}
  <div className="modal fade" id="orgPrivacySettings" tabIndex={-1} aria-labelledby="orgPrivacySettingsLabel" aria-hidden="false">
    <div className="modal-dialog modal-medium-2 modal-dialog-scrollable modal-dialog-centered modal-sm-height modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="orgPrivacySettingsLabel">Privacy Settings</h5>
          <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
        </div>
        <div className="modal-body p-bg">
          <div className="model-content main-form pt-2 p-4">
            <div className="main-card p-4 mt-4">	
              <div className="setting-step border_bottom">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="setting-title">Lock Organisation Profile</h3>
                  <label className="btn-switch m-0 ml-2">
                    <input type="checkbox" />
                    <span className="checkbox-slider" />
                  </label>
                </div>
                <p className="mt-1 mb-4">Locking profile hides all kinds of user information, activities and interaction from public profile</p>
              </div>
              <div className="setting-step border_bottom pt-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="setting-title">Hide address on my organisation profile</h3>
                  <label className="btn-switch m-0 ml-2">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-slider" />
                  </label>
                </div>
                <p className="mt-1 mb-4">Hide the address of your organisation from your organisation's public profile</p>
              </div>
              <div className="setting-step border_bottom pt-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="setting-title">Allow people to contact my organisation</h3>
                  <label className="btn-switch m-0 ml-2">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-slider" />
                  </label>
                </div>
                <p className="mt-1 mb-4">People will be able to send you emails through Barren who visits your organisation profile</p>
              </div>
              <div className="setting-step border_bottom pt-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="setting-title">Allow people to follow my organisation</h3>
                  <label className="btn-switch m-0 ml-2">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-slider" />
                  </label>
                </div>
                <p className="mt-1 mb-4">People will be able to follow you</p>
              </div>
              <div className="setting-step border_bottom pt-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="setting-title">Hide reviews on my organisation profile</h3>
                  <label className="btn-switch m-0 ml-2">
                    <input type="checkbox" />
                    <span className="checkbox-slider" />
                  </label>
                </div>
                <p className="mt-1 mb-4">No one will be able to see your organisation's reviews and rating. Hiding reviews do not allow others to give your organisation review or rating as well</p>
              </div>
              <div className="setting-step border_bottom pt-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="setting-title">Hide review interactions from public</h3>
                  <label className="btn-switch m-0 ml-2">
                    <input type="checkbox" />
                    <span className="checkbox-slider" />
                  </label>
                </div>
                <p className="mt-1 mb-0">The review rating will be available in your Organisation's public profile but we will not show any activity in any public feed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Organisation Privacy Settings Model End*/}
  {/* Organisation Profile Update Model Start*/}
  <div className="modal fade" id="org-profile-update-pop" tabIndex={-1} aria-labelledby="orgProfileUpdatepopLabel" aria-hidden="false">
    <div className="modal-dialog modal-medium-2 modal-dialog-scrollable modal-dialog-centered modal-sm-height modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="orgProfileUpdatepopLabel">Organisation details</h5>
          <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
        </div>
        <div className="modal-body">
          <div className="model-content main-form">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-group text-center mt-5">
                  <span className="org_design_button btn-file">
                    <span><i className="fa-solid fa-camera" /></span>
                    <input type="file" id="org_avatar" accept="image/*" name="Organisation_avatar" />
                  </span>																								
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Name*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue="John Doe" />																								
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Profile Link*</label>
                  <div className="loc-group position-relative">
                    <input className="form-control h_40" type="text" placeholder defaultValue="https://www.barren.com/b/organiser/john-doe" />
                    <span className="copy-link">Copy Link</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">About*</label>
                  <textarea className="form-textarea" placeholder="About" defaultValue={""} />																							
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Email*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue="Johndoe@example.com" />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Phone*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Website*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Facebook*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Instagram*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Twitter*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">LinkedIn*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Youtube*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <h4 className="address-title">Address</h4>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Address 1*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Address 2*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group main-form mt-4">
                  <label className="form-label">Country*</label>
                  <select className="selectpicker" data-size={5} title="Nothing selected" data-live-search="true">
                    <option value="Algeria">Algeria</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Australia">Australia</option>
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
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">City/Suburb*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Zip/Post Code*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
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
  {/* Organisation Profile Update Model End*/}
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
            <a href="my_organisation_dashboard_conversion_setup.html" className="menu--link" title="Conversion Setup" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-square-plus menu--icon" />
              <span className="menu--label">Conversion Setup</span>
            </a>
          </li>
          <li className="menu--item">
            <a href="my_organisation_dashboard_about.html" className="menu--link active" title="About" data-bs-toggle="tooltip" data-bs-placement="right">
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
              <h3><i className="fa-solid fa-circle-info me-3" />About My Organisation</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="conversion-setup">
              <div className="main-card mt-5">
                <div className="bp-title position-relative">
                  <h4>About</h4>
                  <div className="profile-edit-btn">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#orgSettings" className="btn"><i className="fa-solid fa-user-gear" /></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#orgPrivacySettings" className="btn"><i className="fa-solid fa-gear" /></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#org-profile-update-pop" className="btn"><i className="fa-solid fa-pen" /></a>
                  </div>
                </div>
                <div className="about-details">
                  <div className="about-step text-center">
                    <div className="user-avatar-img">
                      <img src="images/profile-imgs/img-13.jpg" alt />
                    </div>
                    <div className="user-dts">
                      <h4 className="user-name">John Doe<span className="verify-badge"><i className="fa-solid fa-circle-check" /></span></h4>
                      <span className="user-email">johndoe@example.com</span>
                    </div>
                  </div>
                  <div className="about-step">
                    <h5>Tell us about yourself and let people know who you are</h5>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt interdum nunc et auctor. Phasellus quis pharetra sapien. Integer ligula sem, sodales vitae varius in, varius eget augue.</p>
                  </div>
                  <div className="about-step">
                    <h5>Find me on</h5>
                    <div className="social-links">
                      <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Facebook" aria-label="Facebook"><i className="fab fa-facebook-square" /></a>
                      <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Instagram" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                      <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Twitter" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                      <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="LinkedIn" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                      <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Youtube" aria-label="Youtube"><i className="fab fa-youtube" /></a>
                      <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Website" aria-label="Website"><i className="fa-solid fa-globe" /></a>
                    </div>
                  </div>
                  <div className="about-step">
                    <h5>Address</h5>
                    <p className="mb-0">00 Challis St, Newport, Victoria, 0000, Australia</p>
                  </div>
                  <div className="about-step">
                    <a href="#" className="view-profile-link a-link">View Public Profile<i className="fa-solid fa-arrow-up-right-from-square ms-2" /></a>
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
  {/* Mirrored from www.gambolthemes.net/html-items/barren-html/disable-demo-link/my_organisation_dashboard_about.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 May 2025 16:42:40 GMT */}
</div>    

    </>

   )
}