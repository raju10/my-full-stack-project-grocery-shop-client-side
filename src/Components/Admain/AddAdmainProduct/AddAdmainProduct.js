import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MakeAddAdmainContext, UserContext } from "../../../App";
/////////
import AOS from "aos";
import "aos/dist/aos.css";
/////////
const AddAdmainProduct = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  // const [makeAdmainEmail, setMakeAdmainEmail] = useContext(
  //   MakeAddAdmainContext
  // );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  ///////////////
  const [imgUrl, setImgUrl] = useState(null);
  const onSubmit = (data) => {
    // const newData = { ...makeAdmainEmail };
    // console.log(newData);
    const eventData = {
      catagory: data.catagory,
      image: imgUrl,
      name: data.name,
      price: data.price,
      logUser: loginUser.loginUserEmail,
    };
    console.log("eventData", eventData);
    ////////////
    fetch("https://morning-sea-22549.herokuapp.com/addProduct", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  ///////////////
  const handelImgUpload = (e) => {
    console.log(e.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "fa57141f3cf543cf23e02eea346a0c1c");
    imgData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          {...register("catagory", { required: true })}
          placeholder="Product category"
          className="form-control"
        />

        {errors.catagory && <span>This field is required</span>}
        <br />
        <input
          {...register("name", { required: true })}
          placeholder="Product name"
          className="form-control"
        />

        {errors.name && <span>Name is required</span>}
        <br />
        <input
          {...register("price", { required: true })}
          placeholder="Product price"
          className="form-control"
        />

        {errors.price && <span>Name is required</span>}
        <br />
        <br />
        <input
          type="file"
          {...register("image", { required: true })}
          onChange={handelImgUpload}
          className="form-control w-50"
        />
        {errors.image && <span>Price is required</span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddAdmainProduct;
