const Button = (props) => {
  const {
    children = "...",
    variant = "bg-blue-600",
    onClick = () => {},
    type,
    classname,
  } = props;
  return (
    <button
      className={`h-10 w-full px-6 font-semibold rounded-md ${variant} ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
