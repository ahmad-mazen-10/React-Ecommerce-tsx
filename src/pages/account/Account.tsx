import './styles.css'
import { Col, Row } from "react-bootstrap"


function About() {
  return (
    <>
      <div className="allContent">
      <aside className='sidebar'>

        <h4 className="sideBarTitle">Manage My Account</h4>
        <ul className="items">
          <li><a href="/profile" className='active'>My Profile</a></li>
          <li><a href="/">Address Book</a></li>
          <li><a href="/">My Payment Options</a></li>
        </ul>

        <h4 className="sideBarTitle">My Order</h4>
        <ul className="items">
          <li><a href="/">My Return</a></li>
          <li><a href="/">My Cancellation</a></li>
        </ul>

        <h4 className="sideBarTitle">My WishList</h4>
      </aside>
      
      <div className="content">
        <h4 className="edit">Edit Your Profile</h4>

        <div className="form">
          <form className="form" action="/profile" method="post">
              <Row className='row'>
                <div className="oneInput">
                  <label htmlFor="name">Frist Name</label>
                   <input type="text" placeholder="Md" className="form-control" id="f-name" name="f-name" />
                </div>
                <div className="oneInput">
                  <label htmlFor="name">Last Name</label>
                  <input type="text" placeholder="Rimel" className="form-control" id="f-name" name="f-name" />
                </div>
              </Row>              
            <Row className='row'>
              <div className="oneInput">
                  <label htmlFor="email">Email</label>
                   <input type="email" placeholder="user@gmail.com" className="form-control" id="email" name="email" />
              </div>
              <div className="oneInput">
                  <label htmlFor="address">Address</label>
                  <input type="text" placeholder="Mansoura, Egypt" className="form-control" id="address" name="address" />
              </div>
            </Row>
            <Col>
              <label htmlFor="password">Password Changes</label>
              <input type="password" placeholder="Current Password" className="form-control" id="password"  />
              <input type="password" placeholder="New Password" className="form-control" id="password"  />
              <input type="password" placeholder="Confirm New Password" className="form-control" id="password"  />
              </Col>
              <div className="buttons">
                <button type="reset" className="cancelBtn">Cancel</button>
                <button type="submit" className="saveBtn">Save Changes</button>
              </div>
          </form>
        </div>
       </div>
      </div>
    </>
  )
}

export default About
