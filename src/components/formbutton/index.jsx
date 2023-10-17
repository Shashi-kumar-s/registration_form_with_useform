import propTypes from "prop-types"

const FormButton = (props) => {
    const{value,onclick,buttonstyle}=props
  return (
    <button onClick={onclick} className={buttonstyle}>{value}</button>
  )
}

FormButton.propTypes={
  value:propTypes.string,
  onclick:propTypes.func,
  buttonstyle:propTypes.string
}

export default FormButton