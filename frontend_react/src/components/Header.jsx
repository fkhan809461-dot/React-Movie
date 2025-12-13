import { data, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export const Header = () => {

    const navigateNextPage = useNavigate();

    const MoveIndexPage = () => {
        navigateNextPage('/')
    }
    const userEmail = localStorage.getItem("userName");
    const userName = localStorage.getItem("userEmail");

    // consle.log(userEmail);

    const LogOutUser = () => {

        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");

        navigateNextPage('/Sign_in');

    }


    const SignUp= () => {
         navigateNextPage('/Sign_in');
    }



    const [Datasession, LoginesDetails] = useState('');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_Bankend}/getSessionUser`, {
            method: "GET",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) =>

                LoginesDetails(data),
            )
    }, [])


    //    console.log("Session Data:", Datasession);

    return (

        <>


            <header className="header">
                <div className="header-inner">
                    <nav className="navbar navbar-expand-lg bg-barren barren-head navbar fixed-top justify-content-sm-start pt-0 pb-0">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span className="navbar-toggler-icon">
                                    <i className="fa-solid fa-bars" />
                                </span>
                            </button>
                            <a className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto" onClick={() => MoveIndexPage()} >
                                <div className="res-main-logo">
                                    <img src="./assets/images/logo-icon.svg" />
                                </div>
                                <div className="main-logo" id="logo">
                                    <img src={logo} />
                                    <img className="logo-inverse" src="./assets/images/dark-logo.svg" />
                                </div>
                            </a>
                            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <div className="offcanvas-logo" id="offcanvasNavbarLabel">
                                        <img src="./assets/images/logo-icon.svg" />
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
                                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/all_event" role="button" aria-expanded="false">
                                                All Event
                                            </Link>
                                            {/* <ul className="dropdown-menu dropdown-submenu">
                                                <li><a className="dropdown-item" href="explore_events.html">Explore Events</a></li>
                                                <li><a className="dropdown-item" href="venue_event_detail_view.html">Venue Event Detail View</a></li>
                                                <li><a className="dropdown-item" href="online_event_detail_view.html">Online Event Detail View</a></li>
                                            </ul> */}
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact_us">Contact us</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/about_us" aria-expanded="false">
                                                About
                                            </Link>
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
                                            <img src="/assets/images/profile-imgs/img-13.jpg" />
                                            <i className="fas fa-caret-down arrow-icon" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-account dropdown-menu-end" aria-labelledby="accountClick">
                                            <li>
                                                <div className="dropdown-account-header">
                                                    <div className="account-holder-avatar">
                                                        <img src="/assets/images/profile-imgs/img-13.jpg" />
                                                    </div>
                                                    <h5>{userEmail}</h5>
                                                    <p>{userName}</p>
                                                </div>
                                            </li>

 
                                               
                                            {userName ? (




                                                <li className="profile-link">
                                                    <a href="my_organisation_dashboard.html" className="link-item">My Organisation</a>
                                                    <Link to="/profile_user" className="link-item">My Profile</Link>
                                                    <a onClick={() => LogOutUser()} className="link-item">Sign Out</a>
                                                </li>

                                            ) :


                                                <li className="profile-link">
                                                    <a href="my_organisation_dashboard.html" className="link-item">My Organisation</a>
                                                    <Link to="/profile_user" className="link-item">My Profile</Link>
                                                    <a role="button" onClick={()=> SignUp()} className="link-item">Sign up</a>
                                                </li>

                                            }


                                        </ul>
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