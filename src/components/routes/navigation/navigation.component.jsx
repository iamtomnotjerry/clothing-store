import { Fragment, useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Cloth } from '../../../assets/shirt-solid.svg'
import CartIcon from "../../card-icon/card-icon.component";
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.style.jsx'
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../../contexts/cart.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <div><Cloth className='logo'/></div>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (<NavLink as='span' onClick={signOutUser}>{' '}SIGN OUT{' '}</NavLink>) : (<NavLink to='/auth'>SIGN IN</NavLink>)
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown  />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
