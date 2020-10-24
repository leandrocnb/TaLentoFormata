import { combineReducers } from "redux";

import userReducer from "./userReducer";

import newMaintenanceForm from "./newMaintenanceForm";

import maintenanceReducer from "./maintenanceReducer";

export default combineReducers({
  user: userReducer,
  maintenanceForm: newMaintenanceForm,
  maintenanceList: maintenanceReducer,
});
