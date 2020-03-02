import { PHONE_CARD_SELECTED, PHONE_SELECTED } from "../../constants";

const handlePhoneCardSelected = ({ dispatch, action }) => {
  dispatch(PHONE_SELECTED, { ...action.payload });
};

export default {
  [PHONE_CARD_SELECTED]: handlePhoneCardSelected
};
