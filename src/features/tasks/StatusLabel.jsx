function StatusLabel({ watchStatus, onToggle, register, value, id }) {
  const style = "rounded-xl p-2.5";
  return (
    <label
      htmlFor={id}
      className={` ${watchStatus === value ? "border-blue-color" : "border-gray"} flex cursor-pointer items-center gap-1 rounded-xl border-2 p-[3px] capitalize sm:gap-2 md:gap-3`}
      onClick={onToggle}
    >
      {value === "in progress" && (
        <img
          src="/public/Time_atack_duotone.svg"
          className={`bg-dark-orange ${style}`}
          alt=""
        />
      )}
      {value === "complete" && (
        <img
          src="/public/Done_round_duotone.svg"
          className={`bg-green ${style}`}
          alt=""
        />
      )}
      {value === "won't do" && (
        <img
          src="/public/close_ring_duotone.svg"
          className={`bg-red ${style}`}
          alt=""
        />
      )}
      {value}
      <input
        className={`h-0 w-0`}
        type="radio"
        id={id}
        {...register("status")}
        value={value}
      />
    </label>
  );
}

export default StatusLabel;
