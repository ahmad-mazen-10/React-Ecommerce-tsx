import {
  GaryStar,
  YellowStar,
  DropDown,
  CoverHome,
  AppleLogo,
  playStationR,
  phone,
  Computer,
  SmartWatch,
  Camera,
  Headphone,
  Gamepad,
  Bookself,
  JBL_BOOMBOX,
  DigCamera,
} from "@/assets/index";
import "./home.css";

function Home() {
  return (
    <div className="app-container">
      <section className="sec">
        <aside className="sidebar">
          <ul>
            <li>
              Woman's Fashion
              <img src={DropDown} alt="Dropdown" className="dropdown" />
            </li>
            <li>
              Men's Fashion
              <img src={DropDown} alt="Dropdown" className="dropdown" />
            </li>
            <li>Electronics</li>
            <li>Meddicin</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </aside>

        <div className="mainTop">
          <div className="left">
            <div className="apple">
              <img src={AppleLogo} alt="Apple Logo" className="logo" />
              <p className="iphone txt-text">iphone 14 Series</p>
            </div>
            <span className="txt-text">Up to 10% off Voucher</span>
          </div>
          <img src={CoverHome} alt="CoverHome" className="CoverHome" />
        </div>
      </section>

      <div className="main-content">
        <section className="flash-sales">
          <h2>Flash Sales</h2>
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
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                  <span className="review-count">(65)</span>
                </div>
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
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                  <span className="review-count">(65)</span>
                </div>
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
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                  <span className="review-count">(65)</span>
                </div>
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
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                  <span className="review-count">(65)</span>
                </div>
              </div>
            </div>
            <button className="shopBtn">View All Products</button>
          </div>
        </section>

        <section className="categories">
          <h2>Browse By Category</h2>
          <div className="cats">
            <div className="oneCat">
              <img src={phone} alt="phone" className="icon" />
              <h4 className="decs"> Phones</h4>
            </div>
            <div className="oneCat">
              <img src={Computer} alt="Computer" className="icon" />
              <h4 className="decs"> Computer</h4>
            </div>
            <div className="oneCat">
              <img src={SmartWatch} alt="SmartWatch" className="icon" />
              <h4 className="decs"> SmartWatch</h4>
            </div>
            <div className="oneCat active">
              <img src={Camera} alt="Camera" className="icon" />
              <h4 className="decs"> Camera</h4>
            </div>
            <div className="oneCat">
              <img src={Headphone} alt="Headphone" className="icon" />
              <h4 className="decs"> Headphone</h4>
            </div>
            <div className="oneCat">
              <img src={Gamepad} alt="Gamepad" className="icon" />
              <h4 className="decs"> Gamepad</h4>
            </div>
          </div>
        </section>
        <br />
        <hr />

        <section className="best-selling">
          <div className="headprod">
            <h2>Best Selling Products</h2>
            <button>View More</button>
          </div>

          <div className="selling_products">
            <div className="prod">
              <img src={Bookself} alt="Bookself" className="imgproduct " />
              <div className="product-info">
                <div className="">-35%</div>
                <h3>Bookself</h3>
                <p className="price">
                  $960 <span className="original-price">$1160</span>
                </p>
                <div className="rating">
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                  <span className="review-count">(65)</span>
                </div>
              </div>
            </div>

            <div className="prod">
              <img src={Bookself} alt="Bookself" className="imgproduct " />
              <div className="product-info">
                <div className="">-35%</div>
                <h3>Bookself</h3>
                <p className="price">
                  $960 <span className="original-price">$1160</span>
                </p>
                <div className="rating">
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                  <span className="review-count">(65)</span>
                </div>
              </div>
            </div>

            <div className="prod">
              <img src={Bookself} alt="Bookself" className="imgproduct " />
              <div className="product-info">
                <div className="">-35%</div>
                <h3>Bookself</h3>
                <p className="price">
                  $960 <span className="original-price">$1160</span>
                </p>
                <div className="rating">
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                  <span className="review-count">(65)</span>
                </div>
              </div>
            </div>

            <div className="prod">
              <img src={Bookself} alt="Bookself" className="imgproduct " />
              <div className="product-info">
                <div className="">-35%</div>
                <h3>Bookself</h3>
                <p className="price">
                  $960 <span className="original-price">$1160</span>
                </p>
                <div className="rating">
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img
                    src={YellowStar}
                    className="YellowStar"
                    alt="YellowStar"
                  />
                  <img src={GaryStar} className="GaryStar" alt="GaryStar" />
                  <span className="review-count">(65)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="enhance">
          <img src={JBL_BOOMBOX} alt="Music Speaker" />

          <div className="content_enhance">
            <h2>Enhance Your Music Experience</h2>

            <button>Buy Now</button>
          </div>
        </section>

        {/* <section className="explore-products">
          <h2>Explore Our Products</h2>
          <div className="explore-products-grid">
            <div className="product">
              <img src="product9.jpg" alt="Product 9" />
              <h3>Product 9</h3>
              <p>Price: $90</p>
              <div className="rating">
                <span>★★★★☆</span>
                <span>(4.0)</span>
              </div>
            </div>
            <div className="product">
              <img src="product10.jpg" alt="Product 10" />
              <h3>Product 10</h3>
              <p>Price: $100</p>
              <div className="rating">
                <span>★★★★★</span>
                <span>(5.0)</span>
              </div>
            </div>
            <div className="product">
              <img src="product11.jpg" alt="Product 11" />
              <h3>Product 11</h3>
              <p>Price: $110</p>
              <div className="rating">
                <span>★★★★☆</span>
                <span>(4.0)</span>
              </div>
            </div>
            <div className="product">
              <img src="product12.jpg" alt="Product 12" />
              <h3>Product 12</h3>
              <p>Price: $120</p>
              <div className="rating">
                <span>★★★★★</span>
                <span>(5.0)</span>
              </div>
            </div>
            <div className="product">
              <img src="product13.jpg" alt="Product 13" />
              <h3>Product 13</h3>
              <p>Price: $130</p>
              <div className="rating">
                <span>★★★★☆</span>
                <span>(4.0)</span>
              </div>
            </div>
            <div className="product">
              <img src="product14.jpg" alt="Product 14" />
              <h3>Product 14</h3>
              <p>Price: $140</p>
              <div className="rating">
                <span>★★★★★</span>
                <span>(5.0)</span>
              </div>
            </div>
            <div className="product">
              <img src="product15.jpg" alt="Product 15" />
              <h3>Product 15</h3>
              <p>Price: $150</p>
              <div className="rating">
                <span>★★★★☆</span>
                <span>(4.0)</span>
              </div>
            </div>
            <div className="product">
              <img src="product16.jpg" alt="Product 16" />
              <h3>Product 16</h3>
              <p>Price: $160</p>
              <div className="rating">
                <span>★★★★★</span>
                <span>(5.0)</span>
              </div>
            </div>
          </div>
          <button>Shop Products</button>
        </section>

        <section className="new-arrival">
          <h2>New Arrival</h2>
          <div className="new-arrival-products">
            <div className="product">
              <img src="product17.jpg" alt="Product 17" />
              <h3>Product 17</h3>
              <p>Price: $170</p>
            </div>
            <div className="product">
              <img src="product18.jpg" alt="Product 18" />
              <h3>Product 18</h3>
              <p>Price: $180</p>
            </div>
            <div className="product">
              <img src="product19.jpg" alt="Product 19" />
              <h3>Product 19</h3>
              <p>Price: $190</p>
            </div>
            <div className="product">
              <img src="product20.jpg" alt="Product 20" />
              <h3>Product 20</h3>
              <p>Price: $200</p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default Home;
