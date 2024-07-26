// import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  Send,
  AppStore,
  GooglePlay,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Qr,
} from "@/assets/index";
import { Col, Row } from "react-bootstrap";


function Footer() {


  return (
    <>
      <footer className="footer">
        <div className="footer-column">
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="footer-search">
            <input className="inputSearch" type="email" placeholder="Enter your email" />
            <Link to="/" >
              <img src={Send} alt="send icon" className="iconSend" />
            </Link>
          </div>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p>
            <Link to="mailto:exclusive@gmail.com">exclusive@gmail.com</Link>
          </p>
          <p>
            <Link to="tel:+88015-88888-9999">+88015-88888-9999</Link>
          </p>
        </div>

        <div className="footer-column">
          <h3>Account</h3>
          <ul>
            <li>
              {" "}
              <Link to="/">My Account</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">Login / Register</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">Cart</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">Wishlist</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">Shop</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms Of Use</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <Row>
            <img src={Qr} className="qr" alt="QR Code" />
            <Col className="word-play">
            <a>
              <img src={AppStore} alt="App Store" />
            </a>
            <a>
              <img src={GooglePlay} alt="App Store" />
            </a>
            </Col>
          </Row>
          <div className="social">
            <a href='/'>
              <img src={Facebook} alt="Facebook" className="social-icon" />
            </a>
            <a href='/'>
              <img src={Twitter} alt="Twitter" className="social-icon" />
            </a>
            <a href='/'>
              <img src={Instagram} alt="Instagram" className="social-icon" />
            </a>
            <a href='/'>
              <img src={Linkedin} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; Copyright Rimel 2024. All right reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

{
  /* 
    // <div className="footerContainer">
    //   <div className="footer">
    //     <div className="col-1">
    //       <h3 className="footer-title">Exclusive</h3>
    //       <p className="subscribe">Subscribe</p>
    //       <p className="discount">Get 10% off your frist oder</p>
    //       <div className="input-search">
    //         <input type="search" placeholder="Enter your email" />
    //         <img src={element} alt="Send Icon" />
    //         <span>
    //           <i className="fa-solid fa-user"></i>
    //         </span>
    //       </div>
    //     </div>
    //     <div className="col-2"> 
    //       <h4 className="footer-title">Support</h4>
    //       <p className="address txt-footer">
    //         111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
    //       </p>
    //       <p className="txt-footer" typeof="email">
    //         exclusive@gmail.com
    //       </p>
    //       <p className="txt-footer">+880 123 456 789</p>
    //     </div>
    //     <div className="col-3">
    //       <h4 className="footer-title">My Account</h4>
    //       <p className="auth txt-footer">Login / Register </p>
    //       <p className="cart txt-footer">Cart </p>
    //       <p className="wishlist txt-footer">Wishlist</p>
    //       <p className="shop txt-footer">Shop</p>
    //     </div>
    //     <div className="col-4">
    //       <h4 className="footer-title">Quick Link</h4>
    //       <p className="txt-footer">Privacy Policy </p>
    //       <p className="txt-footer">Terms Of Use </p>
    //       <p className="txt-footer">FAQ</p>
    //       <p className="txt-footer">Contact</p>
    //     </div>
    //     <div className="col-5">
    //       <h4 className="footer-title">Download App</h4>
    //       <p>Save $3 with App New User Only</p>
    //       <Row className="img-container">
    //         <img src={qr} />
    //         <Col className="store-app">
    //           <img src={appStore} />
    //           <img src={googlePlay} />
    //         </Col>
    //       </Row>
    //       <Row className="social-container">
    //         <img src={facebook} />
    //         <img src={twitter} />
    //         <img src={instagram} />
    //         <img src={linkedin} />
    //       </Row>
    //     </div>
    //   </div>
    //   <div className="copy-right">Copyright © 2020</div>
    // </div> */
}
