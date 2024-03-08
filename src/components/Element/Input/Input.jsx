export const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="border border-salte-100 px-4 py-2 w-full rounded-md outline-1 outline-slate-200"
    />
  );
};
