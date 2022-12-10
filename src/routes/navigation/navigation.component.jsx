import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import Logo from '../../components/assets/Logo.png'
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <img src={Logo} className='logo' alt="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
