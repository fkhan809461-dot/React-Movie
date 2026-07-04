import { Navbar } from "./components/NavBar"
import { AdminHeader } from "./components/header"

import { useState } from "react"
import { useEffect } from "react"




export const CreatesEvent = () => {

  const [venues, setVenues] = useState([]);

  const [allData, setData] = useState({
    title: "",
    description: "",
    category: "",
    venue_id: "",
    start_date: "",
    image: null,
  });

  const [errors, setErrors] = useState({});


  // get venues
  useEffect(() => {

    fetch("http://localhost:8080/getAllVenus")
      .then((res) => res.json())
      .then((data) => setVenues(data.data))
      .catch((err) => console.log(err));

  }, []);


  // input handler
  const VenusPageData = (e) => {

    const { name, value, files, type } = e.target;

    setData({
      ...allData,

      [name]:
        type === "file"
          ? files[0]
          : value,
    });
  };


  // submit form
  const HandleEvent = async () => {

    const formData = new FormData();

    Object.keys(allData).forEach((key) => {
      formData.append(key, allData[key]);
    });

    try {

      const res = await fetch(
        "http://localhost:8080/createEvent",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      // validation errors
      if (data.status === "error") {

        setErrors(data.errors);

        return;
      }

      // success
      alert("Event created successfully!");

      // reset form
      setData({
        title: "",
        description: "",
        category: "",
        venue_id: "",
        start_date: "",
        image: null,
      });

      // clear errors
      setErrors({});

    } catch (error) {

      console.log(error);

    }
  };

// };

    
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
                              <input className="form-control h_50" onChange={VenusPageData} value={allData.title || ""} name="title" type="text" placeholder="Enter event title" />

 {errors?.title && (
      <small style={{ color: "red" }}>{errors.title}</small>
    )}

                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <div className="form-group mt-1">
                             <label className="form-label fs-6">Description</label>
                             <input className="form-control h_50" onChange={VenusPageData} value={allData.description || ""} name="description"  type="text" placeholder="Enter event description" />

 {errors?.description && (
      <small style={{ color: "red" }}>{errors.description}</small>
    )}


                                                                                  </div>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <div className="form-group mt-1">
                              <label className="form-label fs-6">Category</label>
                            <input className="form-control h_50" onChange={VenusPageData} value={allData.category || ""} name="category" type="text" placeholder="Enter event category" />
                             {errors?.category && (
      <small style={{ color: "red" }}>{errors.category}</small>
    )}

                                                                                        </div>
                                                                                    </div>
                                                                                              <div className="col-md-6">
                                                                                        <div className="form-group mt-1">
                          <label className="form-label fs-6">Event Location</label>

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

  
  </select>





                                                                                        </div>
                                                                                    </div>



      <div className="col-md-6">
                                                                                        <div className="form-group mt-1">
                              <label className="form-label fs-6">Event Time </label>
                            <input className="form-control h_50" onChange={VenusPageData} value={allData.start_date || ""} name="start_date" type="datetime-local" placeholder="Select event time" />
                             {errors?.start_date && (
      <small style={{ color: "red" }}>{errors.start_date}</small>
    )}

                                                                                        </div>
                                                                                    </div>




                  <div className="col-md-6">
                                                                                        <div className="form-group mt-1">
                              <label className="form-label fs-6">Uplode Event Poster</label>
                            <input onChange={VenusPageData}  name="image" type="file" placeholder="Upload event poster" />
                             {errors?.image && (
      <small style={{ color: "red" }}>{errors.image}</small>
    )}

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