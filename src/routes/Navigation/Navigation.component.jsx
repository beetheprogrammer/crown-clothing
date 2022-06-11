import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/Cart-Dropdown/Cart-Dropdown.component';
import CartIcon from '../../components/Cart-Icon/Cart-Icon.component';
import { CartContext } from '../../context/cart.context';
import { UserContext } from '../../context/User.context';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import "./Navigation.styles.scss"

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);

  return (
		<>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrownLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</>
	);
}

export default Navigation