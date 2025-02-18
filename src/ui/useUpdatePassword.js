import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../services/apiTasks";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const { mutate: updatePass, isPending } = useMutation({
    mutationFn: updatePassword,
    onSuccess: () => toast.success("Password successfully change"),
    onError: () => toast.error("Failed to update Password"),
  });

  return { updatePass, isPending };
}
