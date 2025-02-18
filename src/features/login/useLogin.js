import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiLogin";
import toast from "react-hot-toast";

export function useLogin() {
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => toast.success("You successfully loged in"),
    onError: () => toast.error("Failed to login"),
  });

  return { login, isPending };
}
