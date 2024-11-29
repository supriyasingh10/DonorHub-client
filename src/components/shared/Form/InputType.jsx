import React from "react";

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="mb-1">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          value={value}
          name={name}
          onChange={onChange}
          aria-describedby="emailHelp"
        />
      </div>
    </>
  );
};

export default InputType;
