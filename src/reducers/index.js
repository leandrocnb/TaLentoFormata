import { combineReducers } from "redux";

import userReducer from "./userReducer";

import newMaintenanceForm from "./newMaintenanceForm";

import newCallForm from "./newCallForm";

import maintenanceReducer from "./maintenanceReducer";

import callReducer from "./callReducer";

import newExtractForm from "./newExtractForm";

import extrctReducer from "./extractReducer";

export default combineReducers({
  user: userReducer,
  maintenanceForm: newMaintenanceForm,
  maintenanceList: maintenanceReducer,
  callForm: newCallForm,
  callList: callReducer,
  extractForm: newExtractForm,
  extractList: extrctReducer,
});
