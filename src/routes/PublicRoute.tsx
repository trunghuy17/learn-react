import { Navigate } from "react-router-dom";

function PublicRoute({ children }: React.PropsWithChildren) {
    const acccess_token = window.localStorage.getItem("access_token");


  if (acccess_token) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
}

export default PublicRoute;
