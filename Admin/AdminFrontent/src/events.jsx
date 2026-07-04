import { use } from "react"
import { AdminHeader } from "./components/header"
import { Navbar } from "./components/NavBar"

import { useState } from "react"

import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export const Events = () => {
  
  const [EventsFetch, setEvents] = useState([]);

            useEffect(() => {
  fetch("http://localhost:8080/getAllEvent")
    .then((res) => res.json())
    .then((data) => {
        // alert('Venues fetched successfully!')
      console.log(data);

      setEvents(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);



  return (
    <>
      <div>
        <div>
          <AdminHeader />

          <Navbar />

          {/* Left Sidebar End */}
          {/* Body Start */}
          <div className="wrapper wrapper-body">
            <div className="dashboard-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-main-title">
                      <h3><i className="fa-solid fa-calendar-days me-3" />Events</h3>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="main-card mt-5">
                      <div className="dashboard-wrap-content p-4">
                        <h5 className="mb-4">Events (1)</h5>
                        <div className="d-md-flex flex-wrap align-items-center">
                          <div className="dashboard-date-wrap">
                            <div className="form-group">
                              <div className="relative-input position-relative">
                                <input className="form-control h_40" type="text" placeholder="Search by event name, status" defaultValue />
                                <i className="uil uil-search" />
                              </div>
                            </div>
                          </div>
                          <div className="rs ms-auto mt_r4">
                            <div className="nav custom2-tabs btn-group" role="tablist">
                              <button className="tab-link active" data-bs-toggle="tab" data-bs-target="#all-tab" type="button" role="tab" aria-controls="all-tab" aria-selected="true">All Event (<span className="total_event_counter">1</span>)</button>
                              <button className="tab-link" data-bs-toggle="tab" data-bs-target="#online-tab" type="button" role="tab" aria-controls="online-tab" aria-selected="false">Online Event (<span className="total_event_counter">0</span>)</button>
                              <button className="tab-link" data-bs-toggle="tab" data-bs-target="#venue-tab" type="button" role="tab" aria-controls="venue-tab" aria-selected="false">Venue Event (<span className="total_event_counter">1</span>)</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
            


                      {EventsFetch.map((item, index) => (   

  //                       <div key={index}>
  //   <h1>{item.status}</h1>
  //   <h5>{item.venue_name}</h5>
  // </div>

             


                   

                    <div className="event-list">
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="all-tab" role="tabpanel">
                          <div className="main-card mt-4">
                            <div className="contact-list">
                              <div className="card-top event-top p-4 align-items-center top d-md-flex flex-wrap justify-content-between">
                                <div className="d-md-flex align-items-center event-top-info">
                                  <div className="card-event-img">
                                    <img src="images/event-imgs/img-7.jpg" alt />
                                  </div>
                                  <div className="card-event-dt">
                                    <h5>{item.title}</h5>
                                  </div>
                                </div>
                             <div className="dropdown">
  <button
    className="option-btn"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <i className="fa-solid fa-ellipsis-vertical" />
  </button>

  <ul className="dropdown-menu dropdown-menu-end">
    <li>
      <button className="dropdown-item">
        <i className="fa-solid fa-gear me-3" /> Manage
      </button>
    </li>
    <li>
      <button className="dropdown-item">
        <i className="fa-solid fa-eye me-3" /> Preview Event
      </button>
    </li>
    <li>
      <button className="dropdown-item">
        <i className="fa-solid fa-clone me-3" /> Duplicate
      </button>
    </li>
    <li>
      <button className="dropdown-item text-danger">
        <i className="fa-solid fa-trash-can me-3" /> Delete
      </button>
    </li>
  </ul>
</div>
                              </div>
                              <div className="bottom d-flex flex-wrap justify-content-between align-items-center p-4">
                                <div className="icon-box ">
                                  <span className="icon">
                                    <i className="fa-solid fa-location-dot" />
                                  </span>
                                  <p>Status</p>
                                  <h6 className="coupon-status">Publish</h6>
                                </div>
                                 
                                <div className="icon-box">
                                  <span className="icon">
                                    <i className="fa-solid fa-calendar-days" />
                                  </span>
                                  <p>Starts on</p>
                                  <h6 className="coupon-status">30 Jun, 2022 10:00 AM</h6>
                                </div>
                                <div className="icon-box">
                                  <span className="icon">
                                    <i className="fa-solid fa-ticket" />
                                  </span>
                                  <p>Ticket</p>
                                  <h6 className="coupon-status">250</h6>
                                </div>
                                <div className="icon-box">
                                  <span className="icon">
                                    <i className="fa-solid fa-tag" />
                                  </span>
                                  <p>Tickets sold</p>
                                  <h6 className="coupon-status">20</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                             ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Body End */}
          {/* Mirrored from www.gambolthemes.net/html-items/barren-html/disable-demo-link/my_organisation_dashboard_events.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 May 2025 16:42:38 GMT */}
        </div>


      </div>
    </>
  )
}

