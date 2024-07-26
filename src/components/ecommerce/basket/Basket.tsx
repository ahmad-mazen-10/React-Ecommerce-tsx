import Logo from "../../../assets/basket";

import "./styleBasket.css";

const HeaderBasket = () => {
  return (
    <div className='basketContainer'>
      <Logo title="basket icon" />
      <div className='basketQuantity'>0</div>
    </div>
  );
};

export default HeaderBasket;
