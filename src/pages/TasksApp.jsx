import TasksHead from "../features/tasks/TasksHead";
import TasksList from "../features/tasks/TasksList";
import Header from "../ui/Header";

function TasksApp() {
  return (
    <div>
      <Header />
      <TasksHead />
      <TasksList />
    </div>
  );
}

export default TasksApp;
