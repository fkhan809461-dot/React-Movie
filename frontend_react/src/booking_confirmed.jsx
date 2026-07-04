import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { data, useNavigate, useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
// import { Header } from "./components/Header";


export const BookConfromed= () => {

const userId = localStorage.getItem("user_id");
  const [eventName, setEventName] = useState(null); 
    const location = useLocation();
    const { event_id, transactionId, amount } = location.state || {};
    const navigate = useNavigate();     
     
     
 
     
    useEffect(() => {
        if (event_id && userId) {
            fetch(`${import.meta.env.VITE_Bankend}/getEventById/${event_id}/${userId}`)
                .then(res => res.json())
                .then(data => {
                    console.log("Event Name:", data.data);
                    setEventName(data.data);
                })
                .catch(err => console.error("Error:", err));
        }
    }, [event_id]);

console.log("Event Name in JSX:", eventName);




const HandelNavigationInvice = () => {
        const total_tickets = eventName?.total_tickets; 
        console.log("Navigating with tickets:", total_tickets);

        navigate('/invoice', { 
            state: { 
                event_id, 
                transactionId, 
                amount, 
                total_tickets,
                title: eventName?.title,
                shows_time: eventName?.shows_time,
            }
        });
    };


 
    return (
        <>
       

<div>

<Header />
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
                        <h5>{eventName?.title}</h5>
                        <span>{eventName?.shows_time}</span>
                        {/* <div className="buyer-name">John Doe</div> */}
                        <div className="booking-total-tickets">
                          <i className="fa-solid fa-ticket rotate-icon" />
                          <span className="booking-count-tickets mx-2">{eventName?.total_tickets}</span>x Ticket
                        </div>
                        <div className="booking-total-grand">
                          Total : <span>{amount}</span>
                        </div>
                      </div>
                    </div>
                    <a onClick={() => HandelNavigationInvice()} className="main-btn btn-hover h_50 w-100 mt-5"><i className="fa-solid fa-ticket rotate-icon me-3" />View Ticket</a>
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