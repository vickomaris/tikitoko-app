import { combineReducers } from "redux";

import addressReducer from "./address.reducer";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  address: addressReducer,
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
  user: userReducer,
});

export default rootReducer;
