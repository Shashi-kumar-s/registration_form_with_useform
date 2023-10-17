import propTypes from "prop-types"

const InputField = (props) => {
  const {
    label,
    className,
    placeholder,
    type,
    name,
    register = () => ({}),
  } = props
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        {...register(label)}
      />
    </div>
  )
}
InputField.propTypes = {
  label: propTypes.string,
  className: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
  name: propTypes.string,
  register: propTypes.func,
}

export default InputField
