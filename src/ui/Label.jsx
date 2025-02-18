function Label({ className, children, ...props }) {
  return (
    <label
      {...props}
      className={`${className || ""} text-grayish-blue mt-3 mb-2 block text-sm`}
    >
      {children}
    </label>
  );
}

export default Label;
