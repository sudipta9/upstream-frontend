import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChoosePlan } from "../components";
import {
  paymentSelector,
  clearPaymentHandlerState,
  clearPaymentVerifyState,
  paymentHandler,
  verifyPayment,
} from "../features/payments/paymentSlice";
import {
  planClearState,
  getPlans,
  plansSelector,
} from "../features/plans/planSlice";

const ChoosePlanContainer = () => {
  const dispatch = useDispatch();

  const {
    isPlanFetching,
    isPlanSuccess,
    isPlanError,
    planErrorMessage,
    plans,
  } = useSelector(plansSelector);

  const {
    isPaymentFetching,
    isPaymentFailed,
    isPaymentSucceed,
    paymentErrorMessage,
    paymentSuccessMessage,
    isVerifyPaymentFetching,
    isVerifyPaymentFailed,
    isVerifyPaymentSucceed,
    verifyPaymentErrorMessage,
    verifyPaymentSuccessMessage,
  } = useSelector(paymentSelector);

  const [allPlans, setAllPlans] = useState([]);
  const [planId, setPlanId] = useState("");
  const navigate = useNavigate();

  //  control plans fetching state
  useEffect(() => {
    if (isPlanFetching) console.log("Wait");
    if (isPlanError) {
      console.log(planErrorMessage);
      dispatch(planClearState());
    }
    if (isPlanSuccess) {
      setAllPlans(plans);
      dispatch(planClearState());
    }
  }, [
    dispatch,
    isPlanError,
    isPlanFetching,
    isPlanSuccess,
    planErrorMessage,
    plans,
  ]);

  // fetch all available plans from the server
  useEffect(() => {
    dispatch(planClearState());
    dispatch(getPlans());
  }, [dispatch]);

  useEffect(() => {
    const initPayment = (data, planId) => {
      const { amount, currency, id } = data;
      const options = {
        key: "rzp_test_hgXRPubo2sbxn4",
        amount,
        currency,
        order_id: id,
        handler: (response) => {
          const { razorpay_order_id } = response;
          try {
            dispatch(verifyPayment({ orderId: razorpay_order_id, planId }));
          } catch (error) {
            console.log(error);
          }
        },
      };
      console.log(options);
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    if (isPaymentFetching) {
      console.log("Payment Processing");
    }
    if (isPaymentFailed) {
      console.log(paymentErrorMessage);
      dispatch(clearPaymentHandlerState());
    }
    if (isPaymentSucceed) {
      initPayment(paymentSuccessMessage, planId);
      // dispatch(clearPaymentHandlerState());
    }
  }, [
    dispatch,
    isPaymentFailed,
    isPaymentFetching,
    isPaymentSucceed,
    paymentErrorMessage,
    paymentSuccessMessage,
    planId,
  ]);

  useEffect(() => {
    if (isVerifyPaymentFetching) {
      console.log("Verifying Payment status");
    }
    if (isVerifyPaymentFailed) {
      console.log(verifyPaymentErrorMessage);
      dispatch(clearPaymentVerifyState());
    }
    if (isVerifyPaymentSucceed) {
      // console.log(verifyPaymentSuccessMessage);
      navigate("/");
      // dispatch(clearPaymentVerifyState());
    }
  }, [
    dispatch,
    isVerifyPaymentFailed,
    isVerifyPaymentFetching,
    isVerifyPaymentSucceed,
    navigate,
    verifyPaymentErrorMessage,
    verifyPaymentSuccessMessage,
  ]);

  return (
    <ChoosePlan.Container>
      <ChoosePlan.Heading>Choose a plan</ChoosePlan.Heading>
      <ChoosePlan.SubHeading>
        All Payments are secured by Razorpay
      </ChoosePlan.SubHeading>
      <ChoosePlan.Cards>
        {allPlans.map((plan) => {
          return (
            <ChoosePlan.CardContainer key={plan._id}>
              <ChoosePlan.CardDetails>
                <ChoosePlan.Feature>{plan.name}</ChoosePlan.Feature>
                <ChoosePlan.Feature>₹ {plan.price}</ChoosePlan.Feature>
                {plan.features.map((feature) => {
                  return (
                    <ChoosePlan.Feature key={feature}>
                      {feature}
                    </ChoosePlan.Feature>
                  );
                })}
                <ChoosePlan.Feature>
                  <ChoosePlan.Button
                    onClick={(e) => {
                      e.preventDefault();
                      setPlanId(plan._id);
                      dispatch(paymentHandler({ planId: plan._id }));
                    }}
                  >
                    Choose Plan
                  </ChoosePlan.Button>
                </ChoosePlan.Feature>
              </ChoosePlan.CardDetails>
            </ChoosePlan.CardContainer>
          );
        })}
      </ChoosePlan.Cards>
    </ChoosePlan.Container>
  );
};

export default ChoosePlanContainer;
