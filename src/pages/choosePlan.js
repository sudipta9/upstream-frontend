import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChoosePlanContainer from "../container/choosePlan";
import {
  clearGetSubscriptionState,
  getSubscription,
  subscriptionSelector,
} from "../features/subscriptions/subscriptionSlice";
import isUserAuthenticated from "../helper/userAuthentication";

const ChoosePlan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    isGetSubscriptionFetching,
    isGetSubscriptionRejected,
    isGetSubscriptionSuccess,
    isSubscribed,
  } = useSelector(subscriptionSelector);

  useEffect(() => {
    if (!isUserAuthenticated()) navigate("/sign-in");
    else {
      // dispatch(clearGetSubscriptionState());
      dispatch(getSubscription());
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (isGetSubscriptionFetching) {
      console.log("getting current user subscription");
    }
    if (isGetSubscriptionRejected) {
      dispatch(clearGetSubscriptionState());
    }
    if (isGetSubscriptionSuccess) {
      if (isSubscribed) navigate("/");
    }
  }, [
    dispatch,
    isGetSubscriptionFetching,
    isGetSubscriptionRejected,
    isGetSubscriptionSuccess,
    isSubscribed,
    navigate,
  ]);

  return <ChoosePlanContainer />;
};

export default ChoosePlan;
