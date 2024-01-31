// !TODO remove this file

import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "./auth";
const withAuth = (WrappedComponent, options = {}) => {
  const { redirectTo = "/sign-in" } = options;

  const AuthenticatedComponent = (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (!user && !options.public) {
          router.replace(redirectTo);
        } else if (user && options.public) {
          router.replace("/");
        }
      }
    }, [user, loading, router]);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
