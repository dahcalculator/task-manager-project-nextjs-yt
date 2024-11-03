"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

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
    <nav className="bg-blue-600 h-16 py-2 px-36 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl text-white font-semibold">
          <a href="#!"> Security personnel management system</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          {context.user && (
            <>
              <li>
                <Link href={"/"} className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="hover:text-blue-200">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href={"/show-tasks"} className="hover:text-blue-200">
                  Show Tasks
                </Link>
              </li>
              <li>
                <Link href="/add-incident" className="hover:text-blue-200">
                  Add incident
                </Link>
              </li>
              <li>
                <Link href={"/show-incidents"} className="hover:text-blue-200">
                  Show incidents
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
              <li>
                <Link href={"#!"}>{context.user.name}</Link>
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
