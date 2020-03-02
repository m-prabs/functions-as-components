const CartComponent = (state, helpers) => {
  const { selectedPhone } = state;
  return (
    <div className="wrap cf">
      <div className="heading cf">
        <h1>My Cart</h1>
        <a href="#" className="continue">
          Continue Shopping
        </a>
      </div>
      {selectedPhone.id ? (
        <div>
          <div className="cart">
            <ul className="cartWrap">
              <li className="items odd">
                <div className="infoWrap">
                  <div className="cartSection">
                    <img src={selectedPhone.img} alt="" className="itemImg" />
                    <p className="itemNumber">#QUE-007544-{selectedPhone.id}</p>
                    <h3>{selectedPhone.name}</h3>
                    <input
                      type="text"
                      className="qty"
                      value={state.quantity}
                    />{" "}
                    x {selectedPhone.desc.price}
                    <p className="stockStatus"> In Stock</p>
                  </div>

                  <div className="prodTotal cartSection">
                    <p>{selectedPhone.desc.price}</p>
                  </div>
                  <div className="cartSection removeWrap">
                    <a href="#" className="remove">
                      x
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="subtotal cf">
            <ul>
              <li className="totalRow">
                <a href="#" className="btn continue">
                  Checkout
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>Please select a phone</div>
      )}
    </div>
  );
};
export default CartComponent;
