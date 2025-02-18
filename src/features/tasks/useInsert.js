import { useMutation } from "@tanstack/react-query";
import { insertRow } from "../../services/apiTasks";
import toast from "react-hot-toast";

export function useInsert() {
  const { mutate: insert, isPending } = useMutation({
    mutationFn: insertRow,

    onError: () => toast.error("Failed to save your data"),
  });

  return { insert, isPending };
}
