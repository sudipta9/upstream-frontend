import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { paymentSlice } from "../features/payments/paymentSlice";
import { plansSlice } from "../features/plans/planSlice";
import { subscriptionSlice } from "../features/subscriptions/subscriptionSlice";
import { userSlice } from "../features/user/userSlice";

const reducer = combineReducers({
  user: userSlice.reducer,
  plans: plansSlice.reducer,
  payments: paymentSlice.reducer,
  subscriptions: subscriptionSlice.reducer,
});

export default configureStore({
  reducer,
});
