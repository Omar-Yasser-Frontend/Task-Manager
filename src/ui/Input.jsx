function Input({ className, ...props }) {
  return (
    <input
      className={`${className} w-full rounded-md bg-blue-50 p-3 outline-none`}
      {...props}
    />
  );
}

export default Input;
