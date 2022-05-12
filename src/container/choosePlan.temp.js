import React, { useEffect, useState } from "react";
import { ChoosePlan } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  clearState as planClearState,
  getPlans,
  plansSelector,
} from "../features/plans/planSlice";

import {
  clearState as clearPaymentState,
  handlePayment,
  verifyPayment,
  paymentSelector,
} from "../features/payments/paymentSlice.temp";

const ChoosePlanContainer = () => {
  const dispatch = useDispatch();
  const {
    isFetching: isPlanFetching,
    isSuccess: isPlanSuccess,
    isError: isPlanError,
    errorMessage: planErrorMessage,
    plans,
  } = useSelector(plansSelector);

  const {
    isPaymentFetching,
    isPaymentError,
    isPaymentSuccess,
    paymentErrorMessage,
    paymentSuccessMessage,
    isVerifyPaymentFetching,
    isVerifyPaymentError,
    isVerifyPaymentSuccess,
    verifyPaymentErrorMessage,
    verifyPaymentSuccessMessage,
  } = useSelector(paymentSelector);

  const [allPlans, setAllPlans] = useState([]);
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

  useEffect(() => {
    dispatch(planClearState());
    dispatch(getPlans());
  }, [dispatch]);

  const [planId, setPlanId] = useState();
  // const [orderId, setOrderId] = useState("")

  useEffect(() => {
    const initPayment = (data) => {
      const { amount, currency, id } = data;
      const options = {
        key: "rzp_test_hgXRPubo2sbxn4",
        amount,
        currency,
        order_id: id,
        handler: (response) => {
          const { razorpay_payment_id } = response;
          try {
            dispatch(verifyPayment({ paymentId: razorpay_payment_id }));
          } catch (error) {
            console.log(error);
          }
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    if (isPaymentFetching) console.log("wait");
    if (isPaymentError) {
      console.log(paymentErrorMessage);
      dispatch(clearPaymentState());
    }
    if (isPaymentSuccess) {
      initPayment(paymentSuccessMessage);
    }
  }, [
    dispatch,
    isPaymentError,
    isPaymentFetching,
    isPaymentSuccess,
    paymentErrorMessage,
    paymentSuccessMessage,
  ]);

  useEffect(() => {
    if (isVerifyPaymentFetching) console.log("verifying payment");
    if (isVerifyPaymentError) {
      console.log(verifyPaymentErrorMessage);
      dispatch(clearPaymentState());
    }
    if (isVerifyPaymentSuccess) {
      dispatch(clearPaymentState());
    }
  }, [
    dispatch,
    isVerifyPaymentError,
    isVerifyPaymentFetching,
    isVerifyPaymentSuccess,
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
                      console.log(planId);
                      dispatch(clearPaymentState());
                      dispatch(handlePayment(plan._id));
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
