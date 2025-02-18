import { useParams, useSearchParams } from "react-router-dom";
import useTasks from "./useTasks";
import Button from "../../ui/Button";
import useAddTask from "./useAddTask";
import { useModal } from "../../context/TasksContext";

function TaskDetails() {
  const { close } = useModal();
  const { tasks, id } = useTasks();
  const { taskId } = useParams();
  const { addTask } = useAddTask();
  //   const [searchParams] = useSearchParams();
  //   const taskId = searchParams.get("taskId");
  const { taskName, discription, emoji, date, status } = tasks.find(
    (task) => Number(taskId) === task.id,
  );
  const statusColor =
    status === "in progress"
      ? " text-dark-orange"
      : status === "complete"
        ? "text-green"
        : status === "won't do"
          ? "text-red"
          : "text-grayish-blue";
  return (
    <div className="border-grayish-blue relative flex flex-grow flex-col rounded-xl border-2 p-4">
      <p className="bg-gray w-fit rounded-2xl p-3">{emoji}</p>
      <h3 className="mt-4 text-xl font-semibold">Task Name</h3>
      <p className="ml-2">{taskName}</p>
      <h3 className="mt-4 text-xl font-semibold">Discription</h3>
      <p className="ml-2">{discription}</p>
      <h3 className="mt-4 text-xl font-bold">Status</h3>
      <p className={`ml-2 ${statusColor} font-semibold`}>
        {status || "unknown"}
      </p>
      <h3 className="mt-4 text-xl font-bold">Deadline</h3>
      <p className={`ml-2 ${statusColor} text-red font-semibold`}>{date}</p>
      <Button
        onClick={() =>
          addTask(
            {
              updateTasks: tasks.filter((task) => task.id !== Number(taskId)),
              id,
            },
            { onSuccess: () => close() },
          )
        }
        className={"mt-auto ml-auto flex w-fit gap-2"}
      >
        Delete <img src="/public/Trash.svg" alt="" />
      </Button>
    </div>
  );
}

export default TaskDetails;
