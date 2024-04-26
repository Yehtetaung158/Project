import React from "react";
import Nav from "../../components/ui/nav/Nav";
import { FaPlus } from "react-icons/fa6";
import { Button } from "../../components/ui/button";
import EmptyLottie from "../../components/ui/lottieComponents/Empty.lottie";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../components/ui/input";
import AuthGuard from "../../components/ui/guard/Auth.Guard";

const HomePage = () => {
  return (
   <AuthGuard>
     <Sheet>
      <div className=" w-screen h-screen bg-[#fcfcfd">
        <Nav />
        <div className="px-52 mx-auto h-full">
          <div className=" flex justify-end mt-5">
              <SheetTrigger className=" flex space-x-2 bg-blue-500 p-2 rounded-lg items-center text-white">
                <FaPlus />
                <p> Create Contact</p>
              </SheetTrigger>
          </div>
          <div className=" border bg-white w-full h-3/4 mt-5 rounded flex justify-center items-center">
            <div className=" flex flex-col justify-center items-center">
              <EmptyLottie />
              <p>There is no list !</p>
            </div>
          </div>
        </div>
      </div>

      {/* Drower */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
   </AuthGuard>
  );
};

export default HomePage;
