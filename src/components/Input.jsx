function Input({ id, placeholderText, text = "", defaultValue, onChange }) {
  return (
    <>
      <div className="flex pb-6 ">
        <label htmlFor={id} className="flex-grow pr-2">
          {text}
        </label>
        <input
          type="text"
          id={id}
          name={id}
          defaultValue={defaultValue}
          onChange={onChange}
          className="shrink-0 bg-inputYellow placeholder:pl-4 pl-4
              placeholder:text-gray-400"
          placeholder={placeholderText}
        />
      </div>
    </>
  );
}

export default Input;
