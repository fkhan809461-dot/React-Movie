import { Navbar } from "./components/NavBar"
export const CreatesEvent = () => {

    return (
        <div>
            <Navbar/>
            <div className="modal fade" id="singleTicketModal" tabIndex={-1} aria-labelledby="singleTicketModalLabel" aria-hidden="false">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="singleTicketModalLabel">Create Single Ticket</h5>
                            <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
                        </div>
                        <div className="modal-body">
                            <div className="model-content main-form">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group mt-4">
                                            <label className="form-label">Ticket Name*</label>
                                            <input className="form-control h_40" type="text" placeholder="Event Ticket Name" defaultValue />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="main-card p-4 mt-4">
                                            <div className="form-label mb-4 fs-16">Ticket Restrictions</div>
                                            <div className="form-group border_bottom">
                                                <div className="d-flex align-items-center flex-wrap pb-4 flex-nowrap">
                                                    <h4 className="fs-14 mb-0 me-auto">Total number of tickets available</h4>
                                                    <label className="btn-switch m-0 me-3">
                                                        <input type="checkbox" id="is-restrict-total-ticket" defaultChecked />
                                                        <span className="checkbox-slider" />
                                                    </label>
                                                    <div>
                                                        <label className="fs-12 m-0">Unlimited</label>
                                                    </div>
                                                </div>
                                                <div className="p-0 mb-4 total_ticket_per_level" style={{ display: 'none' }}>
                                                    <div className="form-group">
                                                        <div className="input-number">
                                                            <input className="form-control h_40" type="number" min={0} max={30} placeholder="Enter Total Tickets" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="d-flex align-items-center flex-wrap pt-4 flex-nowrap">
                                                    <h4 className="fs-14 mb-0 me-auto">Maximum number of tickets for each customer</h4>
                                                    <label className="btn-switch m-0 me-3">
                                                        <input type="checkbox" id="is-restrict-ticket-per-user" defaultChecked />
                                                        <span className="checkbox-slider" />
                                                    </label>
                                                    <div>
                                                        <label className="fs-12 m-0">Unlimited</label>
                                                    </div>
                                                </div>
                                                <div className="p-0 mt-4 total_ticket_per_user" style={{ display: 'none' }}>
                                                    <div className="form-group">
                                                        <div className="input-number">
                                                            <input className="form-control h_40" type="number" min={0} max={30} placeholder="Enter Max. per order" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="main-card p-4 mt-4">
                                            <div className="form-label mb-4 fs-16">Ticket Restrictions</div>
                                            <div className="form-group">
                                                <label className="form-label mb-2 fs-14">Ticket Order*</label>
                                                <input className="form-control h_40" type="number" defaultValue={1} min={1} max={30} placeholder="Enter Sort Order" />
                                            </div>
                                            <div className="form-group mt-4">
                                                <label className="form-label mb-2 fs-14">Ticket Description*</label>
                                                <textarea className="form-textarea" placeholder="Description will go here" defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="main-card p-4 mt-4">
                                            <div className="d-flex align-items-center justify-content-between price-variation-head">
                                                <h5 className="m-0 color-black fs-16">
                                                    Variations (<span className="ticket-subtype-count">1</span>)</h5>
                                                <span className="add-btn btn-hover">
                                                    <i className="fa-regular fa-square-plus" />
                                                </span>
                                            </div>
                                            <div className="table-responsive">
                                                <div className="div-base-table border-0 mt-2 full-width small-table ticket-subtype-table">
                                                    <div className="table-row table-head no-bg">
                                                        <div className="table-col fs-14 text-light3">Price <span className="red">*</span></div>
                                                        <div className="table-col fs-14 text-light3">Variation Name <span className="red">*</span></div>
                                                        <div className="table-col fs-14 text-light3 text-right">Actions</div>
                                                    </div>
                                                    <div className="table-row ticket-subtype-row">
                                                        <div className="table-col first-col">
                                                            <div className="form-group m-0 form-custom-validation">
                                                                <input className="form-control h_40" type="number" min={0} max={10000} required placeholder="Price" defaultValue />
                                                            </div>
                                                        </div>
                                                        <div className="table-col second-col">
                                                            <div className="form-group m-0">
                                                                <input className="form-control h_40" type="text" maxLength={75} required defaultValue />
                                                            </div>
                                                        </div>
                                                        <div className="table-col third-col">
                                                            <button type="button" className="v-btn-close btn-hover">
                                                                <i className="fa-solid fa-xmark" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="main-card p-4 mt-4">
                                            <div className="form-group">
                                                <div className="d-flex align-items-start">
                                                    <label className="btn-switch m-0 me-3">
                                                        <input type="checkbox" className id="bird-discount" defaultValue />
                                                        <span className="checkbox-slider" />
                                                    </label>
                                                    <div className="d-flex flex-column">
                                                        <label className="color-black mb-1">I want to offer early bird discount.</label>
                                                        <p className="mt-2 fs-14 d-block mb-3">Enabling this discount lets your attendees get all the regular tickets features at a discounted price. <a href="#" className="a-link">Learn more</a></p>
                                                    </div>
                                                </div>
                                                <div className="online-event-discount-wrapper" style={{ display: 'none' }}>
                                                    <div className="row g-3">
                                                        <div className="col-md-3">
                                                            <label className="form-label mt-3 fs-6">Discount*</label>
                                                            <input className="form-control h_40" type="text" placeholder={0} defaultValue />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label mt-3 fs-6">Price*</label>
                                                            <select className="selectpicker">
                                                                <option value="Percentage" selected>Percent(%)</option>
                                                                <option value="Fixed">Fixed($)</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label mt-3 fs-6">Discount ends on*</label>
                                                            <div className="loc-group position-relative">
                                                                <input className="form-control h_40 datepicker-here" data-language="en" data-position="top left" type="text" placeholder="MM/DD/YYYY" defaultValue />
                                                                <span className="absolute-icon top_0"><i className="fa-solid fa-calendar-days" /></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="clock-icon">
                                                                <label className="form-label mt-3 fs-6">Time</label>
                                                                <select className="selectpicker" data-size={5} data-live-search="true">
                                                                    <option value="00:00">12:00 AM</option>
                                                                    <option value="00:15">12:15 AM</option>
                                                                    <option value="00:30">12:30 AM</option>
                                                                    <option value="00:45">12:45 AM</option>
                                                                    <option value="01:00">01:00 AM</option>
                                                                    <option value="01:15">01:15 AM</option>
                                                                    <option value="01:30">01:30 AM</option>
                                                                    <option value="01:45">01:45 AM</option>
                                                                    <option value="02:00">02:00 AM</option>
                                                                    <option value="02:15">02:15 AM</option>
                                                                    <option value="02:30">02:30 AM</option>
                                                                    <option value="02:45">02:45 AM</option>
                                                                    <option value="03:00">03:00 AM</option>
                                                                    <option value="03:15">03:15 AM</option>
                                                                    <option value="03:30">03:30 AM</option>
                                                                    <option value="03:45">03:45 AM</option>
                                                                    <option value="04:00">04:00 AM</option>
                                                                    <option value="04:15">04:15 AM</option>
                                                                    <option value="04:30">04:30 AM</option>
                                                                    <option value="04:45">04:45 AM</option>
                                                                    <option value="05:00">05:00 AM</option>
                                                                    <option value="05:15">05:15 AM</option>
                                                                    <option value="05:30">05:30 AM</option>
                                                                    <option value="05:45">05:45 AM</option>
                                                                    <option value="06:00">06:00 AM</option>
                                                                    <option value="06:15">06:15 AM</option>
                                                                    <option value="06:30">06:30 AM</option>
                                                                    <option value="06:45">06:45 AM</option>
                                                                    <option value="07:00">07:00 AM</option>
                                                                    <option value="07:15">07:15 AM</option>
                                                                    <option value="07:30">07:30 AM</option>
                                                                    <option value="07:45">07:45 AM</option>
                                                                    <option value="08:00">08:00 AM</option>
                                                                    <option value="08:15">08:15 AM</option>
                                                                    <option value="08:30">08:30 AM</option>
                                                                    <option value="08:45">08:45 AM</option>
                                                                    <option value="09:00">09:00 AM</option>
                                                                    <option value="09:15">09:15 AM</option>
                                                                    <option value="09:30">09:30 AM</option>
                                                                    <option value="09:45">09:45 AM</option>
                                                                    <option value="10:00" selected="selected">10:00 AM</option>
                                                                    <option value="10:15">10:15 AM</option>
                                                                    <option value="10:30">10:30 AM</option>
                                                                    <option value="10:45">10:45 AM</option>
                                                                    <option value="11:00">11:00 AM</option>
                                                                    <option value="11:15">11:15 AM</option>
                                                                    <option value="11:30">11:30 AM</option>
                                                                    <option value="11:45">11:45 AM</option>
                                                                    <option value="12:00">12:00 PM</option>
                                                                    <option value="12:15">12:15 PM</option>
                                                                    <option value="12:30">12:30 PM</option>
                                                                    <option value="12:45">12:45 PM</option>
                                                                    <option value="13:00">01:00 PM</option>
                                                                    <option value="13:15">01:15 PM</option>
                                                                    <option value="13:30">01:30 PM</option>
                                                                    <option value="13:45">01:45 PM</option>
                                                                    <option value="14:00">02:00 PM</option>
                                                                    <option value="14:15">02:15 PM</option>
                                                                    <option value="14:30">02:30 PM</option>
                                                                    <option value="14:45">02:45 PM</option>
                                                                    <option value="15:00">03:00 PM</option>
                                                                    <option value="15:15">03:15 PM</option>
                                                                    <option value="15:30">03:30 PM</option>
                                                                    <option value="15:45">03:45 PM</option>
                                                                    <option value="16:00">04:00 PM</option>
                                                                    <option value="16:15">04:15 PM</option>
                                                                    <option value="16:30">04:30 PM</option>
                                                                    <option value="16:45">04:45 PM</option>
                                                                    <option value="17:00">05:00 PM</option>
                                                                    <option value="17:15">05:15 PM</option>
                                                                    <option value="17:30">05:30 PM</option>
                                                                    <option value="17:45">05:45 PM</option>
                                                                    <option value="18:00">06:00 PM</option>
                                                                    <option value="18:15">06:15 PM</option>
                                                                    <option value="18:30">06:30 PM</option>
                                                                    <option value="18:45">06:45 PM</option>
                                                                    <option value="19:00">07:00 PM</option>
                                                                    <option value="19:15">07:15 PM</option>
                                                                    <option value="19:30">07:30 PM</option>
                                                                    <option value="19:45">07:45 PM</option>
                                                                    <option value="20:00">08:00 PM</option>
                                                                    <option value="20:15">08:15 PM</option>
                                                                    <option value="20:30">08:30 PM</option>
                                                                    <option value="20:45">08:45 PM</option>
                                                                    <option value="21:00">09:00 PM</option>
                                                                    <option value="21:15">09:15 PM</option>
                                                                    <option value="21:30">09:30 PM</option>
                                                                    <option value="21:45">09:45 PM</option>
                                                                    <option value="22:00">10:00 PM</option>
                                                                    <option value="22:15">10:15 PM</option>
                                                                    <option value="22:30">10:30 PM</option>
                                                                    <option value="22:45">10:45 PM</option>
                                                                    <option value="23:00">11:00 PM</option>
                                                                    <option value="23:15">11:15 PM</option>
                                                                    <option value="23:30">11:30 PM</option>
                                                                    <option value="23:45">11:45 PM</option>
                                                                </select>
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
                        <div className="modal-footer">
                            <button type="button" className="co-main-btn min-width btn-hover h_40" data-bs-target="#aboutModal" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="main-btn min-width btn-hover h_40">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Create Single Ticket Model End*/}
            {/* Create Group Ticket Model Start*/}
            <div className="modal fade" id="groupTicketModal" tabIndex={-1} aria-labelledby="groupTicketModalLabel" aria-hidden="false">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="groupTicketModalLabel">Create Group Ticket</h5>
                            <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i className="uil uil-multiply" /></button>
                        </div>
                        <div className="modal-body">
                            <div className="model-content main-form">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group mt-4">
                                            <label className="form-label">Ticket Name*</label>
                                            <input className="form-control h_40" type="text" placeholder="Enter Ticket Type - Group Name (E.g Gold - Family Pass)" defaultValue />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="main-card p-4 mt-4">
                                            <div className="form-label mb-4 fs-16">Ticket Restrictions</div>
                                            <div className="form-group border_bottom">
                                                <div className="d-flex align-items-center flex-wrap pb-4 flex-nowrap">
                                                    <h4 className="fs-14 mb-0 me-auto">Total number of tickets available</h4>
                                                    <label className="btn-switch m-0 me-3">
                                                        <input type="checkbox" id="is-restrict-total-ticket2" defaultChecked />
                                                        <span className="checkbox-slider" />
                                                    </label>
                                                    <div>
                                                        <label className="fs-12 m-0">Unlimited</label>
                                                    </div>
                                                </div>
                                                <div className="p-0 mb-4 total_ticket_per_level2" style={{ display: 'none' }}>
                                                    <div className="form-group">
                                                        <div className="input-number">
                                                            <input className="form-control h_40" type="number" min={0} max={30} placeholder="Enter Total Tickets" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="d-flex align-items-center flex-wrap pt-4 flex-nowrap">
                                                    <h4 className="fs-14 mb-0 me-auto">Maximum number of tickets for each customer</h4>
                                                    <label className="btn-switch m-0 me-3">
                                                        <input type="checkbox" id="is-restrict-ticket-per-user2" defaultChecked />
                                                        <span className="checkbox-slider" />
                                                    </label>
                                                    <div>
                                                        <label className="fs-12 m-0">Unlimited</label>
                                                    </div>
                                                </div>
                                                <div className="p-0 mt-4 total_ticket_per_user2" style={{ display: 'none' }}>
                                                    <div className="form-group">
                                                        <div className="input-number">
                                                            <input className="form-control h_40" type="number" min={0} max={30} placeholder="Enter Max. per order" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="main-card p-4 mt-4">
                                            <div className="form-label mb-4 fs-16">Ticket Restrictions</div>
                                            <div className="form-group">
                                                <label className="form-label mb-2 fs-14">Ticket Order*</label>
                                                <input className="form-control h_40" type="number" defaultValue={1} min={1} max={30} placeholder="Enter Sort Order" />
                                            </div>
                                            <div className="form-group mt-4">
                                                <label className="form-label mb-2 fs-14">Ticket Description*</label>
                                                <textarea className="form-textarea" placeholder="Description will go here" defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group mt-4">
                                            <label className="form-label mb-2 fs-14">Ticket Price*</label>
                                            <input className="form-control h_40" type="number" defaultValue={10} placeholder="Enter Ticket Price" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group mt-4">
                                            <label className="form-label mb-2 fs-14">Number of tickets for each group*</label>
                                            <input className="form-control h_40" type="number" min={0} defaultValue placeholder="Enter Total Tickets Per Group" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="main-card p-4 mt-4">
                                            <div className="form-group">
                                                <div className="d-flex align-items-start">
                                                    <label className="btn-switch m-0 me-3">
                                                        <input type="checkbox" className id="bird-discount2" defaultValue />
                                                        <span className="checkbox-slider" />
                                                    </label>
                                                    <div className="d-flex flex-column">
                                                        <label className="color-black mb-1">I want to offer early bird discount.</label>
                                                        <p className="mt-2 fs-14 d-block mb-3">Enabling this discount lets your attendees get all the regular tickets features at a discounted price. <a href="#" className="a-link">Learn more</a></p>
                                                    </div>
                                                </div>
                                                <div className="online-event-discount-wrapper2" style={{ display: 'none' }}>
                                                    <div className="row g-3">
                                                        <div className="col-md-3">
                                                            <label className="form-label mt-3 fs-6">Discount*</label>
                                                            <input className="form-control h_40" type="text" placeholder={0} defaultValue />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label mt-3 fs-6">Price*</label>
                                                            <select className="selectpicker">
                                                                <option value="Percentage" selected>Percent(%)</option>
                                                                <option value="Fixed">Fixed($)</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label mt-3 fs-6">Discount ends on*</label>
                                                            <div className="loc-group position-relative">
                                                                <input className="form-control h_40 datepicker-here" data-language="en" data-position="top left" type="text" placeholder="MM/DD/YYYY" defaultValue />
                                                                <span className="absolute-icon top_0"><i className="fa-solid fa-calendar-days" /></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="clock-icon">
                                                                <label className="form-label mt-3 fs-6">Time</label>
                                                                <select className="selectpicker" data-size={5} data-live-search="true">
                                                                    <option value="00:00">12:00 AM</option>
                                                                    <option value="00:15">12:15 AM</option>
                                                                    <option value="00:30">12:30 AM</option>
                                                                    <option value="00:45">12:45 AM</option>
                                                                    <option value="01:00">01:00 AM</option>
                                                                    <option value="01:15">01:15 AM</option>
                                                                    <option value="01:30">01:30 AM</option>
                                                                    <option value="01:45">01:45 AM</option>
                                                                    <option value="02:00">02:00 AM</option>
                                                                    <option value="02:15">02:15 AM</option>
                                                                    <option value="02:30">02:30 AM</option>
                                                                    <option value="02:45">02:45 AM</option>
                                                                    <option value="03:00">03:00 AM</option>
                                                                    <option value="03:15">03:15 AM</option>
                                                                    <option value="03:30">03:30 AM</option>
                                                                    <option value="03:45">03:45 AM</option>
                                                                    <option value="04:00">04:00 AM</option>
                                                                    <option value="04:15">04:15 AM</option>
                                                                    <option value="04:30">04:30 AM</option>
                                                                    <option value="04:45">04:45 AM</option>
                                                                    <option value="05:00">05:00 AM</option>
                                                                    <option value="05:15">05:15 AM</option>
                                                                    <option value="05:30">05:30 AM</option>
                                                                    <option value="05:45">05:45 AM</option>
                                                                    <option value="06:00">06:00 AM</option>
                                                                    <option value="06:15">06:15 AM</option>
                                                                    <option value="06:30">06:30 AM</option>
                                                                    <option value="06:45">06:45 AM</option>
                                                                    <option value="07:00">07:00 AM</option>
                                                                    <option value="07:15">07:15 AM</option>
                                                                    <option value="07:30">07:30 AM</option>
                                                                    <option value="07:45">07:45 AM</option>
                                                                    <option value="08:00">08:00 AM</option>
                                                                    <option value="08:15">08:15 AM</option>
                                                                    <option value="08:30">08:30 AM</option>
                                                                    <option value="08:45">08:45 AM</option>
                                                                    <option value="09:00">09:00 AM</option>
                                                                    <option value="09:15">09:15 AM</option>
                                                                    <option value="09:30">09:30 AM</option>
                                                                    <option value="09:45">09:45 AM</option>
                                                                    <option value="10:00" selected="selected">10:00 AM</option>
                                                                    <option value="10:15">10:15 AM</option>
                                                                    <option value="10:30">10:30 AM</option>
                                                                    <option value="10:45">10:45 AM</option>
                                                                    <option value="11:00">11:00 AM</option>
                                                                    <option value="11:15">11:15 AM</option>
                                                                    <option value="11:30">11:30 AM</option>
                                                                    <option value="11:45">11:45 AM</option>
                                                                    <option value="12:00">12:00 PM</option>
                                                                    <option value="12:15">12:15 PM</option>
                                                                    <option value="12:30">12:30 PM</option>
                                                                    <option value="12:45">12:45 PM</option>
                                                                    <option value="13:00">01:00 PM</option>
                                                                    <option value="13:15">01:15 PM</option>
                                                                    <option value="13:30">01:30 PM</option>
                                                                    <option value="13:45">01:45 PM</option>
                                                                    <option value="14:00">02:00 PM</option>
                                                                    <option value="14:15">02:15 PM</option>
                                                                    <option value="14:30">02:30 PM</option>
                                                                    <option value="14:45">02:45 PM</option>
                                                                    <option value="15:00">03:00 PM</option>
                                                                    <option value="15:15">03:15 PM</option>
                                                                    <option value="15:30">03:30 PM</option>
                                                                    <option value="15:45">03:45 PM</option>
                                                                    <option value="16:00">04:00 PM</option>
                                                                    <option value="16:15">04:15 PM</option>
                                                                    <option value="16:30">04:30 PM</option>
                                                                    <option value="16:45">04:45 PM</option>
                                                                    <option value="17:00">05:00 PM</option>
                                                                    <option value="17:15">05:15 PM</option>
                                                                    <option value="17:30">05:30 PM</option>
                                                                    <option value="17:45">05:45 PM</option>
                                                                    <option value="18:00">06:00 PM</option>
                                                                    <option value="18:15">06:15 PM</option>
                                                                    <option value="18:30">06:30 PM</option>
                                                                    <option value="18:45">06:45 PM</option>
                                                                    <option value="19:00">07:00 PM</option>
                                                                    <option value="19:15">07:15 PM</option>
                                                                    <option value="19:30">07:30 PM</option>
                                                                    <option value="19:45">07:45 PM</option>
                                                                    <option value="20:00">08:00 PM</option>
                                                                    <option value="20:15">08:15 PM</option>
                                                                    <option value="20:30">08:30 PM</option>
                                                                    <option value="20:45">08:45 PM</option>
                                                                    <option value="21:00">09:00 PM</option>
                                                                    <option value="21:15">09:15 PM</option>
                                                                    <option value="21:30">09:30 PM</option>
                                                                    <option value="21:45">09:45 PM</option>
                                                                    <option value="22:00">10:00 PM</option>
                                                                    <option value="22:15">10:15 PM</option>
                                                                    <option value="22:30">10:30 PM</option>
                                                                    <option value="22:45">10:45 PM</option>
                                                                    <option value="23:00">11:00 PM</option>
                                                                    <option value="23:15">11:15 PM</option>
                                                                    <option value="23:30">11:30 PM</option>
                                                                    <option value="23:45">11:45 PM</option>
                                                                </select>
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
                        <div className="modal-footer">
                            <button type="button" className="co-main-btn min-width btn-hover h_40" data-bs-target="#aboutModal" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="main-btn min-width btn-hover h_40">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Create Group Ticket Model End*/}
            {/* Header Start*/}
            <header className="header">
                <div className="header-inner">
                    <nav className="navbar navbar-expand-lg bg-barren barren-head navbar fixed-top justify-content-sm-start pt-0 pb-0">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span className="navbar-toggler-icon">
                                    <i className="fa-solid fa-bars" />
                                </span>
                            </button>
                            <a className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto" href="index.html">
                                <div className="res-main-logo">
                                    <img src="images/logo-icon.svg" alt />
                                </div>
                                <div className="main-logo" id="logo">
                                    <img src="images/logo.svg" alt />
                                    <img className="logo-inverse" src="images/dark-logo.svg" alt />
                                </div>
                            </a>

                            <div className="right-header order-2">
                                <ul className="align-self-stretch">
                                    <li>
                                        <a href="create.html" className="create-btn btn-hover">
                                            <i className="fa-solid fa-calendar-days" />
                                            <span>Create Event</span>
                                        </a>
                                    </li>
                                    <li className="dropdown account-dropdown">
                                        <a href="#" className="account-link" role="button" id="accountClick" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="images/profile-imgs/img-13.jpg" alt />
                                            <i className="fas fa-caret-down arrow-icon" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-account dropdown-menu-end" aria-labelledby="accountClick">
                                            <li>
                                                <div className="dropdown-account-header">
                                                    <div className="account-holder-avatar">
                                                        <img src="images/profile-imgs/img-13.jpg" alt />
                                                    </div>
                                                    <h5>John Doe</h5>
                                                    <p>johndoe@example.com</p>
                                                </div>
                                            </li>
                                            <li className="profile-link">
                                                <a href="my_organisation_dashboard.html" className="link-item">My Organisation</a>
                                                <a href="organiser_profile_view.html" className="link-item">My Profile</a>
                                                <a href="sign_in.html" className="link-item">Sign Out</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="night_mode_switch__btn">
                                            <div id="night-mode" className="fas fa-moon fa-sun" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="overlay" />
                </div>
            </header>
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
                                            <li className="breadcrumb-item"><a href="create.html">Create</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Create Online Event</li>
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
                                                                                    <div className="col-md-12">
                                                                                        <div className="form-group mt-1">
                                                                                            <label className="form-label fs-6">Title*</label>
                                                                                            <input className="form-control h_50" type="text" placeholder defaultValue />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <div className="form-group mt-1">
                                                                                            <label className="form-label fs-6">Description</label>
                                                                                            <input className="form-control h_50" type="text" placeholder defaultValue />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <div className="form-group mt-1">
                                                                                            <label className="form-label fs-6">Category</label>
                                                                                            <input className="form-control h_50" type="text" placeholder defaultValue />
                                                                                        </div>
                                                                                    </div>


                                                                                    <div className="col-lg-6 col-md-12">
                                                                                        <li><a href="" class="create-btn btn-hover"><span>Add Event</span></a></li>
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