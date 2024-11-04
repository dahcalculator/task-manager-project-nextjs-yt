"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import logo from "@/assets/logo.png"
import Image from "next/image";

import { FaUserSecret } from "react-icons/fa";



const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }

  return (
    <nav className=" bg-white text-bold h-16 py-2 px-36 flex justify-between items-center shadow-xl">
      <div className="brand">
        <h1 className="text-2xl text-white font-semibold">
        <Image
          src={logo}
          width={50}
             height={50}
          />
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5  text-bold ">
          {context.user && (
            <>
              <li>
                <Link href={"/"} className=" text-bold hover:text-blue-800 ">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href={"/show-tasks"} className="">
                  Tasks
                </Link>
              </li>
              <li>
                <Link href={"/show-incidents"} className="">
                  Incident
                </Link>
              </li>
              
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          {context.user && (
            <>
              <li className="flex">
                <Link href={"#!"} className="flex space-y-2" > Hi, {context.user.name} </Link>
              </li>
              <li>
                <button onClick={doLogout}>Logout</button>
              </li>
            </>
          )}

          {!context.user && (
            <>
              <li>
                <Link className="hover-text-white" href="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
