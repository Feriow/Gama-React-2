import React, { FormEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import registerApi from "../../service/authApi";

import { ISignIn } from "../../interface";

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>();

  const history = useHistory();

  const onSubmit: SubmitHandler<ISignIn> = (data) => {
    registerApi
      .post("session", data)
      .then((response) => {
        localStorage.setItem("@MeliuzSession", JSON.stringify(response.data));
        toast.success("Login successful", {
          onClose: () => {
            history.push("/dash");
          },
        });
      })
      .catch(() => {
        toast.error("Oops error in the mistake =P");
      });
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;
