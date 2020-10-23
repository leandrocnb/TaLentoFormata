import { combineReducers } from "redux";

import userReducer from "./userReducer";

import newMaintenanceForm from "./newMaintenanceForm";

export default combineReducers({
  user: userReducer,
  maintenanceForm: newMaintenanceForm,
});
