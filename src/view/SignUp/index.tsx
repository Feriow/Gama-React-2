import React, { FormEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import registerApi from "../../service/authApi";

import { ISignUp } from "../../interface";

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUp>();

  const history = useHistory();

  const onSubmit: SubmitHandler<ISignUp> = (data) => {
    registerApi
      .post("users", data)
      .then((response) => {
        toast.success("Registration successful", {
          onClose: () => {
            history.push("/login");
          },
        });
      })
      .catch(() => {
        toast.error("Oops error in the mistake =P");
      });
  };

  return (
    <div className="container">
      <h1>Register Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <span style={{ color: "red" }}>
          {errors?.name && "Oops name is required"}
        </span>

        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <span style={{ color: "red" }}>
          {errors?.email && "Oops email is required"}
        </span>

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <span style={{ color: "red" }}>
          {errors?.password && "Oops password is required"}
        </span>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default SignUp;
