import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


export const BookConfromed= () => {

    return (
        <>
       

<div>
  <header className="header">
    <div className="header-inner">
      <nav className="navbar navbar-expand-lg bg-barren barren-head navbar fixed-top justify-content-sm-start pt-0 pb-0">
        <div className="container">	
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars" />
            </span>
          </button>
          <a className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto" href="index.html">
            <div className="res-main-logo">
              <img src="./assets/images/logo-icon.svg" alt />
            </div>
            <div className="main-logo" id="logo">
              <img src="./assets/images/logo.svg" alt />
              <img className="logo-inverse" src="./assets/images/dark-logo.svg" alt />
            </div>
          </a>
          <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <div className="offcanvas-logo" id="offcanvasNavbarLabel">
                <img src="./assets/images/logo-icon.svg" alt />
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
                  <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Explore Events
                  </a>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li><a className="dropdown-item" href="explore_events.html">Explore Events</a></li>
                    <li><a className="dropdown-item" href="venue_event_detail_view.html">Venue Event Detail View</a></li>
                    <li><a className="dropdown-item" href="online_event_detail_view.html">Online Event Detail View</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pricing.html">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blog
                  </a>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li><a className="dropdown-item" href="our_blog.html">Our Blog</a></li>
                    <li><a className="dropdown-item" href="blog_detail_view.html">Blog Detail View</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Help
                  </a>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li><a className="dropdown-item" href="faq.html">FAQ</a></li>
                    <li><a className="dropdown-item" href="help_center.html">Help Center</a></li>
                    <li><a className="dropdown-item" href="contact_us.html">Contact Us</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </a>
                  <ul className="dropdown-menu dropdown-submenu">
                    <li>
                      <a className="dropdown-item submenu-item" href="#">Other Pages</a>
                      <ul className="submenu dropdown-menu">
                        <li><a className="dropdown-item pe-5" href="sign_in.html">Sign In</a></li>
                        <li><a className="dropdown-item pe-5" href="sign_up.html">Sign Up</a></li>
                        <li><a className="dropdown-item pe-5" href="forgot_password.html">Forgot Password</a></li>
                        <li><a className="dropdown-item pe-5" href="about_us.html">About Us</a></li>
                        <li><a className="dropdown-item pe-5" href="checkout.html">Checkout</a></li>
                        <li><a className="dropdown-item pe-5" href="checkout_premium.html">Checkout Premium</a></li>
                        <li><a className="dropdown-item pe-5" href="invoice.html">Invoice</a></li>
                        <li><a className="dropdown-item pe-5" href="coming_soon.html">Coming Soon</a></li>
                        <li><a className="dropdown-item pe-5" href="error_404.html">Error 404</a></li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item submenu-item" href="#">Create Event</a>
                      <ul className="submenu dropdown-menu">
                        <li><a className="dropdown-item pe-5" href="create.html">Create</a></li>
                        <li><a className="dropdown-item pe-5" href="create_venue_event.html">Create Venue Event</a></li>
                        <li><a className="dropdown-item pe-5" href="create_online_event.html">Create Online Event</a></li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item submenu-item" href="#">Events View</a>
                      <ul className="submenu dropdown-menu">
                        <li><a className="dropdown-item pe-5" href="online_event_detail_view.html">Online Event Detail View</a></li>
                        <li><a className="dropdown-item pe-5" href="venue_event_detail_view.html">Venue Event Detail View</a></li>
                      </ul>
                    </li>
                    <li><a className="dropdown-item" href="booking_confirmed.html">Booking Confirmed</a></li>
                    <li><a className="dropdown-item" href="attendee_profile_view.html">Attendee Profile View</a></li>
                    <li><a className="dropdown-item" href="organiser_profile_view.html">Organiser Profile View</a></li>
                    <li><a className="dropdown-item" href="my_organisation_dashboard.html">Organization Dashboard</a></li>
                    <li><a className="dropdown-item" href="sell_tickets_online.html">Sell Tickets Online</a></li>
                    <li><a className="dropdown-item" href="refer_a_friend.html">Refer a Friend</a></li>
                    <li><a className="dropdown-item" href="term_and_conditions.html">Terms &amp; Conditions</a></li>
                    <li><a className="dropdown-item" href="privacy_policy.html">Privacy Policy</a></li>
                  </ul>
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
              <li className="dropdown account-dropdown">
                <a href="#" className="account-link" role="button" id="accountClick" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="./assets/images/profile-imgs/img-13.jpg" alt />
                  <i className="fas fa-caret-down arrow-icon" />
                </a>
                <ul className="dropdown-menu dropdown-menu-account dropdown-menu-end" aria-labelledby="accountClick">
                  <li>
                    <div className="dropdown-account-header">
                      <div className="account-holder-avatar">
                        <img src="./assets/images/profile-imgs/img-13.jpg" alt />
                      </div>
                      <h5>John Doe</h5>
                      <p>johndoe@example.com</p>
                    </div>
                  </li>
                  <li className="profile-link">
                    <a href="my_organisation_dashboard.html" className="link-item">My Organisation</a>
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
                  <li className="breadcrumb-item active" aria-current="page">Booking Confirmed</li>
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
          <div className="col-xl-5 col-lg-7 col-md-10">
            <div className="booking-confirmed-content">
              <div className="main-card">
                <div className="booking-confirmed-top text-center p_30">
                  <div className="booking-confirmed-img mt-4">
                    <img src="./assets/images/confirmed.png" alt />
                  </div>
                  <h4>Booking Confirmed</h4>
                  <p className="ps-lg-4 pe-lg-4">We are pleased to inform you that your reservation request has been received and confirmed.</p>
                  <div className="add-calender-booking">
                    <h5>Add</h5>
                    <a href="#" className="cb-icon"><i className="fa-brands fa-windows" /></a>
                    <a href="#" className="cb-icon"><i className="fa-brands fa-apple" /></a>
                    <a href="#" className="cb-icon"><i className="fa-brands fa-google" /></a>
                    <a href="#" className="cb-icon"><i className="fa-brands fa-yahoo" /></a>
                  </div>
                </div>
                <div className="booking-confirmed-bottom">
                  <div className="booking-confirmed-bottom-bg p_30">
                    <div className="event-order-dt">
                      <div className="event-thumbnail-img">
                        <img src="./assets/images/event-imgs/img-7.jpg" alt />
                      </div>
                      <div className="event-order-dt-content">
                        <h5>Tutorial on Canvas Painting for Beginners</h5>
                        <span>Wed, Jun 01, 2022 5:30 AM. Duration 1h</span>
                        <div className="buyer-name">John Doe</div>
                        <div className="booking-total-tickets">
                          <i className="fa-solid fa-ticket rotate-icon" />
                          <span className="booking-count-tickets mx-2">1</span>x Ticket
                        </div>
                        <div className="booking-total-grand">
                          Total : <span>$75.00</span>
                        </div>
                      </div>
                    </div>
                    <a href="invoice.html" className="main-btn btn-hover h_50 w-100 mt-5"><i className="fa-solid fa-ticket rotate-icon me-3" />View Ticket</a>
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
  <footer className="footer mt-auto">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-content">
              <h4>Company</h4>
              <ul className="footer-link-list">
                <li><a href="about_us.html" className="footer-link">About Us</a></li>
                <li><a href="help_center.html" className="footer-link">Help Center</a></li>
                <li><a href="faq.html" className="footer-link">FAQ</a></li>
                <li><a href="contact_us.html" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-content">
              <h4>Useful Links</h4>
              <ul className="footer-link-list">
                <li><a href="create.html" className="footer-link">Create Event</a></li>
                <li><a href="sell_tickets_online.html" className="footer-link">Sell Tickets Online</a></li>
                <li><a href="privacy_policy.html" className="footer-link">Privacy Policy</a></li>
                <li><a href="term_and_conditions.html" className="footer-link">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-content">
              <h4>Resources</h4>
              <ul className="footer-link-list">
                <li><a href="pricing.html" className="footer-link">Pricing</a></li>
                <li><a href="our_blog.html" className="footer-link">Blog</a></li>
                <li><a href="refer_a_friend.html" className="footer-link">Refer a Friend</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-content">
              <h4>Follow Us</h4>
              <ul className="social-links">
                <li><a href="#" className="social-link"><i className="fab fa-facebook-square" /></a>
                </li><li><a href="#" className="social-link"><i className="fab fa-instagram" /></a>
                </li><li><a href="#" className="social-link"><i className="fab fa-twitter" /></a>
                </li><li><a href="#" className="social-link"><i className="fab fa-linkedin-in" /></a>
                </li><li><a href="#" className="social-link"><i className="fab fa-youtube" /></a>
                </li></ul>
            </div>
            <div className="footer-content">
              <h4>Download Mobile App</h4>
              <div className="download-app-link">
                <a href="#" className="download-btn"><img src="./assets/images/app-store.png" alt /></a>
                <a href="#" className="download-btn"><img src="./assets/images/google-play.png" alt /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-copyright-text">
              <p className="mb-0">© 2024, <strong>Barren</strong>. All rights reserved. Powered by Gambolthemes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>



        </>
    )

}