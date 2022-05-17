import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { creatorSlice } from "../features/creators/creatorsSlice";
import { paymentSlice } from "../features/payments/paymentSlice";
import { plansSlice } from "../features/plans/planSlice";
import { subscriptionSlice } from "../features/subscriptions/subscriptionSlice";
import { userSlice } from "../features/user/userSlice";
import { videoSlice } from "../features/video/videoSlice";

const reducer = combineReducers({
  user: userSlice.reducer,
  creator: creatorSlice.reducer,
  plans: plansSlice.reducer,
  payments: paymentSlice.reducer,
  subscriptions: subscriptionSlice.reducer,
  videos: videoSlice.reducer,
});

export default configureStore({
  reducer,
});
