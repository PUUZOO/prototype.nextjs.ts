import { CLIENT } from "../actionTypes";

const initialState = {
  clientIp: "",
  city: "",
  country_code: "",
  postal_code: "",
};

const clientReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CLIENT:
      return {
        ...state,
        ...action.client,
      };
    default:
      return state;
  }
};

export default clientReducer;
