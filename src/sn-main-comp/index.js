import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import view from "./view";
import actions from "./actions";
import actionHandlers from "./actionHandlers";
import initialState from "./initialState";

createCustomElement("sn-main-comp", {
  renderer: { type: snabbdom },
  view,
  styles,
  actions,
  actionHandlers,
  initialState
});
