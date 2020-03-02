import { PHONE_CARD_SELECTED } from "../../constants";

const PhoneCardComponent = (myState, { dispatch }) => {
  return (
    <div
      className="fx-item"
      on-click={() => {
        dispatch(PHONE_CARD_SELECTED, { selected: myState });
      }}
    >
      <div className="item-box">
        <div className="item-img">
          <div className="img-box">
            <img src={myState.img} />
          </div>
        </div>
        <div className="item-desc">
          <h2 className="item-name">{myState.name}</h2>
          <div className="item-details">
            <div className="detail-main">
              <div className="color">{myState.desc.capacity}GB</div>
              <div className="price">{myState.desc.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCardComponent;
