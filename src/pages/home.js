import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearGetSubscriptionState,
  getSubscription,
  subscriptionSelector,
} from "../features/subscriptions/subscriptionSlice";
import isUserAuthenticated from "../helper/userAuthentication";

const Home = () => {
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
      if (!isSubscribed) navigate("/choose-plan");
    }
  }, [
    dispatch,
    isGetSubscriptionFetching,
    isGetSubscriptionRejected,
    isGetSubscriptionSuccess,
    isSubscribed,
    navigate,
  ]);

  return <div>Home</div>;
};

export default Home;
