import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagramSquare, FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
      {/* Section: Social media */}
      <hr />
      <section className="d-flex justify-content-between p-4 text-white">
        
        {/* Right */}
        <div>
          <NavLink to="#" className="text-danger me-4">
               <FaFacebook/>
          </NavLink>
          <NavLink to='#' className="text-danger me-4">
          <FaTwitter/>
          </NavLink>
          <NavLink to="#" className="text-danger me-4">
          <FaGoogle/>
          </NavLink>
          <NavLink to="#" className="text-danger me-4">
          <FaInstagramSquare/>
          </NavLink>
          <NavLink to="#" className="text-danger me-4">
          <FaLinkedin/>
          </NavLink>
          <NavLink to="#" className="text-danger me-4">
          <FaGithub/>
          </NavLink>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      
      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">Target.com</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
              *See offer details. Restrictions apply. Pricing, promotions and availability may vary by location and at Target.com
              </p>
            </div>
            {/* Grid column */}
            
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">About Us</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
                <a href="#!" className="text-dark">About Target</a>
              </p>
              <p>
                <a href="#!" className="text-dark">Careers</a>
              </p>
              <p>
                <a href="#!" className="text-dark">Target Brands</a>
              </p>
              <p>
                <a href="#!" className="text-dark">Advertise with Us</a>
              </p>
            </div>
            {/* Grid column */}
            
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Help</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
                <a href="#!" className="text-dark">Target Help</a>
              </p>
              <p>
                <a href="#!" className="text-dark">Track Orders</a>
              </p>
              <p>
                <a href="#!" className="text-dark">Contact Us</a>
              </p>
              <p>
                <a href="#!" className="text-dark">Accessibility</a>
              </p>
            </div>
            {/* Grid column */}
            
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}
      
      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/"> https://khalafov.netlify.app/</a>
      </div>
      {/* Copyright */}
    </footer>
    // Footer
  // End of .container
);
}

export default Footer;
