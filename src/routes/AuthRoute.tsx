import { Navigate } from "react-router-dom";

function AuthRoute({ children }: React.PropsWithChildren) {
  const acccess_token = window.localStorage.getItem("access_token");

  if (!acccess_token) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
}

export default AuthRoute;
