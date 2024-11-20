import { Fragment } from "react";
import food_image from "../../assets/1000_F_712884560_Yo8EBdcoAApSFKvIjt5ZMoaxhPFUMyOh.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>Meals</h1>
        {/* Pass onshowCart to HeaderCardButton */}
        <HeaderCardButton onClick={props.onshowCart} />
      </header>
      <div>
        <img src={food_image} alt="Delicious Food" />
      </div>
    </Fragment>
  );
};

export default Header;
