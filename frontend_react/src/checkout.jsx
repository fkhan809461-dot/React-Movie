import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


export const BookNow = () => {


  

  // const [allDataArray, storeData] = useState([]);
  // const [errors, setNameError] = useState({});
  const { id } = useParams();

    const { state } = useLocation();
    const totalAmount = state?.totalAmount || 0;
    const eventId = state?.eventId || null;
  const selectedSeats = state?.selectedSeats || [];
  const userId = localStorage.getItem("user_id") || null;

  const navigate = useNavigate();

  useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {
    window.alert("Please login to continue with the payment process.");
    navigate('/Sign_in');
    //  return null;
  }

}, []);



	const [allDataArray, storeData] = useState({});


  const PaymentSubmit= () => {

 const booking_id     = 'BK-'  + Date.now() + '-' + Math.floor(Math.random() * 1000);
  const transaction_id = 'TXN-' + Date.now() + '-' + Math.floor(Math.random() * 9999);


  const paymentData = {
    ...allDataArray,

    userId,
    booking_id,
    transaction_id,
    payment_method: 'card',
    status: 'success',
    amount: totalAmount,
    event_id: eventId
    // eventId
    // created_at: new Date().toISOString(),
  };

// console.log(paymentData); 


fetch(`${import.meta.env.VITE_Bankend}/paymentVerify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })
        .then((res) => res.json())
        .then((data) => {
        // console.log(data);
    
        if ((data.status === 'success')) {
              
          fetch(`${import.meta.env.VITE_Bankend}/saveBookingSeats`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        booking_id: booking_id,
        transaction_id: transaction_id,
        user_id: userId,
        seat_number: selectedSeats,
        eventId: eventId
      }),
      })
      // .then((res) => res.json())
      //   .then((data) => {
        // console.log(eventId);

          window.alert("Payment successful! Your booking is confirmed.");
        navigate('/book_confromed', { state: { event_id: eventId, amount: totalAmount,transactionId: transaction_id } });
        }
        else {
          window.alert("Payment failed! Please try again.");
        }
        // console.log(data);
        })

// console.log(paymentData); 
    }



  return (
    <>

      <div>

        <Header />

        {/* Header End*/}
        {/* Body Start*/}
        <div className="wrapper">
         
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
                        
                        <h4>Ticket Amount : AUD ${totalAmount}</h4>

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
                            <button className="main-btn btn-hover h_50 w-100 mt-5" type="button" onClick={() => PaymentSubmit()}>Confirm & Pay</button>
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
                          <div className="order-number">{selectedSeats.length}</div>
                        </div>
                        <div className="order-total-dt">
                          <div className="order-text">Sub Total</div>
                          <div className="order-number">₹{totalAmount}</div>
                        </div>
                        <div className="divider-line" />
                        <div className="order-total-dt">
                          <div className="order-text">Total</div>
                          <div className="order-number ttl-clr">₹{totalAmount}</div>
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


