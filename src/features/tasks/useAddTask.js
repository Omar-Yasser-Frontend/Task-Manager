import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTasks } from "../../services/apiTasks";
import toast from "react-hot-toast";

export default function useAddTask() {
  const queryClient = useQueryClient();
  const { mutate: addTask, isPending } = useMutation({
    mutationFn: addTasks,
    onSuccess: () => {
      toast.success("Task successfully added");
      queryClient.invalidateQueries(["tasks"]);
    },
    onError: () => toast.error("Fail to add task"),
  });

  return { addTask, isPending };
}
