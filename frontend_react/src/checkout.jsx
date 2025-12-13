import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";



export const BookNow = () => {

  const [allDataArray, storeData] = useState([]);
  const [errors, setNameError] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();


  const signUpData = (e) => {

    const { name, value } = e.target;

    const removeSpace = value.replace(/^\s+/, "");

    storeData({ ...allDataArray, [name]: removeSpace });

    setNameError((prev) => ({
      ...prev,
      name: name === "name" && value.length < 5 ? "Must be at least 5 characters (numbers are not allowed)" : "",
      password: name === "password" && value.length < 6 ? "Password must be at least 6 characters (no spaces allowed)" : "",
    }))

  }


  const HandelEvent = () => {

    // console.log(allDataArray)

    fetch(`${import.meta.env.VITE_Bankend}/regestion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allDataArray),
    })
      .then((res) => res.json())
      .then((data) => {

        localStorage.setItem("userName", data.data.name);
        localStorage.setItem("userEmail", data.data.email);
       window.location.reload();
        navigate('/check_out');
      })

  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(allDataArray.email || "");
  const isPassword = (allDataArray.password || "").replace(/\s+/g, "");
  const isPasswordValid = isPassword.length >= 6;
  const isName = /^[A-Za-z]{3,}[A-Za-z ]{2,}$/.test(allDataArray.name || "");

  const isFormValid =
    isName &&
    // allDataArray.last_name &&
    isEmailValid &&
    isPasswordValid;


  const userEmail = localStorage.getItem("userName");
    
    useEffect(()=> {
      const userEmail = localStorage.getItem("userName");
      if(!userEmail){

        const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();

      }
      
  })



  const PaymentSubmit= () => {

    

  }



  if (!userEmail || userEmail == '') {
    return (
      <>
        <div>

          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true"   data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">

                </div>
                <div className="modal-body">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-10">
                      <div className="app-top-items">
                        <a href="index.html">
                          <div className="sign-logo" id="logo">
                            <img src="images/logo.svg" />
                            <img className="logo-inverse" src="images/dark-logo.svg" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-6 col-md-7">
                      <div className="registration">
                        <form>
                          <h2 className="registration-title">Sign up to Barren</h2>
                          <div className="row mt-3">
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group mt-4">                                                            <label className="form-label">First Name*</label>
                                <input className="form-control h_50" onChange={signUpData} required name="name" type="text" placeholder="Enter your first name" />
                              </div>
                              {/* {errors.name && <small style={{ color: "red" }}>{errors.name}</small>} */}
                            </div>

                            <div className="col-lg-12 col-md-12">
                              <div className="form-group mt-4">
                                <label className="form-label">Your Email*</label>
                                <input className="form-control h_50" name="email" type="email" required onChange={signUpData} placeholder="Enter your email " />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group mt-4">
                                <div className="field-password">
                                  <label className="form-label">Password*</label>
                                </div>
                                <div className="loc-group position-relative">
                                  <input className="form-control h_50" name="password" required onChange={signUpData} type="password" placeholder="Enter your password" />
                                  <span className="pass-show-eye"><i className="fas fa-eye-slash" /></span>
                                </div>
                                {/* {errors.password && <small style={{ color: "red" }}>{errors.password}</small>} */}
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <button
                                data-bs-dismiss="modal"
                                className="main-btn btn-hover w-100 mt-4" onClick={() => HandelEvent()} disabled={!isFormValid} style={{
                                  backgroundColor: isFormValid ? "#6ac045" : "#c7e6baff", // blue if valid, light grey if not
                                  cursor: isFormValid ? "pointer" : "not-allowed",
                                }} type="button">Sign Up</button>
                            </div>
                          </div>
                        </form>

                        <div className="divider">
                          <span>or</span>
                        </div>
                        <div className="social-btns-list mb-lg-5">

                        </div>
                        <div className="new-sign-link">
                          Already have an account?<a className="signup-link" href="sign_in.html">Sign In</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="modal-footer">

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )

  }





  return (
    <>

      <div>

        <Header />

        {/* Header End*/}
        {/* Body Start*/}
        <div className="wrapper">
          {/* <div className="breadcrumb-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-10">
                  <div className="barren-breadcrumb">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="explore_events.html">Explore Events</a></li>
                        <li className="breadcrumb-item"><a href="online_event_detail_view.html">Online Event Detail View</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="event-dt-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="main-title checkout-title">
                    <h3>Order Confirmation</h3>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-12 col-md-12">
                  <div className="checkout-block">
                    <div className="main-card">
                      <div className="bp-title">
                        <h4>Billing information</h4>
                      </div>
                 
                    </div>
                    <div className="main-card mt-5">
                      <div className="bp-title">
                        <h4>Ticket Amount : AUD $50.00</h4>
                      </div>
                      <div className="bp-content bp-form">
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group mt-4">
                              <label className="form-label">Card number*</label>
                              <input className="form-control h_50" type="text" placeholder />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="form-group mt-4">
                              <label className="form-label">Expiry date*</label>
                              <input className="form-control h_50" type="text" placeholder="MM/YY" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="form-group mt-4">
                              <label className="form-label">CVV*</label>
                              <input className="form-control h_50" type="text" placeholder  />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <button className="main-btn btn-hover h_50 w-100 mt-5" type="button" onclick={() => PaymentSubmit()}>Confirm &amp; Pay</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12">
                  <div className="main-card order-summary">
                    <div className="bp-title">
                      <h4>Billing information</h4>
                    </div>
                    <div className="order-summary-content p_30">
                      <div className="event-order-dt">
                        <div className="event-thumbnail-img">
                          <img src="./assets/images/event-imgs/img-7.jpg" />
                        </div>
                        <div className="event-order-dt-content">
                          <h5>Tutorial on Canvas Painting for Beginners</h5>
                          <span>Wed, Jun 01, 2022 5:30 AM</span>
                          <div className="category-type">Online Event</div>
                        </div>
                      </div>
                      <div className="order-total-block">
                        <div className="order-total-dt">
                          <div className="order-text">Total Ticket</div>
                          <div className="order-number">1</div>
                        </div>
                        <div className="order-total-dt">
                          <div className="order-text">Sub Total</div>
                          <div className="order-number">$50.00</div>
                        </div>
                        <div className="divider-line" />
                        <div className="order-total-dt">
                          <div className="order-text">Total</div>
                          <div className="order-number ttl-clr">AUD $50.00</div>
                        </div>
                      </div>
                      <div className="coupon-code-block">
                        <div className="form-group mt-4">
                          <label className="form-label">Coupon Code*</label>
                          <div className="position-relative">
                            <input className="form-control h_50" type="text" placeholder="Code" defaultValue />
                            <button className="apply-btn btn-hover" type="button">Apply</button>
                          </div>
                        </div>
                      </div>
                      <div className="confirmation-btn">
                        <button className="main-btn btn-hover h_50 w-100 mt-5" type="button" onclick="window.location.href='booking_confirmed.html'">Confirm &amp; Pay</button>
                        <span>Price is inclusive of all applicable GST</span>
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
        <Footer />
      </div>



    </>
  )

}