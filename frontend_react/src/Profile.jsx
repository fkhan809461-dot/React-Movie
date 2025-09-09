import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Profile_User = () => {
  return (


    <div>
      <div className="modal fade" id="FFModal" tabIndex={-1} aria-labelledby="FFModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="FFModalLabel">Following &amp; Followers</h5>
              <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
            </div>
            <div className="modal-body">
              <div className="model-content follow-people-content">
                <div className>
                  <ul className="nav nav-pills ff-tablist mb-2" role="tablist">
                    <li className="nav-item d-flex me-4">
                      <a className="nav-link px-0 pt-0 pb-3 active" id="pills-following-tab" data-bs-toggle="pill" href="#following" role="tab" aria-controls="following" aria-selected="true">Following <span className="following_count">(2)</span></a>
                    </li>
                    <li className="nav-item d-flex">
                      <a className="nav-link px-0 pt-0 pb-3" id="pills-followers-tab" data-bs-toggle="pill" href="#followers" role="tab" aria-controls="followers" aria-selected="false">Followers</a>
                    </li>
                  </ul>
                  <div className="tab-content mt-4">
                    <div className="tab-pane fade active show" id="following" role="tabpanel" aria-labelledby="pills-following-tab">
                      <div className="users-list min-height-430">
                        <div className="user-follow-card mb-4">
                          <div className="follow-card-left">
                            <div className="follow-avatar">
                              <img src="images/profile-imgs/img-2.jpg" alt />
                            </div>
                            <div className="follow-name">
                              <h5>Jassica William</h5>
                              <span>1 Follower</span>
                            </div>
                          </div>
                          <div className="follow-card-btn">
                            <button className="follow-btn">Following</button>
                          </div>
                        </div>
                        <div className="user-follow-card mb-4">
                          <div className="follow-card-left">
                            <div className="follow-avatar">
                              <img src="images/profile-imgs/img-1.jpg" alt />
                            </div>
                            <div className="follow-name">
                              <h5>Rock Smith</h5>
                              <span>3 Followers</span>
                            </div>
                          </div>
                          <div className="follow-card-btn">
                            <button className="follow-btn">Following</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="followers" role="tabpanel" aria-labelledby="pills-followers-tab">
                      <div id="followers-empty-state" className="d-flex align-items-center justify-content-center flex-column min-height-430">
                        <span>
                          <svg width={60} height={47} viewBox="0 0 60 47" fill="none">
                            <path d="M41.8884 39.501C41.2649 38.8161 41.1572 37.7618 41.9808 37.0461L48.8852 30.1433C50.44 28.5811 52.8108 30.9436 51.2559 32.4981L47.1225 36.6306H56.1899C56.467 35.6917 56.644 35.0145 56.644 34.0064C56.644 28.0732 50.5247 24.6256 45.152 24.6256C40.9724 24.6256 36.4387 26.5956 34.5067 30.4819C36.5234 33.0521 37.7088 36.138 37.7088 39.4702C37.7088 41.6788 37.1623 43.8566 36.1693 45.8267C35.1918 47.7967 32.1976 46.3038 33.1828 44.3337C33.9525 42.8023 34.3528 41.1863 34.3528 39.4702C34.3528 31.4515 26.1321 26.7188 18.8505 26.7188C11.5767 26.7188 3.36369 31.4515 3.36369 39.4702C3.36369 41.2017 3.74856 42.7793 4.52598 44.326C5.51892 46.2961 2.5247 47.7967 1.53945 45.8344C0.546504 43.8643 0 41.6711 0 39.4702C0 32.3749 5.23412 26.8573 11.6228 24.5948C7.8127 22.1322 5.49583 17.9151 5.49583 13.3594C5.49583 5.98709 11.4843 0 18.8505 0C26.2322 0 32.2207 5.98709 32.2207 13.3594C32.2207 17.9228 29.8961 22.1322 26.086 24.5948C28.3412 25.3874 30.3656 26.5495 32.0744 27.9808C33.6369 25.4798 36.0616 23.6098 38.7787 22.5016C36.1001 20.4854 34.5221 17.3533 34.5221 13.9904C34.5221 8.11875 39.2867 3.35524 45.152 3.35524C51.0327 3.35524 55.7896 8.11105 55.7896 13.9904C55.7896 17.3533 54.2117 20.4931 51.5253 22.5016C56.2668 24.4332 60 28.6811 60 34.0064C60 34.8683 59.8922 35.7379 59.6921 36.5921C59.492 37.4386 59.1841 38.262 58.7838 39.0623C58.4913 39.6472 57.9063 39.9858 57.2906 39.9858L47.1302 39.9935L51.2559 44.1183C52.8185 45.6805 50.4477 48.0507 48.8852 46.4885L41.8884 39.501ZM18.8505 3.36293C13.3239 3.36293 8.85183 7.83401 8.85183 13.3594C8.85183 18.9001 13.3085 23.3481 18.8505 23.3481C24.3926 23.3481 28.857 18.9001 28.857 13.3594C28.857 7.84171 24.3772 3.36293 18.8505 3.36293ZM45.152 6.71047C41.1418 6.71047 37.8781 9.97336 37.8781 13.9904C37.8781 18.0152 41.1341 21.255 45.1597 21.255C49.1931 21.255 52.4336 18.0228 52.4336 13.9904C52.4336 9.97336 49.1777 6.71047 45.152 6.71047Z" fill="#6ac045" />
                          </svg>
                        </span>
                        <p className="font-16 mt-4 text-light3">No followers yet</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="aboutModal" tabIndex={-1} aria-labelledby="aboutModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="aboutModalLabel">Edit Details</h5>
              <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
            </div>
            <div className="modal-body">
              <div className="model-content main-form">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">First Name*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue="John" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Last Name*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Bio*</label>
                      <textarea className="form-textarea" placeholder defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Email*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue="Johndoe@example.com" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Phone*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Website*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Facebook*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Instagram*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Twitter*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">LinkedIn*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Youtube*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <h4 className="address-title">Address</h4>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Address 1*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Address 2*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group main-form mt-4">
                      <label className="form-label">Country*</label>
                      <select className="selectpicker" data-size={5} title="Nothing selected" data-live-search="true">
                        <option value="Algeria">Algeria</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria (Österreich)</option>
                        <option value="Belgium">Belgium (België)</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="Chile">Chile</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Norway">Norway</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Turkey">Turkey</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Vietnam">Vietnam</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">State*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">City/Suburb*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group mt-4">
                      <label className="form-label">Zip/Post Code*</label>
                      <input className="form-control h_40" type="text" placeholder defaultValue />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="co-main-btn min-width btn-hover h_40" data-bs-target="#aboutModal" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="main-btn min-width btn-hover h_40">Update</button>
            </div>
          </div>
        </div>
      </div>

      {/* Header Start*/}

      <Header />

      {/* Header End*/}
      {/* Body Start*/}
      <div className="wrapper">
        <div className="profile-banner">
          <div className="hero-cover-block">
            <div className="hero-cover">
              <div className="hero-cover-img" />
            </div>
            <div className="upload-cover">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="cover-img-btn">
                      <input type="file" id="cover-img" />
                      <label htmlFor="cover-img"><i className="fa-solid fa-panorama me-3" />Change Image</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-dt-block">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-12">
                  <div className="main-card user-left-dt">
                    <div className="user-avatar-img">
                      <img src="./assets/images/profile-imgs/img-13.jpg" alt />
                      <div className="avatar-img-btn">
                        <input type="file" id="avatar-img" />
                        <label htmlFor="avatar-img"><i className="fa-solid fa-camera" /></label>
                      </div>
                    </div>
                    <div className="user-dts">
                      <h4 className="user-name">John Doe<span className="verify-badge"><i className="fa-solid fa-circle-check" /></span></h4>
                      <span className="user-email">johndoe@example.com</span>
                    </div>
                    <div className="ff-block">
                      <a href="#" className role="button" data-bs-toggle="modal" data-bs-target="#FFModal"><span>0</span>Followers</a>
                      <a href="#" className role="button" data-bs-toggle="modal" data-bs-target="#FFModal"><span>2</span>Following</a>
                    </div>
                    <div className="user-description">
                      <p>Hey I am a John Doe</p>
                    </div>
                    <div className="user-btns">
                      <a href="my_organisation_dashboard.html" className="co-main-btn co-btn-width min-width d-inline-block h_40">My Organisation<i className="fa-solid fa-right-left ms-3" /></a>
                    </div>
                    <div className="profile-social-link">
                      <h6>Find me on</h6>
                      <div className="social-links">
                        <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"><i className="fab fa-facebook-square" /></a>
                        <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="fab fa-instagram" /></a>
                        <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="fab fa-twitter" /></a>
                        <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                        <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube"><i className="fab fa-youtube" /></a>
                        <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Website"><i className="fa-solid fa-globe" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-12">
                  <div className="right-profile">
                    <div className="profile-tabs">
                      <ul className="nav nav-pills nav-fill p-2 garren-line-tab" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="feed-tab" data-bs-toggle="tab" href="#feed" role="tab" aria-controls="feed" aria-selected="true"><i className="fa-solid fa-house" />Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="about-tab" data-bs-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="false"><i className="fa-solid fa-circle-info" />About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="setting-tab" data-bs-toggle="tab" href="#setting" role="tab" aria-controls="setting" aria-selected="false"><i className="fa-solid fa-gear" />Setting</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="orders-tab" data-bs-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false"><i className="fa-solid fa-box" />My Orders</a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade active show" id="feed" role="tabpanel" aria-labelledby="feed-tab">
                          <div className="nav my-event-tabs mt-4" role="tablist">
                            <button className="event-link active" data-bs-toggle="tab" data-bs-target="#saved" type="button" role="tab" aria-controls="saved" aria-selected="true"><span className="event-count">1</span><span>Saved Events</span></button>
                            <button className="event-link" data-bs-toggle="tab" data-bs-target="#organised" type="button" role="tab" aria-controls="organised" aria-selected="false"><span className="event-count">2</span><span>Organised Events</span></button>
                            <button className="event-link" data-bs-toggle="tab" data-bs-target="#attending" type="button" role="tab" aria-controls="attending" aria-selected="false"><span className="event-count">1</span><span>Attending Events</span></button>
                          </div>
                          <div className="tab-content">
                            <div className="tab-pane fade show active" id="saved" role="tabpanel">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="main-card mt-4">
                                    <div className="card-top p-4">
                                      <div className="card-event-img">
                                        <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                      </div>
                                      <div className="card-event-dt">
                                        <h5>Step Up Open Mic Show</h5>
                                        <div className="evnt-time">Thu, Jun 30, 2022 4:30 AM</div>
                                        <div className="event-btn-group">
                                          <button className="esv-btn saved-btn me-2"><i className="fa-regular fa-bookmark me-2" />Save</button>
                                          <button className="esv-btn me-2" onclick="window.location.href='online_event_detail_view.html'"><i className="fa-solid fa-arrow-up-from-bracket me-2" />View</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="organised" role="tabpanel">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="main-card mt-4">
                                    <div className="card-top p-4">
                                      <div className="card-event-img">
                                        <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                      </div>
                                      <div className="card-event-dt">
                                        <h5>Step Up Open Mic Show</h5>
                                        <div className="evnt-time">Thu, Jun 30, 2022 4:30 AM</div>
                                        <div className="event-btn-group">
                                          <button className="esv-btn me-2" onclick="window.location.href='create_online_event.html'"><i className="fa-solid fa-gear me-2" />Manage Event</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="main-card mt-4">
                                    <div className="card-top p-4">
                                      <div className="card-event-img">
                                        <img src="./assets/images/event-imgs/img-7.jpg" alt />
                                      </div>
                                      <div className="card-event-dt">
                                        <h5>Tutorial on Canvas Painting for Beginners</h5>
                                        <div className="evnt-time">Sun, Jul 17, 2022 5:30 AM</div>
                                        <div className="event-btn-group">
                                          <button className="esv-btn me-2" onclick="window.location.href='create_online_event.html'"><i className="fa-solid fa-gear me-2" />Manage Event</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="attending" role="tabpanel">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="main-card mt-4">
                                    <div className="card-top p-4">
                                      <div className="card-event-img">
                                        <img src="./assets/images/event-imgs/img-6.jpg" alt />
                                      </div>
                                      <div className="card-event-dt">
                                        <h5>Step Up Open Mic Show</h5>
                                        <div className="evnt-time">Thu, Jun 30, 2022 4:30 AM</div>
                                        <div className="event-btn-group">
                                          <button className="esv-btn me-2" onclick="window.location.href='invoice.html'"><i className="fa-solid fa-arrow-up-from-bracket me-2" />View Ticket</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                          <div className="main-card mt-4">
                            <div className="bp-title position-relative">
                              <h4>About</h4>
                              <button className="main-btn btn-hover ms-auto edit-btn me-3 pe-4 ps-4 h_40" data-bs-toggle="modal" data-bs-target="#aboutModal">
                                <i className="fa-regular fa-pen-to-square me-2" />Edit
                              </button>
                            </div>
                            <div className="about-details">
                              <div className="about-step">
                                <h5>Name</h5>
                                <span>Joginder Singh</span>
                              </div>
                              <div className="about-step">
                                <h5>Tell us about yourself and let people know who you are</h5>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt interdum nunc et auctor. Phasellus quis pharetra sapien. Integer ligula sem, sodales vitae varius in, varius eget augue.</p>
                              </div>
                              <div className="about-step">
                                <h5>Find me on</h5>
                                <div className="social-links">
                                  <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"><i className="fab fa-facebook-square" /></a>
                                  <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="fab fa-instagram" /></a>
                                  <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="fab fa-twitter" /></a>
                                  <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                                  <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube"><i className="fab fa-youtube" /></a>
                                  <a href="#" className="social-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Website"><i className="fa-solid fa-globe" /></a>
                                </div>
                              </div>
                              <div className="about-step">
                                <h5>Address</h5>
                                <p className="mb-0">00 Challis St, Newport, Victoria, 0000, Australia</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="setting" role="tabpanel" aria-labelledby="setting-tab">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="main-card mt-4 p-0">
                                <div className="nav custom-tabs" role="tablist">
                                  <button className="tab-link active" data-bs-toggle="tab" data-bs-target="#tab-01" type="button" role="tab" aria-controls="tab-01" aria-selected="true"><i className="fa-solid fa-envelope me-3" />Email Preferences</button>
                                  <button className="tab-link" data-bs-toggle="tab" data-bs-target="#tab-02" type="button" role="tab" aria-controls="tab-02" aria-selected="false"><i className="fa-solid fa-key me-3" />Password Settings</button>
                                  <button className="tab-link" data-bs-toggle="tab" data-bs-target="#tab-03" type="button" role="tab" aria-controls="tab-03" aria-selected="false"><i className="fa-solid fa-gear me-3" />Privacy Settings</button>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="main-card mt-4">
                                <div className="tab-content">
                                  <div className="tab-pane fade show active" id="tab-01" role="tabpanel">
                                    <div className="bp-title">
                                      <h4>Email Preferences</h4>
                                    </div>
                                    <div className="profile-setting p-4">
                                      <div className="setting-step">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Receive order confirmation</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">On purchasing an event you will receive an order confirmation email.</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Receive communication from event organisers for my purchased events</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">The organisations whose events you have bought will be able send you further follow up emails.</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Receive event invitations from event organisers sent to my email address</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">Organisations will be able to send you Invitations in their events.</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Receive reminder from Barren for my purchased events</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">After purchasing event you will receive reminder emails before the event starts so that you can get prepared.</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Receive critical notifications on Barren service status and product updates</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">Get updates on new features and insights so that you can make the best use of Barren.</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Receive newsletters from Barren with general and other information</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">Get more insights on Barren that can help to boost your event business.</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Receive notification when someone follows me</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">We will notify you when someone starts following you or your organisation.</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Review review notification when someone shares my events</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-0">We will notify you when someone shares event created by your organisation.</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Receive notification on review related activities</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-0">We will notify you when someone leaves review for your organisation.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane fade" id="tab-02" role="tabpanel">
                                    <div className="bp-title">
                                      <h4>Password Settings</h4>
                                    </div>
                                    <div className="password-setting p-4">
                                      <div className="password-des">
                                        <h4>Change password</h4>
                                        <p>You can update your password from here. If you can't remember your current password, just log out and click on Forgot password.</p>
                                      </div>
                                      <div className="change-password-form">
                                        <div className="form-group mt-4">
                                          <label className="form-label">Current password*</label>
                                          <div className="loc-group position-relative">
                                            <input className="form-control h_50" type="password" placeholder="Enter your password" />
                                            <span className="pass-show-eye"><i className="fas fa-eye-slash" /></span>
                                          </div>
                                        </div>
                                        <div className="form-group mt-4">
                                          <label className="form-label">New password*</label>
                                          <div className="loc-group position-relative">
                                            <input className="form-control h_50" type="password" placeholder="Enter your password" />
                                            <span className="pass-show-eye"><i className="fas fa-eye-slash" /></span>
                                          </div>
                                        </div>
                                        <div className="form-group mt-4">
                                          <label className="form-label">Confirm new password*</label>
                                          <div className="loc-group position-relative">
                                            <input className="form-control h_50" type="password" placeholder="Enter your password" />
                                            <span className="pass-show-eye"><i className="fas fa-eye-slash" /></span>
                                          </div>
                                        </div>
                                        <button className="main-btn btn-hover w-100 mt-5" type="submit">Update Password</button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane fade" id="tab-03" role="tabpanel">
                                    <div className="bp-title">
                                      <h4>Privacy Settings</h4>
                                    </div>
                                    <div className="privacy-setting p-4">
                                      <div className="setting-step">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Lock my user profile</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">Locking profile hides all kinds of user information, activities and interaction from public profile</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Allow people to contact me</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">People will be able to send you emails through Barren who visits your profile</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Allow people to find and invite me to relevant events</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">Based on your preferences event organisers will be able to send you invitations in their events</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Allow people to follow me</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">People will be able to follow you</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Allow people to see my followings</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">People will be able to see whom and which organisations you are following</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Allow people to see my join date</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">People will be able to see when you have started using Barren</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Allow people to see the events I attend</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-4">People will be able to see the events you have purchased</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Allow people to see the events I join as speaker</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-0">People will be able to see the events you have joined as Speaker</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Allow people to see the events I share</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-0">People will be able to see the events you have shared in Barren</p>
                                      </div>
                                      <div className="setting-step pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                          <h3 className="setting-title">Hide review interactions from public</h3>
                                          <label className="btn-switch m-0 ml-2">
                                            <input type="checkbox" />
                                            <span className="checkbox-slider" />
                                          </label>
                                        </div>
                                        <p className="mt-1 mb-0">The reviews and ratings given by you will not appear in your public profile</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                          <div className="main-card mt-4">
                            <div className="card-top p-4">
                              <div className="card-event-img">
                                <img src="./assets/images/event-imgs/img-7.jpg" alt />
                              </div>
                              <div className="card-event-dt">
                                <h5>Tutorial on Canvas Painting for Beginners</h5>
                                <div className="invoice-id">Invoice ID : <span>BRCCRW-11111111</span></div>
                              </div>
                            </div>
                            <div className="card-bottom">
                              <div className="card-bottom-item">
                                <div className="card-icon">
                                  <i className="fa-solid fa-calendar-days" />
                                </div>
                                <div className="card-dt-text">
                                  <h6>Event Starts on</h6>
                                  <span>01 June 2022</span>
                                </div>
                              </div>
                              <div className="card-bottom-item">
                                <div className="card-icon">
                                  <i className="fa-solid fa-ticket" />
                                </div>
                                <div className="card-dt-text">
                                  <h6>Total Tickets</h6>
                                  <span>1</span>
                                </div>
                              </div>
                              <div className="card-bottom-item">
                                <div className="card-icon">
                                  <i className="fa-solid fa-money-bill" />
                                </div>
                                <div className="card-dt-text">
                                  <h6>Paid Amount</h6>
                                  <span>AUD $50.00</span>
                                </div>
                              </div>
                              <div className="card-bottom-item">
                                <div className="card-icon">
                                  <i className="fa-solid fa-money-bill" />
                                </div>
                                <div className="card-dt-text">
                                  <h6>Invoice</h6>
                                  <a href="invoice.html">Download</a>
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
      <Footer />
    </div>

  );
}