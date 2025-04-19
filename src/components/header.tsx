"use client";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import MobileNav from "./mobileNav";
import { useApp } from "../contexts/AppContext";

const Header = () => {
  const { state, dispatch } = useApp();
  const { activeModule } = state;

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };

  return (
    <>
      <div
        className="h-[100px] bg-white lg:flex items-center gap-x-[85px] justify-between lg:px-10 md:px-16 px-4 border-b border-b-[#E6EFF5] w-full sticky top-0 z-10 hidden"
        role="banner"
      >
        <h1 className="xl:text-[28px] text-xl text-[#343C6A] font-semibold capitalize">
          {activeModule === "dashboard"
            ? "Overview"
            : activeModule.replace(/-/g, " ")}
        </h1>

        <div className="flex items-center gap-x-[30px] justify-end">
          <div
            className="h-[50px] lg:w-[255px] bg-[#F5F7FA] rounded-[40px] flex items-center px-[25px]"
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

          <div className="hidden lg:flex items-center gap-x-[30px]">
            <Button
              className="h-[50px] w-[50px] bg-[#F5F7FA] hover:bg-[#E7EDFF]/90 rounded-[40px]"
              aria-label="Settings"
            >
              <Icons.OutlineSettingsIcon
                className="xl:size-[25px]"
                aria-hidden="true"
              />
            </Button>
            <Button
              className="h-[50px] w-[50px] bg-[#F5F7FA] hover:bg-[#E7EDFF]/90 rounded-[40px]"
              aria-label="Notifications"
            >
              <Icons.NotificationIcon
                className="xl:size-[25px]"
                aria-hidden="true"
              />
            </Button>
          </div>
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
      </div>

      <MobileNav />
    </>
  );
};

export default Header;
