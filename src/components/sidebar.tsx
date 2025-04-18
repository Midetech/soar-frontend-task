"use client";
import { sidebarLinks } from "components/constants/sidebar-links";
import React from "react";
import SiderbarLink from "./siderbarLink";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";

const Siderbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[250px] bg-white min-h-screen lg:flex flex-col items-center  border-r border-r-[#E6EFF5] hidden">
      <div className="flex justify-center items-center gap-[10px] font-extrabold text-[#343C6A] w-[250px] h-[100px] pl-[30px]">
        <Icons.TaskIcon />

        <p className="text-[25px]">Soar Task</p>
      </div>
      {sidebarLinks.map((link) => (
        <SiderbarLink
          isActive={pathname === link.url}
          key={link.id}
          {...{ link }}
        />
      ))}
    </div>
  );
};

export default Siderbar;
