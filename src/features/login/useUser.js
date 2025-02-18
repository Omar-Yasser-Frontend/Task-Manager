import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiLogin";

function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });
  return { isPending, isAuthenticated: user?.role === "authenticated", user };
}

export { useUser };
