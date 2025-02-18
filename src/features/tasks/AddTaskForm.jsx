import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useState } from "react";
import Button from "../../ui/Button";
import StatusLabel from "./StatusLabel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAddTask from "./useAddTask";
import FormErrorMessage from "./formErrorMessage";
import useTasks from "./useTasks";

const icons = ["👩‍💻", "💬", "☕", "🏋️‍♀️", "📚", "⏰"];
const status = ["in progress", "complete", "won't do"];

function AddTaskForm({ close }) {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emoji: "👩‍💻",
    },
  });
  const watchStatus = watch("status");
  const watchIcon = watch("emoji");
  const [date, setDate] = useState(() => new Date());
  const { tasks, id } = useTasks();
  const { addTask, isPending } = useAddTask();

  function handleToggle(e) {
    if (e.target.value === watchStatus) setValue("status", "");
  }

  function submit(data) {
    if (date !== "") data.date = date;
    data.id = new Date().getTime();
    addTask(
      { updateTasks: [...tasks, data], id },
      { onSuccess: () => close() },
    );
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Label htmlFor="task-name">Task Name</Label>
      <Input
        {...register("taskName", { required: "Task name is required" })}
        type="text"
        id="task-name"
        placeholder="Enter task name..."
      />
      {errors.taskName && (
        <FormErrorMessage message={errors.taskName.message} />
      )}

      <Label htmlFor="discription">Discription</Label>
      <textarea
        {...register("discription", { required: "discription is required" })}
        className={
          "h-40 w-full resize-none rounded-md bg-blue-50 p-3 outline-none"
        }
        type="text"
        id="discription"
        placeholder="Enter task name..."
      />
      {errors.discription && (
        <FormErrorMessage message={errors.discription.message} />
      )}
      <Label>Icon</Label>
      <div className="flex flex-wrap gap-2 p-2 px-0">
        {icons.map((currIcon) => (
          <label
            key={currIcon}
            htmlFor={currIcon}
            className={`${currIcon.codePointAt(0) === watchIcon?.codePointAt?.(0) ? "bg-dark-orange" : "bg-gray"} cursor-pointer rounded-md p-2 transition-all duration-500`}
          >
            {currIcon}

            <input
              id={currIcon}
              className="h-0 w-0"
              type="radio"
              value={currIcon}
              {...register("emoji", { required: "emoji is required" })}
            />
          </label>
        ))}

        {/* {icons.map((currIcon) => (
          <button
            type="button"
            key={currIcon}
            className={`${currIcon.codePointAt(0) === icon.codePointAt(0) && currIcon.codePointAt(1) === icon.codePointAt(1) ? "bg-dark-orange" : "bg-gray"} cursor-pointer rounded-md p-2`}
            onClick={() => setIcon(currIcon)}
          >
            {currIcon}
          </button>
        ))} */}
      </div>
      <Label>Status</Label>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {status.map((stat) => (
          <StatusLabel
            key={stat}
            value={stat}
            id={stat.replace(" ", "-")}
            register={register}
            onToggle={handleToggle}
            watchStatus={watchStatus}
          />
        ))}
      </div>
      <Label>Date</Label>
      <div className="mb-8 flex items-center justify-between">
        <DatePicker
          // {...register("date")}
          showIcon
          selected={date}
          onChange={(date) => setDate(date)}
          customInput={
            <Input
              placeholder={"Want to add deadline"}
              className={
                "focus:border-blue-color w-full border-2 border-transparent p-4 text-gray-500 transition-all duration-300"
              }
            />
          }
        />
        <Button
          type="button"
          className={"text-sm"}
          onClick={() => setDate(null)}
        >
          Remove Date?
        </Button>
      </div>
      <div className="flex gap-4">
        <Button
          type="reset"
          typeStyle="secondary"
          size="small"
          rounded="rounded-full"
          className={"bg-gray ml-auto text-white"}
          onClick={close}
        >
          <span>Trash</span> <img src="/public/Trash.svg" alt="" />
        </Button>
        <Button
          typeStyle="primary"
          size="small"
          rounded="rounded-full"
          disabled={isPending}
        >
          <span>Save</span> <img src="/public/Done_round.svg" alt="" />
        </Button>
      </div>
    </form>
  );
}

export default AddTaskForm;

/*
<label
          htmlFor="in-progress"
          className={`border-gray ${watchStatus === "in progress" ? "border-green" : ""} border-1`}
          onClick={handleToggle}
        >
          on progress
          <input
            className={`h-0 w-0`}
            type="radio"
            id="in-progress"
            {...register("status")}
            value={"in progress"}
          />
        </label>
        <label
          htmlFor="complete"
          className={`border-gray ${watchStatus === "complete" ? "border-green" : ""} border-1`}
          onClick={handleToggle}
        >
          complete
          <input
            className={`h-0 w-0`}
            type="radio"
            id="complete"
            {...register("status")}
            value="complete"
          />
        </label>
*/
