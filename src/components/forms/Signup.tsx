import "./styleForms.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imgFrom, Google } from "@/assets";

function Signup() {
  return (
    <>
      <div className="contLogin">
        <img className="imgFrom" src={imgFrom} />
        <div className="form-content">
          <h4 className="form-title">Create an account</h4>
          <p className="enter-details">Enter Your details below</p>
          <form className="form">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
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
            <div className="enter-signup">
              <Link to="/" replace={true} className="register-btn">
                Create an account
              </Link>
              <Link to="/" className="register-glg">
                <img src={Google} alt="google icon" className="icon-google" />
                Sign up with Google
              </Link>
               <Link to='/login' >
              <p className="already">Already have an account? <span>  Login </span></p>
            </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
