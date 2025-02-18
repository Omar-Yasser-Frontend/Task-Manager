function Button({
  typeStyle = "primary",
  size = "small",
  rounded = "rounded-full",
  children,
  onClick,
  className,
  disabled,
  ...props
}) {
  const selectedTypeStyle =
    typeStyle === "primary"
      ? "bg-blue-color text-white font-bold hover:bg-[#3661e3e2]"
      : typeStyle === "secondary"
        ? "shadow-md font-semibold"
        : typeStyle === "close"
          ? "border-grayish-blue ml-auto cursor-pointer border-1 p-2"
          : "";
  const selecedSize =
    size === "small"
      ? "px-3 md:px-4 py-2 text-sm md:text-base"
      : size === "extra small"
        ? "p-2"
        : size === "large"
          ? "px-6 py-3"
          : "";

  return (
    <button
      disabled={disabled}
      {...props}
      onClick={onClick}
      className={`flex cursor-pointer space-x-2 font-bold ${selectedTypeStyle} ${rounded} ${selecedSize} transition-all duration-300 ${className}`}
    >
      {disabled ? "loading..." : children}
    </button>
  );
}

export default Button;
