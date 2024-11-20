import Modal from "../UI/Model";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", amount: 34, price: 12.99, name: "Sushi" }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  const totalAmount = 35.54;
  return (
    <Modal>
      {cartItems}
      <div>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>
      <button onClick={props.onClose}>Close</button> {/* Close button */}
      <button>Order</button> {/* Order button */}
    </Modal>
  );
};

export default Cart;
