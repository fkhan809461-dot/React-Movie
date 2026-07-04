import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react"
import { useEffect } from "react"

export const AllEvent = () => {


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

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleString('en-GB', { day: '2-digit' }),
    month: d.toLocaleString('en-GB', { month: 'short' }),
    weekday: d.toLocaleString('en-GB', { weekday: 'short' }),
    time: d.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
  };
};



  return (
    <>

      <div>
        <Header />

        {/* Header End*/}

        {/* Body Start*/}

        <div className="wrapper">
          <div className="hero-banner">
            <div className="container">



              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-8 col-md-10">
                  <div className="hero-banner-content">
                    <h2>Discover Events For All The Things You Love</h2>

                    <div className="search-form main-form">
                      <div className="row g-3">
                        <div className="col-lg-5 col-md-12">
                          <div className="form-group search-category">
                            <select className="selectpicker" data-width="100%" data-size={5}>
                              <option value="browse_all" data-icon="fa-solid fa-tower-broadcast" selected>Browse All</option>

                              <option value="online_events" data-icon="fa-solid fa-video">Online Events</option>

                              <option value="venue_events" data-icon="fa-solid fa-location-dot">Venue Events</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-2 col-md-12">
                          <a href="#" className="main-btn btn-hover w-100">Find</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="explore-events p-80">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="event-filter-items">
                    <div className="featured-controls">
                      <div className="filter-tag mb-3">
                        <label><input type="radio" name="colorRadio" defaultValue="all" defaultChecked />
<span>All</span></label>

                        <label><input type="radio" name="colorRadio" defaultValue="today" />
<span>Today</span></label>

                        <label><input type="radio" name="colorRadio" defaultValue="tomorrow" />
<span>Tomorrow</span></label>

                        <label><input type="radio" name="colorRadio" defaultValue="thisWeek" />
<span>This Week</span></label>

                        <label><input type="radio" name="colorRadio" defaultValue="thisWeekend" />
<span>This Weekend</span></label>

                        <label><input type="radio" name="colorRadio" defaultValue="nextWeekend" />
<span>Next Weekend</span></label>

                        <label><input type="radio" name="colorRadio" defaultValue="thisMonth" />
<span>This Month</span></label>

                        <label><input type="radio" name="colorRadio" defaultValue="nextMonth" />
<span>Next Month</span></label>

                        <label><input type="radio" name="colorRadio" defaultValue="thisYear" />
<span>This Year</span></label>

                        <label><input type="radio" name="colorRadio" defaultValue="nextYear" />
<span>Next Year</span></label>
                      </div>

                      <div className="all event-box" style={{ display: 'block' }}>



                 <div className="row">
  {EventsFetch.map((item, index) => {
    const { day, month, weekday, time } = formatDate(item.start_date);
    return (
      <div key={item.id || index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div className="main-card mt-4">
          <div className="event-thumbnail">
            <a href="venue_event_detail_view.html" className="thumbnail-img">
              <img src={`http://localhost:8080/uploads/events/${item.image}`} alt />
            </a>

            <span className="bookmark-icon" title="Bookmark" />
          </div>

          <div className="event-content">
            <a className="event-title">{item.title}</a>

            <div className="duration-price-remaining">
              <span className="duration-price">{item.category}</span>

              <span className="remaining" />
            </div>

            <div className="duration-price-remaining">
              <span className="duration-price">{item.description}</span>

              <span className="remaining" />
            </div>
          </div>

          <div className="event-footer">
            <div className="event-timing">
              <div className="publish-date">
                <span><i className="fa-solid fa-calendar-day me-2" />
{day} 
{month}</span>

                <span className="dot"><i className="fa-solid fa-circle" /></span>

                <span>{weekday}, 
{time}</span>
              </div>

              <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

                      </div>                    

                      <div className="browse-btn">
                        <a href="#" className="main-btn btn-hover ">No More Event</a>
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