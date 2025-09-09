import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const AllEvent = () => {

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
                        <div className="col-lg-5 col-md-12">
                          <div className="form-group">
                            <select className="selectpicker" data-width="100%" data-size={5} data-live-search="true">
                              <option value={0} selected>All</option>
                              <option value={0}>Arts</option>
                              <option value={0}>Business</option>
                              <option value={0}>Coaching and Consulting</option>
                              <option value={0}>Community and Culture</option>
                              <option value={0}>Education and Training</option>
                              <option value={0}>Family and Friends</option>
                              <option value={0}>Fashion and Beauty</option>
                              <option value={0}>Film and Entertainment</option>
                              <option value={10}>Food and Drink</option>
                              <option value={11}>Free</option>
                              <option value={12}>Health and Wellbeing</option>
                              <option value={13}>Hobbies and Interest</option>
                              <option value={14}>Music and Theater</option>
                              <option value={15}>Religion and Spirituality</option>
                              <option value={16}>Science and Technology</option>
                              <option value={17}>Sports and Fitness</option>
                              <option value={18}>Travel and Outdoor</option>
                              <option value={19}>Visual Arts</option>
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
                  <div className="main-title">
                    <h3 className="all event-box" style={{ display: 'block' }}>All Events</h3>
                    <h3 className="today event-box">Today</h3>
                    <h3 className="tomorrow event-box">Tomorrow</h3>
                    <h3 className="thisWeek event-box">This Week</h3>
                    <h3 className="thisWeekend event-box">This Weekend</h3>
                    <h3 className="nextWeekend event-box">Next Weekend</h3>
                    <h3 className="thisMonth event-box">This Month</h3>
                    <h3 className="nextMonth event-box">Next Month</h3>
                    <h3 className="thisYear event-box">This Year</h3>
                    <h3 className="nextYear event-box">Next Year</h3>
                  </div>
                  <div className="event-filter-items">
                    <div className="featured-controls">
                      <div className="filter-tag mb-3">
                        <label><input type="radio" name="colorRadio" defaultValue="all" defaultChecked /><span>All</span></label>
                        <label><input type="radio" name="colorRadio" defaultValue="today" /><span>Today</span></label>
                        <label><input type="radio" name="colorRadio" defaultValue="tomorrow" /><span>Tomorrow</span></label>
                        <label><input type="radio" name="colorRadio" defaultValue="thisWeek" /><span>This Week</span></label>
                        <label><input type="radio" name="colorRadio" defaultValue="thisWeekend" /><span>This Weekend</span></label>
                        <label><input type="radio" name="colorRadio" defaultValue="nextWeekend" /><span>Next Weekend</span></label>
                        <label><input type="radio" name="colorRadio" defaultValue="thisMonth" /><span>This Month</span></label>
                        <label><input type="radio" name="colorRadio" defaultValue="nextMonth" /><span>Next Month</span></label>
                        <label><input type="radio" name="colorRadio" defaultValue="thisYear" /><span>This Year</span></label>
                        <label><input type="radio" name="colorRadio" defaultValue="nextYear" /><span>Next Year</span></label>
                      </div>
                      <div className="all event-box" style={{ display: 'block' }}>
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-1.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">A New Way Of Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $100.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />15 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 3.45 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-2.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Earrings Workshop with Bronwyn David</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $75.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />6 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />30 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sat, 11.20 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />2h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-3.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Spring Showcase Saturday April 30th 2022 at 7pm</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">Free*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />1 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />3h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-4.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Shutter Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $85.00</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />7 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />1 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-5.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $41.50*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />27 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 12.00 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />5h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Step Up Open Mic Show</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $200.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />30 Jun</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Thu, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-7.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Tutorial on Canvas Painting for Beginners</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $50.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />17 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />17 Jul</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-8.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Trainee Program on Leadership' 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $120.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />7 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />20 Jul</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Wed, 11.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />12h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="today event-box">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-1.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">A New Way Of Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $100.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />15 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 3.45 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-5.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $41.50*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />15 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 12.00 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />5h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Step Up Open Mic Show</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $200.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />15 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Thu, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-7.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Tutorial on Canvas Painting for Beginners</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $50.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />17 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />15 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tomorrow event-box">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-5.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $41.50*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />16 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 12.00 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />5h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Step Up Open Mic Show</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $200.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />16 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Thu, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-7.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Tutorial on Canvas Painting for Beginners</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $50.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />17 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />16 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-8.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Trainee Program on Leadership' 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $120.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />7 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />16 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Wed, 11.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />12h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="thisWeek event-box">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-1.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">A New Way Of Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $100.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />15 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 3.45 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-2.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Earrings Workshop with Bronwyn David</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $75.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />6 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />16 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sat, 11.20 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />2h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-3.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Spring Showcase Saturday April 30th 2022 at 7pm</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">Free*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />18 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />3h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-4.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Shutter Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $85.00</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />7 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />21 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-5.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $41.50*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />21 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 12.00 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />5h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Step Up Open Mic Show</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $200.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />22 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Thu, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-7.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Tutorial on Canvas Painting for Beginners</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $50.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />17 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />22 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="thisWeekend event-box">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-1.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">A New Way Of Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $100.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />22 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 3.45 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-2.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Earrings Workshop with Bronwyn David</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $75.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />6 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />23 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sat, 11.20 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />2h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-3.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Spring Showcase Saturday April 30th 2022 at 7pm</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">Free*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />24 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />3h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-4.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Shutter Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $85.00</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />7 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />24 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="nextWeekend event-box">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-1.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">A New Way Of Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $100.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />25 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 3.45 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-2.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Earrings Workshop with Bronwyn David</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $75.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />6 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />26 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sat, 11.20 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />2h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Step Up Open Mic Show</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $200.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />27 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Thu, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-7.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Tutorial on Canvas Painting for Beginners</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $50.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />17 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />28 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-8.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Trainee Program on Leadership' 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $120.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />7 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />28 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Wed, 11.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />12h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="thisMonth event-box">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-1.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">A New Way Of Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $100.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />15 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 3.45 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-2.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Earrings Workshop with Bronwyn David</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $75.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />6 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />15 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sat, 11.20 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />2h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-3.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Spring Showcase Saturday April 30th 2022 at 7pm</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">Free*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" /> 16 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />3h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-4.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Shutter Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $85.00</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />7 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />18 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-5.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $41.50*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />19 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 12.00 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />5h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Step Up Open Mic Show</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $200.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />21 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Thu, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-7.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Tutorial on Canvas Painting for Beginners</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $50.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />17 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />22 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-8.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Trainee Program on Leadership' 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $120.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />7 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />25 Jul</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Wed, 11.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />12h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="nextMonth event-box">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-1.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">A New Way Of Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $100.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />1 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 3.45 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-5.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $41.50*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />5 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 12.00 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />5h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Step Up Open Mic Show</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $200.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />15 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Thu, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-7.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Tutorial on Canvas Painting for Beginners</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $50.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />17 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />20 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-8.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Trainee Program on Leadership' 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $120.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />7 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />27 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Wed, 11.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />12h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="thisYear event-box">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-1.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">A New Way Of Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $100.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />15 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 3.45 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-2.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Earrings Workshop with Bronwyn David</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $75.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />6 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />30 Apr</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sat, 11.20 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />2h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-3.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Spring Showcase Saturday April 30th 2022 at 7pm</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">Free*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />1 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />3h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-4.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Shutter Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $85.00</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />7 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />6 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-5.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Friday Night Dinner at The Old Station May 27 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $41.50*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />27 May</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 12.00 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />5h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Step Up Open Mic Show</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $200.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />30 Jun</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Thu, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-7.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Tutorial on Canvas Painting for Beginners</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $50.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />17 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />17 Jul</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-8.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Trainee Program on Leadership' 2022</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $120.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />7 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />20 August</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Wed, 11.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />12h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="nextYear event-box">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-1.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">A New Way Of Life</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $100.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />5 Jan 2023</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Fri, 3.45 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-2.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Earrings Workshop with Bronwyn David</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $75.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />6 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />12 Apr 2023</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sat, 11.20 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />2h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="venue_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="venue_event_detail_view.html" className="event-title">Step Up Open Mic Show</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $200.00*</span>
                                  <span className="remaining" />
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />5 Jun 2023</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Thu, 4.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="main-card mt-4">
                              <div className="event-thumbnail">
                                <a href="online_event_detail_view.html" className="thumbnail-img">
                                  <img src="./assets/images/event-imgs/img-7.jpg" alt />
                                </a>
                                <span className="bookmark-icon" title="Bookmark" />
                              </div>
                              <div className="event-content">
                                <a href="online_event_detail_view.html" className="event-title">Tutorial on Canvas Painting for Beginners</a>
                                <div className="duration-price-remaining">
                                  <span className="duration-price">AUD $50.00*</span>
                                  <span className="remaining"><i className="fa-solid fa-ticket fa-rotate-90" />17 Remaining</span>
                                </div>
                              </div>
                              <div className="event-footer">
                                <div className="event-timing">
                                  <div className="publish-date">
                                    <span><i className="fa-solid fa-calendar-day me-2" />9 Jul 2023</span>
                                    <span className="dot"><i className="fa-solid fa-circle" /></span>
                                    <span>Sun, 5.30 PM</span>
                                  </div>
                                  <span className="publish-time"><i className="fa-solid fa-clock me-2" />1h</span>
                                </div>
                              </div>
                            </div>
                          </div>
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