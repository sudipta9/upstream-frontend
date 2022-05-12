import { Cookies } from "react-cookie";

const isUserAuthenticated = () => {
  const cookies = new Cookies();
  const token = cookies.get("access_token");
  if (token) return true;
  else return false;
};

export default isUserAuthenticated;
