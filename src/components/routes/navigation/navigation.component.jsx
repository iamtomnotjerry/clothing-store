import { Fragment, useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Cloth } from '../../../assets/shirt-solid.svg'
import CartIcon from "../../card-icon/card-icon.component";
import './navigation.style.scss'
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../../contexts/cart.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
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
          {
            currentUser ? (<span className="nav-link" onClick={signOutUser}>{' '}SIGN OUT{' '}</span>) : (<Link className="nav-link" to='/auth'>SIGN IN</Link>)
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown  />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
