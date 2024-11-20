import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartshow, setCartshown] = useState(false);

  const showCart = () => {
    setCartshown(true);
  };
  const notshowCart = () => {
    setCartshown(false);
  }

  return (
    <Fragment>
      {/* Render the Cart component when cartshow is true */}
      {cartshow && <Cart onClose={notshowCart} />}
      {/* Pass showCart to Header */}
      <Header onshowCart={showCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
