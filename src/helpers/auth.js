import { getCookie } from "./common";

const useAuth = () => {
  const data = getCookie(process.env.NEXT_PUBLIC_TOKEN);

  if (data) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
