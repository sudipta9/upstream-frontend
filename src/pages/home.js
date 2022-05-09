import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  isUserAuthenticated,
  userSelector,
} from "../features/user/userSlice";

const Intro = React.lazy(() => import("./intro"));

const Home = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(userSelector);

  useEffect(() => {
    dispatch(clearState());
    dispatch(isUserAuthenticated());
  }, [dispatch]);

  return <>{isAuthenticated ? <>Home</> : <Intro />}</>;
};

export default Home;
