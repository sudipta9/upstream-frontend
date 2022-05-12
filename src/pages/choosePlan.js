import React from "react";
import ChoosePlanContainer from "../container/choosePlan";

const ChoosePlan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated()) navigate("/");
    console.log("success");
  }, [navigate]);

  return <ChoosePlanContainer></ChoosePlanContainer>;
};

export default ChoosePlan;
