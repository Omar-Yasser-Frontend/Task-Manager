import { useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

function HandleDetails({ close }) {
  const [show, setShow] = useState("details");
  const { taskId } = useParams();

  const details = () => setShow("details");
  const edit = () => setShow("edit");

  return (
    <div className="grid-rows-[auto 1fr] grid flex-1 space-x-4">
      <div className="det flex flex-col">
        <div className="flex gap-6">
          <NavLink
            to={`/tasks/details/${taskId}`}
            onClick={() => {
              details();
            }}
            className={`border-grayish-blue cta mb-[-2px] ml-6 cursor-pointer rounded-tl-xl rounded-tr-xl border-2 p-5 font-bold`}
          >
            Task Info
          </NavLink>
          <NavLink
            to={`/tasks/edit/${taskId}`}
            onClick={() => {
              edit();
            }}
            className={`border-grayish-blue cta mb-[-2px] cursor-pointer rounded-tl-xl rounded-tr-xl border-2 border-b-0 p-5 font-bold`}
          >
            Edit Task
          </NavLink>
        </div>
        <Outlet />
        {/* {show === "details" && <TaskDetails />} */}
        {/* {show === "edit" && <EditTask close={close} />} */}
      </div>
    </div>
  );
}

export default HandleDetails;
