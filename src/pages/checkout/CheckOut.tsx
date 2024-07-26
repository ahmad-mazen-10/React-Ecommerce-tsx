import { Link } from 'react-router-dom';
import './styles.css'
import { imgProduct, visa, masterCard, nagad, Bkash } from "@/assets";

function CheckOut() {
  return (
    <>
      <div className="d-f">
        <div className="leftContent">
          <h4 className="details">Billing Details</h4>

          <div className="form">
            <form className="form" action="/profile" method="post">
              <div className="oneInput">
                <label htmlFor="name">Frist Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="oneInput">
                <label htmlFor="name">Company Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="oneInput">
                <label>Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                />
              </div>
              <div className="oneInput">
                <label htmlFor="address">
                  Apartment, floor, etc. (optional){" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                />
              </div>
              <div className="oneInput">
                <label htmlFor="address">Town/City </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                />
              </div>
              <div className="oneInput">
                <label htmlFor="address">Phone</label>
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="oneInput">
                <label htmlFor="address">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <input
                className='checkInfo'
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                value="info"
              />
              <label htmlFor="saveInfo">
                Save this information for faster check-out next time
              </label>
            </form>

          </div>
        </div>
        <div className="rightContent">
          <div>
            <div className="product">
              <img src={imgProduct} alt="img product" className="imgProduct" />
              <h6 className="productName">LCD Monitor</h6>
              <h6 className="productPRice">$560</h6>
            </div>
            <div className="product">
              <img src={imgProduct} alt="img product" className="imgProduct" />
              <h6 className="productName">LCD Monitor</h6>
              <h6 className="productPRice">$560</h6>
            </div>

            <div className="subtotal money">
              <h6 className="subtotalTitle">Subtotal</h6>
              <h6 className="subtotalPrice">$560</h6>
            </div>
            <hr />

            <div className="shipping money">
              <h6 className="shippingTitle">Subtotal</h6>
              <h6 className="shippingPrice">Free</h6>
            </div>
            <hr />

            <div className="total money">
              <h6 className="totalTitle">Total</h6>
              <h6 className="totalPrice">Free</h6>
            </div>
            <div className="bank">
              <div className="inputBank">
                <input type="radio" name="Bank" id="Bank" />
                <label htmlFor="Bank" className="labelBank ml-16">
                  Bank
                </label>
              </div>
              <div className="iconsBank">
                <Link to='/' ><img src={Bkash} alt="img bank" className="imgPayBank" /></Link>
                <Link to='/' ><img src={visa} alt="img bank" className="imgPayBank" /> </Link>
                <Link to='/' ><img src={masterCard} alt="img bank" className="imgPayBank" /> </Link>
                <Link to='/' ><img src={nagad} alt="img bank" className="imgPayBank" /> </Link>
              </div>
            </div>
            <div className="cash">
              <input type="radio" name="cash" id="cash" />
              <label htmlFor="cash" className="ml-16">
                Cash on delivary
              </label>
            </div>
            <div className="apply">
              <input className="couponCode" placeholder="Coupon Code" />
              <button type="submit" className="applyCoupon">
                Apply Coupon
              </button>
            </div>
            <button type="submit" className="placeOrder">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
