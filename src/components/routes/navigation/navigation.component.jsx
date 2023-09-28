import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Cloth } from '../../../assets/shirt-solid.svg'
import './navigation.style.scss'
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <div><Cloth className='logo'/></div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN 
          </Link>

        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
