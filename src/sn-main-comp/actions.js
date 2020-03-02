import { PHONE_LIST_FETCHED } from "./constants";
import phoneCardActions from "./components/phoneCard/actions";

export default {
  ...phoneCardActions,
  [PHONE_LIST_FETCHED]: {
    private: true
  }
};
