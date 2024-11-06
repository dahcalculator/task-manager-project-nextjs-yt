"use client";
import UserContext from "@/context/userContext";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import logo from "../../assets/logo.png"

const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginFormSubmitted = async (event) => {
    event.preventDefault();
    console.log(loginData);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid Data !!", {
        position: "top-center",
      });
      return;
    }

    //valid data
    //login

    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("Logged In");
      //redirect
      context.setUser(result.user);
      router.push("/profile/user");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="flex justify-center items-center  flex-col">
          <Image
          src={logo}
          width={90}
             height={90}
          />
        <div className="text-1xl text-bold">security management personnel system</div>
        </div>

        <form action="#!" onSubmit={loginFormSubmitted}
         className="border border-secondary rounded p-4 w-96 bg-white"
           
        >
          <div className="form-outline mb-4 flex-col space-x-5">
          
            <label
              htmlFor="user_email"
              className="form-label font-bold"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control  max-w-lg"
                 placeholder="Enter here"
              id="user_email"
              name="user_email"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  email: event.target.value,
                });
              }}
              value={loginData.email}
            />
          </div>
          {/* password */}
          <div className="form-outline mb-4 flex-col space-x-5">
          
            <label
              htmlFor="user_password"
             className="form-label font-bold"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control max-w-lg"
              placeholder="Enter here"
              id="user_password"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                });
              }}
              value={loginData.password}
            />
          </div>

          <div className="mt-3 text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 m-2 p-2 font-bold  hover:text-white"
                >
              Login
            </button>
            
          </div>
        </form>
      </div>
      {/* {JSON.stringify(loginData)} */}
    </div>
  );
};

export default Login;
