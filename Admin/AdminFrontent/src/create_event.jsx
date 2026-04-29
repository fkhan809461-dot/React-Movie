import { Navbar } from "./components/NavBar"
import { AdminHeader } from "./components/header"

import { useState } from "react"
import { useEffect } from "react"




export const CreatesEvent = () => {
    
    const [venues, setVenues] = useState([]);
    const [allData, setData] = useState({});
    const [errors, setErrors] = useState({});


          useEffect(() => {
  fetch("http://localhost:8080/getAllVenus")
    .then((res) => res.json())
    .then((data) => {
        // alert('Venues fetched successfully!')
      console.log(data);

      setVenues(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);


    const VenusPageData = (e) => {

    const { name, value } = e.target;
  setData((prev) => ({
    ...prev,
    [name]: value,
  }))


  }



    
    const HandleEvent = async () => {
      try {
        const res = await fetch('http://localhost:8080/createEvent', {
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
     alert('Event created successfully!')
      }
    
      setData({
      title: "",
      description: "",
      category: "",
      venue_id: ""
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
        <div>
            <AdminHeader />

        <Navbar/>
   
            <div className="wrapper">
                <div className="breadcrumb-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-10">
                                <div className="barren-breadcrumb">
                         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="event-dt-block p-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="main-title text-center">
                                    <h3>Create Event</h3>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-9 col-md-12">
                                <div className="wizard-steps-block">
                                    <div id="add-event-tab" className="step-app">

                                        <div className="step-content">
                                            <div className="step-tab-panel step-tab-info active" id="tab_step1">
                                                <div className="tab-from-content">
                                                    <div className="main-card">
                                                        {/* <div className="bp-title">
                          <h4><i className="fa-solid fa-circle-info step_icon me-3" />Details</h4>
                        </div> */}
                                                        <div className="p-4 bp-form main-form">
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12">

                                                                    <div className="form-group pt_30 pb-2">
                                                                        <label className="form-label fs-16">Add a new event? *</label>
                                                                        <div className="stepper-data-set">
                                                                            <div className="content-holder template-selector">
                                                                                <div className="row g-4">
                                                                                    <div className="col-md-12">
                                                                                        <div className="venue-event">

                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <div className="form-group mt-1">
                             <label className="form-label fs-6">Title*</label>
                              <input className="form-control h_50" onChange={VenusPageData} value={allData.title || ""} name="title" type="text" placeholder />

 {errors?.title && (
      <small style={{ color: "red" }}>{errors.title}</small>
    )}

                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <div className="form-group mt-1">
                             <label className="form-label fs-6">Description</label>
                             <input className="form-control h_50" onChange={VenusPageData} value={allData.description || ""} name="description"  type="text" placeholder />

 {errors?.description && (
      <small style={{ color: "red" }}>{errors.description}</small>
    )}


                                                                                  </div>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <div className="form-group mt-1">
                              <label className="form-label fs-6">Category</label>
                            <input className="form-control h_50" onChange={VenusPageData} value={allData.category || ""} name="category" type="text" placeholder />
                             {errors?.category && (
      <small style={{ color: "red" }}>{errors.category}</small>
    )}

                                                                                        </div>
                                                                                    </div>
                                                                                              <div className="col-md-6">
                                                                                        <div className="form-group mt-1">
                          <label className="form-label fs-6">Event Location</label>
                           {/* <input className="form-control h_50" onChange={VenusPageData} value={allData.venue_id || ""} name="venue_id" type="text" placeholder />  */}

        <select
    className="form-control h_50"
    name="venue_id"
    onChange={VenusPageData}
    value={allData.venue_id || ""}
  >
    <option className="form-control h_50 " disabled value="">Select Location</option>

    {venues.map((item) => (
    <option       style={{ color: "black", backgroundColor: "white" }} key={item.id} value={item.id}>
      {item.name}/{item.city}/({item.state})
    </option>
  ))}


 {errors?.venue_id && (
      <small style={{ color: "red" }}>{errors.venue_id}</small>
    )}

    {/* <option value="2">Delhi</option>
    <option value="3">Mumbai</option>
    <option value="4">Bangalore</option> */}
  </select>





                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-lg-6 col-md-12">

<button onClick={() => HandleEvent()} class="create-btn btn-hover" ><span>Add Event</span></button>

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
            {/* Body End*/}
            {/* Footer Start*/}

            {/* Footer End*/}
            {/* Mirrored from www.gambolthemes.net/html-items/barren-html/disable-demo-link/create_venue_event.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 May 2025 16:41:51 GMT */}
        </div>
    )

}