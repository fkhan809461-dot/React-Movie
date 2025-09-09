import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



import "./assets/images/fav.png";
import "./assets/vendor/unicons-2.0.1/css/unicons.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/night-mode.css";

import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/OwlCarousel/assets/owl.carousel.css";
import "./assets/vendor/OwlCarousel/assets/owl.theme.default.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css";


import "./assets/js/jquery.min.js";
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/OwlCarousel/owl.carousel.js";
import "./assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js";
import "./assets/vendor/mixitup/dist/mixitup.min.js";
import "./assets/js/custom.js";
import "./assets/js/night-mode.js";





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
