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

export default InputField
