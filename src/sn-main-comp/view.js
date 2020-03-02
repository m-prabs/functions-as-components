import PhoneCard from "./components/phoneCard";
import CartComponent from "./components/cart";

export default (state, helpers) => {
  console.log(state);
  if (state.phoneList.length < 1) return;
  return (
    <div>
      <div className="container fx">
        <h1>Available iPhone Models</h1>
        <div className="content-main">
          <div className="fx-container">
            {state.phoneList.map(phone => PhoneCard(phone, helpers))}
          </div>
          <div className="fx-cart">
            <div>{CartComponent(state, helpers)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
