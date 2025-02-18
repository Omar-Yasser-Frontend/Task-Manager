import { useEffect, useState } from "react";
import Modal from "./Modal";
import TaskItem from "./TaskItem";
import useTasks from "./useTasks";
import Spinner from "../../ui/Spinner";
import AddTaskForm from "./AddTaskForm";
import TaskProvider from "../../context/TasksContext";
import { useInsert } from "./useInsert";
import { useUser } from "../login/useUser";

// const data = [
//   {
//     taskName: "collage",
//     discription: "i will go to collage",
//     emoji: "🌎",
//     status: "in progress",
//     date: new Date(),
//   },
//   {
//     taskName: "exercise",
//     discription: "i will do some push ups push and pole some squats",
//     emoji: "🏋️‍♀️",
//     status: "complete",
//     date: new Date(),
//   },
//   {
//     taskName: "finish some organization status",
//     discription: "i will go to make new card id at 7am",
//     emoji: "⏰",
//     status: "won't do",
//     date: new Date(),
//   },
// ];

function TasksList() {
  const { tasks, isLoading } = useTasks();
  const { user } = useUser();
  // console.table(user.id);
  // console.log("user KEY");
  const { insert, isPending } = useInsert();

  const [showModal, setShowModal] = useState(false);

  useEffect(
    function () {
      if (!isLoading && !tasks) insert(user.id);
    },
    [user.id, isLoading, tasks, insert],
  );

  if (isLoading || isPending) return <Spinner />;

  function toggleModal() {
    setShowModal((modal) => !modal);
  }
  // const { userTasks } = tasks[0];

  return (
    <>
      <div>
        <div className="mx-auto mt-6 flex w-[36rem] max-w-full items-start gap-3 px-4">
          <ul className="max-h-[55vh] w-full space-y-6 overflow-auto md:max-h-[65vh]">
            {tasks &&
              tasks.map(
                ({ discription, taskName, emoji, status, date, id }) => (
                  <TaskProvider key={id}>
                    <TaskItem
                      taskName={taskName}
                      discription={discription}
                      emoji={emoji}
                      status={status}
                      date={date}
                      id={id}
                    />
                  </TaskProvider>
                ),
              )}
            <li
              onClick={toggleModal}
              className="bg-light-pink flex cursor-pointer items-center gap-6 rounded-xl p-4"
            >
              <img
                className="bg-dark-orange rounded-[inherit] p-3"
                src="/public/Add_round_duotone.svg"
                alt=""
              />
              <span>Add new task</span>
            </li>
          </ul>
          {showModal && (
            <Modal close={toggleModal}>
              <AddTaskForm close={toggleModal} />;
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}

export default TasksList;
