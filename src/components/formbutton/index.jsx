import React from 'react'

const FormButton = (props) => {
    const{value,onclick,buttonstyle}=props
  return (
    <button onClick={onclick} className={buttonstyle}>{value}</button>
  )
}

export default FormButton