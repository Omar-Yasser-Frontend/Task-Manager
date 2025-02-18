import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [show, setShow] = useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);

  return (
    <TaskContext.Provider value={{ open, close, show }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useModal() {
  const context = useContext(TaskContext);
  if (context === undefined)
    throw new Error("You use context outside provider");
  return context;
}

export default TaskProvider;
