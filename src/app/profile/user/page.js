"use client";
import UserContext from "@/context/userContext";
import React, {useContext, useEffect, useState } from "react";
import { getTasksOfUser } from "@/services/taskService";
import Task from "@/app/show-tasks/Task";
import userpic from "../../../assets/user.png"
import Image from "next/image";




export default function Profile() {
  const [tasks, setTasks] = useState([]);
  
const context = useContext(UserContext);
async function loadTasks(userId) {
  try {
    const tasks = await getTasksOfUser(userId);
    setTasks([...tasks].reverse());

  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  if (context.user) {
    loadTasks(context.user._id);
  }
}, [context.user]);



  
  return (
    <div className="flex-col justify-evenly h-full w-full bg-white text-gray-500">
      <div className=" flex  justify-center item-center  space-y-3 mt-4 pt-4">
        <div className="flex-col text-1xl text-transform: capitalize;">
        <div>

        <Image
          src={userpic}
          width={60}
             height={60}
          />
        </div>
       
        <div className="text-2xl text-bold text-transform: capitalize;"> {context.user.name} </div>
     
        </div>

      </div>
      <div className=" ml-10">
      <div>
        Personnel ID: {context.user._id}
      </div>
      <div>
      Position: {context.user.position}
      </div>
      <div>
        Contact number: {context.user.email}
      </div>
      </div>


      <div className=" flex justify-center items-center  mt-10 space-x-10">
        <div className="flex-col ">
      <div className="text-4xl flex space-x-16 text-black">
        <div>
         {tasks.length}
        </div>
        <div>
          10
        </div>
      </div>

      <div className="text-1xl flex space-x-16 ">
        <div className=" text-transform: capitalize;">
          tasks
        </div>
        <div className=" text-transform: capitalize;">
          incident report
        </div>
        </div>
      </div>


      </div>

    </div>
  );
}
