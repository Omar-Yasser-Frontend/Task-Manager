import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiSignup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Welcome to Task Manager, Please login");
      navigate("/tasks");
    },
    onError: () => toast.error("Failed to make account"),
  });

  return { signup, isPending };
}
