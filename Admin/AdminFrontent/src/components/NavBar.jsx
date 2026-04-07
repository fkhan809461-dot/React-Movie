import { data, Link } from "react-router-dom";

export const Navbar = () => {

return (
    <>

<div>

  <nav className="vertical_nav">
    <div className="left_section menu_left" id="js-menu">
      <div className="left_section">
        <ul>
          <li className="menu--item">
            <Link to='/' className="menu--link" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-gauge menu--icon" />
              <span className="menu--label">Dashboard</span>
            </Link>
          </li>
          <li className="menu--item">
            <Link  to='/events' className="menu--link active" title="Events" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-calendar-days menu--icon" />
              <span className="menu--label">Events</span>
            </Link>
          </li>
          <li className="menu--item">
            <Link to='/createEvent' className="menu--link" title="Promotion" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-rectangle-ad menu--icon" />
              <span className="menu--label">Create Event</span>
            </Link>
          </li>
          <li className="menu--item">
            <Link href="my_organisation_dashboard_contact_lists.html" className="menu--link" title="Contact List" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-regular fa-address-card menu--icon" />
              <span className="menu--label">Contact List</span>
            </Link>
          </li>
          <li className="menu--item">
            <Link href="my_organisation_dashboard_payout.html" className="menu--link" title="Payouts" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-credit-card menu--icon" />
              <span className="menu--label">Payouts</span>
            </Link>
          </li>
          <li className="menu--item">
            <Link to='/reports' className="menu--link" title="Reports" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-chart-pie menu--icon" />
              <span className="menu--label">Reports</span>
            </Link>
          </li>
          <li className="menu--item">
            <Link href="my_organisation_dashboard_subscription.html" className="menu--link" title="Subscription" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-bahai menu--icon" />
              <span className="menu--label">Subscription</span>
            </Link>
          </li>
          <li className="menu--item">
            <Link href="my_organisation_dashboard_conversion_setup.html" className="menu--link" title="Conversion Setup" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-square-plus menu--icon" />
              <span className="menu--label">Conversion Setup</span>
            </Link>
          </li>
          <li className="menu--item">
            <Link href="my_organisation_dashboard_about.html" className="menu--link" to='' title="About" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fa-solid fa-circle-info menu--icon" />
              <span className="menu--label">About</span>
            </Link>
          </li>
          <li className="menu--item">
            <Link href="my_organisation_dashboard_my_team.html" className="menu--link team-lock" title="My Team" data-bs-toggle="tooltip" data-bs-placement="right"> 
              <i className="fa-solid fa-user-group menu--icon" />
              <span className="menu--label">My Team</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</div>

    </>
)

}