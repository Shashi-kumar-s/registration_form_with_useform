import propTypes from "prop-types"
const SelectField = (props) => {
  const { register = () => ({}) } = props
  return (
    <select {...register("gender")}>
      <option>--Gender--</option>
      <option value="male">Male</option>
      <option value="Female">Female</option>
    </select>
  )
}

SelectField.propTypes={
  register:propTypes.func
}

export default SelectField
