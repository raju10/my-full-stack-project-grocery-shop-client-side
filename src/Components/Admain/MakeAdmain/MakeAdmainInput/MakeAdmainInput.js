import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
//import { MakeAddAdmainContext } from "../../../../App";
/////////
import AOS from "aos";
import "aos/dist/aos.css";
/////////
const MakeAdmainInput = () => {
  // const [makeAdmainEmail, setMakeAdmainEmail] = useContext(
  //   MakeAddAdmainContext
  // );
  // console.log("yo", makeAdmainEmail);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://morning-sea-22549.herokuapp.com/addAdmain", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  ////////////

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  /////////////
  return (
    <div data-aos="fade-left">
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
