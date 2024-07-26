import "./header.css";
import { Navbar, Nav} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Wishlist, Cart, User, iconSearch, close ,toggle} from "@/assets";
import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
let element = document.querySelector(".toggle");
if (element) {
  element.classList.toggle("hide");
}    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <Navbar className="navbar">
          <div className="content">
            <Navbar.Brand href="#" className="logo">
              Exclusive
            </Navbar.Brand>
            <Nav className="nav notToggle">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup">
                Sign Up
              </Nav.Link>
            </Nav>
            <Nav className="nav toggle ">
                  <img src={toggle} alt=" menu toggle" className="menu" onClick={()=>toggleNavbar()} />
              <ul className="navToggle hide">
                <li>
                  <Nav.Link as={NavLink} to="/">
                    Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/contact">
                    Contact
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/about">
                    About
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={NavLink} to="/signup">
                    Sign Up
                  </Nav.Link>
                </li>
              </ul>
            </Nav>
            <div className="right">
              <input
                type="search"
                name=""
                className="navSearch"
                placeholder="what"
                id=""
              />
              <img
                src={iconSearch}
                alt="iconSearch"
                className="iconSearch iconNav"
              />
              <Link to="/">
                <img src={Wishlist} alt="wishlist" className="iconNav" />{" "}
              </Link>
              <Link to="/">
                <img src={Cart} alt="Cart" className="iconNav" />{" "}
              </Link>
              <Link to="/">
                <img src={User} alt="User" className="iconNav" />{" "}
              </Link>
            </div>
          </div>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
