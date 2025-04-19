"use client";
import { sidebarLinks } from "components/constants/sidebar-links";
import React from "react";
import SiderbarLink from "./siderbarLink";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";
import { cn } from "components/lib/utils";
import { motion } from "framer-motion";
const Siderbar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const pathname = usePathname();
  return (
    <motion.div
      className={cn(
        "xl:w-[250px] w-[210px] bg-white min-h-screen lg:flex flex-col xl:items-center justify-normal  border-r border-r-[#E6EFF5] lg:relative z-50",
        isOpen ? "absolute flex" : "hidden"
      )}
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      exit={{ x: !isOpen ? "-100%" : "0%" }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div className="flex gap-[26px] font-extrabold text-[#343C6A] xl:w-[250px] w-[210px] h-[100px] xl:pl-[30px]">
        <div className={cn("w-1.5 h-[60px] rounded-r-[10px] shrink-0")} />
        <div className="flex items-center gap-[26px] xl:ml-[30px]">
          <Icons.TaskIcon />

          <p className="xl:text-[25px] text-base">Soar Task</p>
        </div>
      </div>
      {sidebarLinks.map((link) => (
        <SiderbarLink
          isActive={pathname === link.url}
          key={link.id}
          {...{ link }}
        />
      ))}

      {isOpen && (
        <div
          className="fixed inset-0 left-[210px] bg-black/50 lg:hidden -z-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </motion.div>
  );
};

export default Siderbar;
