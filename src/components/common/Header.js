import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">HOME</IndexLink>
      {" | "}
      <Link to="/brands" activeClassName="active">BRANDS</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">MEN'S</Link>
      {" | "}
      <Link to="/womens" activeClassName="active">WOMEN'S</Link>
      {" | "}
      <Link to="/about" activeClassName="active">GET QUOTE FOR WATCHES</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
