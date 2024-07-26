import './styleForms.css'
import { Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { imgFrom } from '@/assets';

function Login() {
  return (
    <>
      <div className="contLogin">
        <img className="imgFrom" src={imgFrom} />
        <div className="form-content">
          <h4 className="form-title">Login to Exclusive</h4>
          <p className="enter-details">Enter Your details below</p>
          <form className="form">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email or phone Number"
            />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <Row className="enter-login">
              <Link to="/" replace={true} className="login-btn">
                Login
              </Link>
              <h6 className="forget-password">Forget Password?</h6>
            </Row>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login