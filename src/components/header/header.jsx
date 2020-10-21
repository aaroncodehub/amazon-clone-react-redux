import React from "react";
import { selectUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import RouterLink from "../link/RouterLink";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Place } from "../../assets/place.svg";
import logo from "../../assets/header-logo.png";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { auth } from "../../firebase.utils";
import { selectCartItemsCount } from "../../redux/cartSelector";

const Header = () => {
  const user = useSelector(selectUser);
  const cartCount = useSelector((state) => selectCartItemsCount(state));

  const signOut = () => {
    if (user) auth.signOut();
  };

  return (
    <>
      <div className="header">
        <div className="header__menu">
          <Menu className="header__menu__icon" />
        </div>
        <RouterLink to="/">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
        </RouterLink>
        <div className="header__search">
          <InputGroup>
            <InputGroup.Prepend>
              <Form.Control as="select" className="header__search__category">
                <option>All</option>
                <option>Arts & Crafts</option>
                <option>Automotive</option>
                <option>Baby</option>
                <option>Beauty & Personal Care</option>
                <option>Baby</option>
                <option>Books</option>
                <option>Computers</option>
                <option>Electronics</option>
                <option>Kindle Store</option>
                <option>Prime Video</option>
              </Form.Control>
            </InputGroup.Prepend>
            <FormControl aria-label="search" aria-describedby="search" />
            <SearchIcon className="header__search__icon" />
          </InputGroup>
        </div>

        <div className="header__nav">
          <RouterLink to={!user ? "/auth" : ""}>
            <div onClick={signOut} className="header__nav__option">
              <span>Hello {user ? user.name : "Guest"} </span>
              <span>{user ? "Sign Out" : "Sign In"}</span>
            </div>
          </RouterLink>

          <div className="header__nav__option">
            <span>returns</span>
            <span>&orders</span>
          </div>
          <RouterLink to="/checkout">
            <div className="header__nav__cart">
              <span>{cartCount}</span>
              <Cart className="header__nav__cart__icon" />
            </div>
          </RouterLink>
        </div>
      </div>
      <div className="sub-header">
        <div className="sub-header__deliver">
          <Place className="sub-header__deliver__icon" />
          <div className="sub-header__deliver__info">
            <span>Deliver to</span>
            <span>New Zealand</span>
          </div>
        </div>
        <div className="sub-header__link">
          <span>Today's Deals</span>
          <span>Customer Service</span>
          <span>Gift Cards</span>
          <span>Registry</span>
          <span>Sell</span>
        </div>
        <div className="sub-header__notice">
          <span>Amazon's response to COVID-19</span>
        </div>
      </div>
    </>
  );
};

export default Header;
