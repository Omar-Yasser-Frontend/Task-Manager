import { dateDistance, formatDate } from "../../helper/date";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import HandleDetails from "./HandleDetails";
import { useModal } from "../../context/TasksContext";

function TaskItem({ taskName, discription, emoji, status, date, id }) {
  const checkDate = date !== undefined;
  const { show, open, close } = useModal();
  const navigate = useNavigate();
  let deadline;

  let bg;
  if (status === "won't do") bg = " bg-dark-pink";
  else if (status === "complete") bg = " bg-mint-green";
  else if (status === "in progress") bg = "  bg-light-orange";
  else bg = "bg-gray";

  const getDate = dateDistance(date);
  let dateFormat = typeof getDate === "string" ? getDate : formatDate(getDate);

  if (getDate.year === 0 && getDate.month === 0 && getDate.day === 0)
    dateFormat = "today left";

  if (getDate.month > 0 || getDate.day > 6 || getDate.year > 0)
    deadline = "bg-green";
  else if (getDate.day > 3) deadline = "bg-[#ff5c33]";
  else deadline = "bg-[#ff3333]";

  return (
    <>
      <li
        onClick={() => {
          // navigate(`/tasks/details/${id}`);
          navigate(`/tasks/details/${id}`);
          // searchParams.set("taskId", id);
          // setSearchParams(searchParams);
          open();
        }}
        className={`flex cursor-pointer items-start gap-6 rounded-xl p-4 ${bg}`}
      >
        <div className="rounded-[inherit] bg-white p-3">{emoji}</div>
        <div>
          <div className="flex items-center gap-2">
            <h3>{taskName}</h3>
            {checkDate && (
              <div>
                {date !== undefined && status === "complete" ? (
                  <time className="bg-green rounded-full px-2 py-0.5 text-white">
                    <span className="text-white">Completed</span>
                  </time>
                ) : (
                  <time
                    className={`${deadline} rounded-full px-2 py-0.5 text-white opacity-90`}
                  >
                    <span className="text-white">{dateFormat}</span>
                  </time>
                )}
              </div>
            )}
          </div>
          <p>{discription}</p>
        </div>
      </li>
      {show && (
        <Modal close={close}>
          <HandleDetails close={close} />
        </Modal>
      )}
    </>
  );
}

export default TaskItem;
