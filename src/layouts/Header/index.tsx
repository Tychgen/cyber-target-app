import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Geo, Building } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <header className="bg-danger text-white py-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Geo className="mx-2" />
            <span>52404</span>
            <Building className="mx-2" />
            <span>Cedar Rapids South</span>
          </div>
          <div>
            <Link to="/registry" className="text-white mx-2">Registry</Link>
            <Link to="/weeklyad" className="text-white mx-2">Weekly Ad</Link>
            <Link to="/redcard" className="text-white mx-2">RedCard</Link>
            <Link to="/targetcircle" className="text-white mx-2">Target Circle</Link>
            <Link to="/findstores" className="text-white mx-2">Find Stores</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
