import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid p-0">
        <div className="row align-items-center">
          <div className="col-md-4 col-12">
            <img src="logo.png" alt="Logo" className="logo" />
          </div>
          <div className="col-md-4 col-12 text-center">
            <h1 className="site-title">Site Title</h1>
          </div>
          <div className="col-md-4 col-1">
            <img src="header-image.jpg" alt="Header Image" className="header-image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;