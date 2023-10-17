import propTypes from "prop-types"
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

InputTextarea.propTypes={
  cols:propTypes.string,
  placeholder:propTypes.string,
  rows:propTypes.string,
  className:propTypes.string,
  name:propTypes.string,
  label:propTypes.string,
  register:propTypes.func
}

export default InputTextarea
