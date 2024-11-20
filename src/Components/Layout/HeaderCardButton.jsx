import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";

const HeaderCardButton = (props) => {
  return (
    <Fragment>
      <button onClick={props.onClick}>
        <span>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span>3</span> {/* Example for badge */}
      </button>
    </Fragment>
  );
};

export default HeaderCardButton;
