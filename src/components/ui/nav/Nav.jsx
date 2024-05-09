import { toast } from "sonner";
import { useLogOutMutation } from "../../../store/service/endpoint/auth.endpoint";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const nav=useNavigate()
  const [ logout]=useLogOutMutation()
  return (
    <div className=" w-full h-10 flex px-52 items-center border bg-white">
      <div className=" w-full flex justify-between items-center">
        <h1>Ye Htet</h1>
        <div className=" flex items-center gap-4 font-bold">
          <button onClick={async ()=>{
            localStorage.removeItem("token")
            await logout()
            nav("/")
            toast.success("You have logouted")

          }}>Log out</button>
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
