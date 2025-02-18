import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/apiTasks";

export default function useTasks() {
  const {
    data: { userTasks: tasks, id } = {},
    isPending: isLoading,
    isError,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
    retry: false,
  });

  return { isError, tasks, isLoading, id };
}
