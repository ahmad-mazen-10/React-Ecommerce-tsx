import "./styleProduct.css";
// import {
//   playStation,
//   YellowStar,
//   GaryStar,
//   Wishlist,
//   delivary,
//   iconreturn,
//   view,
//   playStationR,
// } from "@/assets/index";
import { TProduct } from "@/types/product";



function Product({ title, price, img }: TProduct) {

  return (
    <div className="product">
      <img src={img} alt={title} className="productImg" />
      <h3 className="title" title={title}>{title}</h3>
      <p className="price">{price}</p>
    </div>
  );
}

export default Product;

    // <div className="productPage">
    //   <div className="topSection">
    //     <div className="imgContainer">
    //       <div className="smallImgs">
    //         <img className="smallImg" src={playStation} alt="Play" />
    //         <img className="smallImg" src={playStation} alt="Play" />
    //         <img className="smallImg" src={playStation} alt="Play" />
    //         <img className="smallImg" src={playStation} alt="Play" />
    //       </div>
    //       <img className="bigImg" src={playStation} alt="Play" />
    //     </div>
    //     <div className="productInfo">
    //       <h2>Havic HV G-92 Gamepad</h2>
    //       <div className="productRating">
    //         <img src={YellowStar} className="YellowStar" alt="YellowStar" />
    //         <img src={YellowStar} className="YellowStar" alt="YellowStar" />
    //         <img src={YellowStar} className="YellowStar" alt="YellowStar" />
    //         <img src={YellowStar} className="YellowStar" alt="YellowStar" />
    //         <img src={GaryStar} className="GaryStar" alt="GaryStar" />
    //         <span>(120 Reviews)</span>
    //       </div>
    //       <div className="productPrice">$192.00</div>
    //       <div className="productDescription">
    //         PlayStation 5 Controller Skin high-quality vinyl with air channel
    //         adhesive for easy bubble-free install & mass free removal texture
    //         sensitive.
    //       </div>
    //       <hr />
    //       <div className="product-options">
    //         <div className="productOption">
    //           <label htmlFor="color" className="colors">
    //             Colours:
    //           </label>
    //           <input type="radio" className="red" />
    //           <input type="radio" className="blue" />
    //         </div>
    //         <div className="sizeDiv">
    //           <label htmlFor="size" className="size">
    //             Size:
    //           </label>
    //           <div className="buyRow">
    //             <div className="quantity-selector">
    //               <button
    //                 className="selectSize"
    //                 onClick={() => setQuantity(quantity - 1)}
    //                 disabled={quantity === 1}
    //               >
    //                 -
    //               </button>
    //               <input
    //                 className="inputNumber"
    //                 type="number"
    //                 id="size"
    //                 value={quantity}
    //               />
    //               <button
    //                 className="plus selectSize"
    //                 onClick={() => setQuantity(quantity + 1)}
    //               >
    //                 +
    //               </button>
    //             </div>
    //             <button className="buyNow">Buy Now</button>
    //             <img src={Wishlist} className="Wishlist" alt="Wishlist" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="borderDelivary">
    //         <div className="delivary">
    //           <img src={delivary} alt="delivary" className="iconDelivary" />
    //           <div className="textDelivary">
    //             <h3>Free Delivery</h3>
    //             <p>Enter your postcode code for Delivery Availability</p>
    //           </div>
    //         </div>
    //         <hr />
    //         <div className="delivary">
    //           <img src={iconreturn} alt="iconreturn" className="iconreturn" />
    //           <div className="textReturn">
    //             <h3>Return Delivery</h3>
    //             <p>Free 30 Days Delivery Return Details</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <h3 className="relatedItems">Related Items</h3>
    //   <div className="anotherProducts">
        
    //     <div className="oneproduct">
    //         <div className="headProduct">
    //           <span className="rate">-35%</span>
    //           <div className="wish_view">
    //             <a href="">
    //               <img src={Wishlist} className="Wishlist" alt="Wishlist" />
    //             </a>
    //             <a href="">
    //               <img src={view} className="view" alt="view" />
    //             </a>
    //           </div>
    //         </div>
    //         <img src={playStationR} alt="Product Image 1" className="productImg" />
    //       <div className="info">
    //         <h5>AX-900 Wired Keyboard</h5>
    //         <div className="price">
    //           $500 <s>$1160</s>
    //         </div>
    //         <div className="rating">
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={GaryStar} className="star" alt="GaryStar" />
    //           <span>(88)</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="oneproduct">
    //         <div className="headProduct">
    //           <span className="rate">-35%</span>
    //           <div className="wish_view">
    //             <a href="">
    //               <img src={Wishlist} className="Wishlist" alt="Wishlist" />
    //             </a>
    //             <a href="">
    //               <img src={view} className="view" alt="view" />
    //             </a>
    //           </div>
    //         </div>
    //         <img src={playStationR} alt="Product Image 1" className="productImg" />
    //       <div className="info">
    //         <h5>AX-900 Wired Keyboard</h5>
    //         <div className="price">
    //           $500 <s>$1160</s>
    //         </div>
    //         <div className="rating">
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={GaryStar} className="star" alt="GaryStar" />
    //           <span>(88)</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="oneproduct">
    //         <div className="headProduct">
    //           <span className="rate">-35%</span>
    //           <div className="wish_view">
    //             <a href="">
    //               <img src={Wishlist} className="Wishlist" alt="Wishlist" />
    //             </a>
    //             <a href="">
    //               <img src={view} className="view" alt="view" />
    //             </a>
    //           </div>
    //         </div>
    //         <img src={playStationR} alt="Product Image 1" className="productImg" />
    //       <div className="info">
    //         <h5>AX-900 Wired Keyboard</h5>
    //         <div className="price">
    //           $500 <s>$1160</s>
    //         </div>
    //         <div className="rating">
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={YellowStar} className="star" alt="YellowStar" />
    //           <img src={GaryStar} className="star" alt="GaryStar" />
    //           <span>(88)</span>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </div>