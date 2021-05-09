import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MakeAddAdmainContext } from "../../../../App";

const MakeAdmainInput = () => {
  const [makeAdmainEmail, setMakeAdmainEmail] = useContext(
    MakeAddAdmainContext
  );
  console.log("yo", makeAdmainEmail);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setMakeAdmainEmail(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input defaultValue="test" {...register("example")} /> */}

        <input
          {...register("email", { required: true })}
          placeholder="make aNew admain email address"
          className="form-control"
        />

        {errors.email && <span>This field is required</span>}
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default MakeAdmainInput;
