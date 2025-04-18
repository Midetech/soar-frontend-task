import React from "react";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";

const MobileNav = ({ activeModule }: { activeModule: string }) => {
  return (
    <div className="h-[140px] w-full lg:hidden flex flex-col justify-center items-center gap-y-[25px] bg-white border-b-[#E6EFF5]  md:px-10 px-4 ">
      <div className="w-full flex justify-between items-center bg-white">
        <Icons.HamburgerIcon />
        <p className="xl:text-[28px] text-xl text-[#343C6A] font-semibold capitalize">
          {activeModule === "dashboard" ? "Overview" : activeModule}
        </p>

        <Avatar className="xl:size-[60px] size-[35px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="h-[40px] w-[325px] bg-[#F5F7FA] rounded-[40px] flex items-center px-[25px]">
        <Icons.SearchIcon />
        <Input
          placeholder="Search for something"
          className="text-[15px] text-[#8BA3CB] placeholder:text-[#8BA3CB] w-full bg-transparent border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none shadow-none h-full"
        />
      </div>
    </div>
  );
};

export default MobileNav;
