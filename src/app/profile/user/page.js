"use client";
import UserContext from "@/context/userContext";
import React, {useContext, useEffect, useState } from "react";
import user from "../../../assets/user.png"
import Image from "next/image";
 

export default function Profile() {



  return (
    <div className="flex-col justify-evenly h-full w-full bg-white text-gray-500">
      <div className=" flex  justify-center item-center  space-y-3 mt-4 pt-4">
        <div className="flex-col text-1xl text-transform: capitalize;">
        <div>

        <Image
          src={user}
          width={90}
             height={90}
          />
        </div>
        <div>francis joe</div>
        <div>california bida</div>
        </div>

      </div>
      <div className=" ml-10">
      <div>
        Personnel ID:
      </div>
      <div>
      Position:
      </div>
      <div>
        Contact number:
      </div>
      </div>


      <div className=" flex justify-center items-center  mt-10 space-x-10">
        <div className="flex-col ">
      <div className="text-4xl flex space-x-16 text-black">
        <div>
          10
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
