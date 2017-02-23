import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="rows">
        <div className="col-sm-3">
          <h3>Customer Care</h3>
          <ul>
            <li><Link to="">Contact us</Link></li>
            <li><Link to="">FAQ</Link></li>
            <li><Link to="">Shipping</Link></li>
            <li><Link to="">Returns & Exchanges</Link></li>
            <li><Link to="">Product Education</Link></li>
            <li><Link to="">Watch Buying Guide</Link></li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h3>Company Info</h3>
          <ul>
            <li><Link to="">About us</Link></li>
            <li><Link to="">Authenticity Guarantee</Link></li>
            <li><Link to="">Privacy Policy</Link></li>
            <li><Link to="">Earn with us</Link></li>
            <li><Link to="">Sell to us</Link></li>
            <li><Link to="">Testimonial</Link></li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h3>Delivery Services</h3>
          <ul>
          </ul>
        </div>
        <div className="col-sm-3">
          <h3>Accepted Payment Methods</h3>
          <ul>
          </ul>
        </div>
        <div className="col-sm-3">
          <h3>Verified By</h3>
          <ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
