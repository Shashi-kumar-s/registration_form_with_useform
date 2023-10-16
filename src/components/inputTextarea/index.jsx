import React from "react"

const InputTextarea = (props) => {
  const {
    placeholder,
    cols,
    rows,
    className,
    name,
    label,
    register = () => ({}),
  } = props
  return (
    <>
      <label>{label}</label>
      <textarea
        name={name}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        className={className}
        {...register(label)}
      ></textarea>
    </>
  )
}

export default InputTextarea
