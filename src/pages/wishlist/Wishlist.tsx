import "./styleWishlist.css";
import { playStationR,YellowStar,GaryStar } from "@/assets/index";


function Wishlist () {
  return (
    <div className="container">
      <div className="wishlist-header">
        <h2>Wishlist (4)</h2>
        <button className="move-all-to-bag">Move All To Bag</button>
      </div>
      <div className="wishlist-items">
        <div className="wishlist-item">
          <div className="product-image">
            <div className="discount">-35%</div>
            <img src={playStationR} alt="Gucci Duffle Bag" />
          </div>
          <div className="product-info">
            <h3>Gucci duffle bag</h3>
            <p className="price">
              $960 <span className="original-price">$1160</span>
            </p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
        <div className="wishlist-item">
          <div className="product-image">
            <img src={playStationR} alt="RGB Liquid CPU Cooler" />
          </div>
          <div className="product-info">
            <h3>RGB liquid CPU Cooler</h3>
            <p className="price">$1960</p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
        <div className="wishlist-item">
          <div className="product-image">
            <img src={playStationR} alt="GP11 Shooter USB Gamepad" />
          </div>
          <div className="product-info">
            <h3>GP11 Shooter USB </h3>
            <p className="price">$550</p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
        <div className="wishlist-item">
          <div className="product-image">
            <img src={playStationR} alt="Quilted Satin Jacket" />
          </div>
          <div className="product-info">
            <h3>Quilted Satin Jacket</h3>
            <p className="price">$750</p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="just-for-you">
        <div className="head">

        <div className="title">Just For You</div>
        <button className="see-all">See All</button>
        </div>

        <div className="wishlist-items">
          <div className="wishlist-item">
            <div className="product-image">
              <img src={playStationR} alt="ASUS FHD Gaming Laptop" />
              <div className="discount">-35%</div>
            </div>
            <div className="product-info">
              <h3>ASUS FHD Gaming Laptop</h3>
              <p className="price">
                $960 <span className="original-price">$1160</span>
              </p>
              <div className="rating">
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                <span className="review-count">(65)</span>
              </div>
              <button className="add-to-cart">Add To Cart</button>
            </div>
          </div>
          <div className="wishlist-item">
            <div className="product-image">
              <img src={playStationR} alt="IPS LCD Gaming Monitor" />
            </div>
            <div className="product-info">
              <h3>IPS LCD Gaming Monitor</h3>
              <p className="price">$1160</p>
              <div className="rating">
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                <span className="review-count">(65)</span>
              </div>
              <button className="add-to-cart">Add To Cart</button>
            </div>
          </div>
          <div className="wishlist-item">
            <div className="product-image">
              <img src={playStationR} alt="HAVIT HV-G92 Gamepad" />
              <div className="discount">NEW</div>
            </div>
            <div className="product-info">
              <h3>HAVIT HV-G92 Gamepad</h3>
              <p className="price">$560</p>
              <div className="rating">
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                <span className="review-count">(65)</span>
              </div>
              <button className="add-to-cart">Add To Cart</button>
            </div>
          </div>
          <div className="wishlist-item">
            <div className="product-image">
              <img src={playStationR} alt="AK-900 Wired Keyboard" />
            </div>
            <div className="product-info">
              <h3>AK-900 Wired Keyboard</h3>
              <p className="price">$200</p>
              <div className="rating">
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={YellowStar} className="YellowStar" alt="YellowStar" />
                <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                <span className="review-count">(65)</span>
              </div>
              <button className="add-to-cart">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
