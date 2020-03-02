import { QUANTITY_CHANGED } from "../../constants";

const handleQuantityChanged = ({ action, updateState }) => {
  updateState({
    quantity: action.payload.newQuantity
  });
};

export default {
  [QUANTITY_CHANGED]: handleQuantityChanged
};
