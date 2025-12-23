

import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../css/style.css'

export const AdminHeader = () => {
    return (
        <>
    
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
  <link href="css/analytics.css" rel="stylesheet" />
  <link href="css/responsive.css" rel="stylesheet" />
  <link href="css/night-mode.css" rel="stylesheet" />
  {/* Vendor Stylesheets */}
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
  <link href="vendor/OwlCarousel/assets/owl.carousel.css" rel="stylesheet" />
  <link href="vendor/OwlCarousel/assets/owl.theme.default.min.css" rel="stylesheet" />
  {/* <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" /> */}
  <link href="vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" />	
  <link href="vendor/chartist/dist/chartist.min.css" rel="stylesheet" />
  <link href="vendor/chartist-plugin-tooltip/dist/chartist-plugin-tooltip.css" rel="stylesheet" />
  {/* Add Organisation Model Start*/}
  <div className="modal fade" id="addorganisationModal" tabIndex={-1} aria-labelledby="addorganisationLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="addorganisationLabel">Organisation details</h5>
          <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
        </div>
        <div className="modal-body">
          <div className="model-content main-form">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-group text-center mt-4">
                  <label className="form-label">Avatar*</label>
                  <span className="org_design_button btn-file">
                    <span><i className="fa-solid fa-camera" /></span>
                    <input type="file" id="org_avatar" accept="image/*" name="Organisation_avatar" />
                  </span>																								
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Name*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Profile Link*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue="https://www.barren.com/b/organiser/" disabled />																								
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">About*</label>
                  <textarea className="form-textarea" placeholder defaultValue={"About"} />																							
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group mt-4">
                  <label className="form-label">Email*</label>
                  <input className="form-control h_40" type="text" placeholder defaultValue />																								
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
          <button type="button" className="co-main-btn min-width btn-hover h_40" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="main-btn min-width btn-hover h_40">Add</button>
        </div>
      </div>
    </div>
  </div>
  {/* Add Organisation Model End*/}
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

        </>
    )
}
