import { AdminHeader } from "./components/header"
// import {AdminFooter} from "./components"
import { Navbar } from "./components/NavBar"
import { useState } from "react"




export const CreateVenues = () =>{

  const [allData, setData] = useState({});
  const [errors, setErrors] = useState({});





  
  	  const VenusPageData = (e) => {

    const { name, value } = e.target;
  setData((prev) => ({
    ...prev,
    [name]: value,
  }))


  }




  const HandleEvent = async () => {
  try {
    const res = await fetch('http://localhost:8080/createVenus', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    });

    const data = await res.json();
    console.log(data.errors);

     if (data.status === "error") {
    setErrors(data.errors); 
    return;
  }

    if (data.status === "success") {
 alert('Venue created successfully!')
  }

  setData({
  name: "",
  address: "",
  state: "",
  city: ""
});
  


  if (data.status !== "error") {
  setData({});    
  setErrors({});   
}
  } 
  
  catch (error) {
    // This will show the REAL error message
    console.error("Error details:", error);
  }

  console.log(allData);



};


    return (
        <>
        <AdminHeader/>
   
        <Navbar/>

<div>

  {/* Create Single Ticket Model End*/}
  {/* Create Group Ticket Model Start*/}
  <div className="modal fade" id="groupTicketModal" tabIndex={-1} aria-labelledby="groupTicketModalLabel" aria-hidden="false">
  {/* {successMsg && (
  <div className="alert alert-success">{successMsg}</div>
)} */}
  </div>

  <div className="wrapper">
 
    <div className="event-dt-block p-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <div className="main-title text-center">
              <h3>Create Venue Event</h3>
            </div>
          </div>
          <div className="col-xl-8 col-lg-9 col-md-12">
            <div className="wizard-steps-block">
              <div id="add-event-tab" className="step-app">
   
                <div className="step-content">
                  <div className="step-tab-panel step-tab-info active" id="tab_step1"> 
                    <div className="tab-from-content">
                      <div className="main-card">
                     
                        <div className="p-4 bp-form main-form">
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                                           
                              <div className="form-group pt_30 pb-2">
                                <label className="form-label fs-16">Where is your event taking place? *</label>
                                <div className="stepper-data-set">
                                  <div className="content-holder template-selector">
                                    <div className="row g-4">
                                      <div className="col-md-12">
                                        <div className="venue-event">
                                          <div className="map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d27382.59422947023!2d75.84077125074462!3d30.919535510612153!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1534312417365" style={{border: 0}} allowFullScreen />	
                                          </div>
                                        </div>
                                      </div>



                                      <div className="col-md-12">
                                        <div className="form-group mt-1">
                                          <label className="form-label fs-6">Venue*</label>
                                          <input name='name' className="form-control h_50" onChange={VenusPageData} type="text"   value={allData.name || ""}   placeholder="Enter Venue Name" />
                                              {errors?.name && (
      <small style={{ color: "red" }}>{errors.name}</small>
    )}
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group mt-1">
                                          <label className="form-label fs-6">Address line 1*</label>
                                          <input className="form-control h_50" name="address" onChange={VenusPageData} type="text" value={allData.address || ""}   placeholder="Enter Address" />
                                            {errors?.address && (
      <small style={{ color: "red" }}>{errors.address}</small>
    )}
                                        </div>
                                      </div>
                            
                                      <div className="col-md-6">
                                        <div className="form-group mt-1">
                                          <label className="form-label">State*</label>
                                          <input className="form-control h_50" name="state" onChange={VenusPageData} type="text" value={allData.state || ""} placeholder="Enter State Name" />				
                                                                                      {errors?.state && (
      <small style={{ color: "red" }}>{errors.state}</small>
    )}
    																				
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-md-12">
                                        <div className="form-group mt-1">
                                          <label className="form-label">City/Suburb*</label>
                                          <input className="form-control h_50" name="city" onChange={VenusPageData} type="text" value={allData.city || ""} placeholder="Enter City/Suburb" />					
                                                                                      {errors?.city && (
      <small style={{ color: "red" }}>{errors.city}</small>
    )}																			
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-md-12">
                                        <div className="form-group mt-1">
                                          <label className="form-label">Zip/Post Code*</label>
                                          <input className="form-control h_50" name="post_code" onChange={VenusPageData} type="text" value={allData.post_code || ""} placeholder="Enter Zip/Post Code" />			
                                                                                      {errors?.post_code && (
      <small style={{ color: "red" }}>{errors.post_code}</small>
    )}
    																			
                                        </div>
                                      </div>

                                   <div className="col-lg-6 col-md-12">
                                        <div className="form-group mt-1">
                           
                                        {/* <button onClick={() => HandleEvent()} className="create-btn btn-hover"  >   <span>Create Event</span> </button>	 */}
                                        <button type="button" onClick={() => HandleEvent()} class="btn btn-success">Submit</button>																			
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
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>



        </>

    )

}