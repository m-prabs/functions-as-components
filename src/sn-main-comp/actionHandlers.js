import { actionTypes } from "@servicenow/ui-core";
import list from "../../resources/list";
const { COMPONENT_RENDERED } = actionTypes;
import phoneCardActionHandlers from "./components/phoneCard/actionHandlers";
import { PHONE_LIST_FETCHED, PHONE_SELECTED } from "./constants";

const fetchPhoneList = ({ dispatch }) =>
  dispatch(PHONE_LIST_FETCHED, { data: list.results });

const processData = ({ action, updateState }) => {
  const { payload } = action;
  updateState({
    phoneList: payload.data
  });
};

const handlePhoneSelected = ({ action, updateState }) => {
  updateState({
    selectedPhone: action.payload.selected
  });
};

export default {
  ...phoneCardActionHandlers,
  [COMPONENT_RENDERED]: fetchPhoneList,
  [PHONE_LIST_FETCHED]: processData,
  [PHONE_SELECTED]: handlePhoneSelected
};
