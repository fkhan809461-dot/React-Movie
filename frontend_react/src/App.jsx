
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { IndexPage } from './index';
import {VenueEvent} from './venue_event'
import {ContactPage} from './contact'
import { BookNow } from './checkout';
import {BookConfromed} from './booking_confirmed';
import { AboutPage } from './About_us'
import {SignINForm} from './Sign_in'
import {Sign_up} from './Singn_up'
import {Profile_User} from './Profile'
import {AllEvent} from './AllEvent'
import {CheckButton} from './Check_butto'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/venues/:id" element={<VenueEvent />} />
          <Route path="/contact_us" element={<ContactPage />} />
          <Route path="/check_out" element={<BookNow />} />
          <Route path="/book_confromed" element={<BookConfromed />} />
          <Route path="/about_us" element={<AboutPage />} />
          <Route path="/sign_in" element={<SignINForm/>}/> 
         < Route path= "/sign_up" element= {<Sign_up/>}/>
         <Route path="/profile_user" element={<Profile_User/>} />
         <Route path="/all_event" element={<AllEvent/>} />
         <Route path="/test" element={<CheckButton/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
