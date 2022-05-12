import React, { Suspense } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import Loading from "./pages/loading";
// const Intro = React.lazy(() => import("./pages/intro"));
const SignIn = React.lazy(() => import("./pages/signIn"));
const SignUp = React.lazy(() => import("./pages/signUp"));
const ChoosePlan = React.lazy(() => import("./pages/choosePlan"));
const ForgetPassword = React.lazy(() => import("./pages/forgetPassword"));
const ResetPassword = React.lazy(() => import("./pages/resetPassword"));
const Welcome = React.lazy(() => import("./pages/welcome"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="sign-in" element={<SignIn></SignIn>} />
          <Route path="sign-up" element={<SignUp></SignUp>} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="choose-plan" element={<ChoosePlan />} />
          <Route path="*" element={<div>404 error</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
