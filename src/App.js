import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./pages/home"));
const SignIn = React.lazy(() => import("./pages/signIn"));
const SignUp = React.lazy(() => import("./pages/signUp"));
const ChoosePlan = React.lazy(() => import("./pages/choosePlan"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="">
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn></SignIn>} />
          <Route path="sign-up">
            <Route index element={<SignUp></SignUp>} />
            <Route path="choose-plan" element={<ChoosePlan></ChoosePlan>} />
          </Route>
          <Route path="*" element={<div>404 error</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
