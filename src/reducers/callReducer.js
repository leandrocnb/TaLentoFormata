import { SET_CALLS } from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CALLS:
      return action.calls;
    default:
      return state;
  }
}
