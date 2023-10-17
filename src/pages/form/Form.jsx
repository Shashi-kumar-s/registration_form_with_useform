import "../form/form.css"
import InputField from "../../components/textfield"
import { inputData } from "../../staticdata/inputdata"
import SelectField from "../../components/selectDropdown"
import InputTextarea from "../../components/inputTextarea"
import { useForm } from "react-hook-form"
import FormButton from "../../components/formbutton"

const Form = () => {
  const {
    register,
    handleSubmit,
  } = useForm()
  const submit = (data) => localStorage.setItem("user", JSON.stringify(data))

  return (
    <div className="form__container w-[100%]  flex justify-center">
      <div className="border border-gray-300 w-[100%] sml:w-[70%] md:w-[50%] mdl:w-[40%] lgl:w-[40%] mt-4  rounded-xl bg-slate-200">
        <h1 variant="h1" className="form__heading text-center">
          Registration-Form
        </h1>
        <form className="w-[100%]  px-14" onSubmit={handleSubmit(submit)}>
          {inputData.map((ele) => {
            return (
              <div key={ele.id} className="w-[100%]">
                <InputField
                  className={"form__input"}
                  name={ele.name}
                  type={ele.type}
                  placeholder={ele.placeholder}
                  label={ele.name}
                  register={register}
                />
              </div>
            )
          })}
          <div>
            <SelectField variant={"standard"} register={register} />
          </div>
          <div className=" mt-2 mb-2">
            <InputTextarea
              label={"Hobbies"}
              placeholder={"Enter Your Hobbies"}
              name={"Hobbies"}
              cols={"50"}
              rows={"3"}
              className={"form__hobbies"}
              register={register}
            />
          </div>
          <div className="flex items-center">
            <InputField type={"checkbox"} id={"terms__checkbox"} />
            <label htmlFor="terms__checkbox" className=" pl-2">
              Terms and condition
            </label>
          </div>
          <div className="flex justify-center">
            <FormButton
              onclick={handleSubmit}
              buttonstyle={"form__button"}
              value={"submit"}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form

// name , email ,phone. age in dropdown, gender , hobbies , term and condition (boolean) checkdiv,
