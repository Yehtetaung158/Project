import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import React from "react";

const Nav = () => {
  return (
    <div className=" w-full h-10 flex px-52 items-center border bg-white">
      <div className=" w-full flex justify-between items-center">
        <h1>Ye Htet</h1>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Nav;
