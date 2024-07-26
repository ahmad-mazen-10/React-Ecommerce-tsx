import './styleContact.css'
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { iconCall, iconMail } from "@/assets";



function Contact() {
  return (
    <>
      <div className="contContact">
        <div className="leftBox">
          <Col>
            <div className="call one">
              <Row className="call to">
                <div className="iconDiv">
                  <img
                    src={iconCall}
                    alt="iconCall"
                    className="iconCall"
                  />
                </div>
                <h5>Call To Us</h5>
              </Row>
              <div className="txt">
                <p className="available">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="phone">Phone : +880161111222 </p>
              </div>
            </div>
            <hr />

            <div className="write one">
              <Row className="mail to">
                <div className="iconDiv">
                  <img
                    src={iconMail}
                    alt="iconMail"
                    className="iconMail"
                  />
                </div>
                <h5>Write To Us</h5>
              </Row>
              <div className="txt">
                <p className="available">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="mail-customer">Emails: customer@exclusive.com </p>
                <p className="mail-support">Emails: support@exclusive.com </p>
              </div>
            </div>
          </Col>
        </div>

        
        <div className="rightBox">
        <div className="inputs">
          <Row className='rowInputs'>
            <input  className="nameInput"  type="text"  placeholder="You Name"  required/>
            <input  className="mailInput"  type="email"  placeholder="You Email"  required/>
            <input  className="phoneInput"  type="phone"  placeholder="You Phone"  required/>
          </Row>
          <textarea placeholder="Your Masaage" className='textarea' />
        </div>
        <Link to="/" replace={true} className="send">
          Send Massage
        </Link>
      </div>
      </div>
    </>
  );
}

export default Contact;
