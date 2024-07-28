const Input = (props) => {
  const { type, placeholder, name, value, onChange } = props;
  if (type === 'textarea') {
    return (
      <textarea
        className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-90"
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    );
  }
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-90"
      placeholder={placeholder}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
