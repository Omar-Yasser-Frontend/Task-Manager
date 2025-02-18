import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser as updateUserApi } from "../services/apiTasks";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success("Data updated successfully");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("Failed to update data"),
  });

  return { updateUser, isPending };
}
