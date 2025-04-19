import React from "react";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useApp } from "../contexts/AppContext";

const MobileNav = () => {
  const { state, dispatch } = useApp();
  const { activeModule } = state;

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };

  return (
    <div
      className="h-[140px] w-full lg:hidden flex flex-col justify-center items-center gap-y-[25px] bg-white border-b-[#E6EFF5] md:px-10 px-4"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="w-full flex justify-between items-center bg-white">
        <Button
          onClick={toggleSidebar}
          className="h-[50px] w-[50px] bg-transparent shadow-none rounded-[40px]"
          aria-label="Toggle sidebar menu"
        >
          <Icons.HamburgerIcon aria-hidden="true" />
        </Button>
        <h1 className="xl:text-[28px] text-xl text-[#343C6A] font-semibold capitalize">
          {activeModule === "dashboard"
            ? "Overview"
            : activeModule.replace(/-/g, " ")}
        </h1>

        <Avatar
          className="xl:size-[60px] size-[35px]"
          role="img"
          aria-label="User profile"
        >
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="User profile picture"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div
        className="h-[40px] w-[325px] bg-[#F5F7FA] rounded-[40px] flex items-center px-[25px]"
        role="search"
      >
        <Icons.SearchIcon aria-hidden="true" />
        <Input
          placeholder="Search for something"
          className="text-[15px] text-[#8BA3CB] placeholder:text-[#8BA3CB] w-full bg-transparent border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none shadow-none h-full"
          aria-label="Search"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default MobileNav;
