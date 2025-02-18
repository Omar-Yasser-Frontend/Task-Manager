import { useNavigate } from "react-router-dom";
import { useUser } from "../features/login/useUser";
import { useEffect } from "react";
import SpinnerFullPage from "./SpinnerFullPage";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isPending, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isPending && !isAuthenticated) navigate("/login", { replace: true });
    },
    [isAuthenticated, isPending, navigate],
  );

  if (isPending) return <SpinnerFullPage />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
