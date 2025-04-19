"use client";
import { sidebarLinks } from "components/constants/sidebar-links";
import React from "react";
import SiderbarLink from "./siderbarLink";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";
import { cn } from "components/lib/utils";
import { motion } from "framer-motion";
import { useApp } from "../contexts/AppContext";

const Siderbar = () => {
  const pathname = usePathname();
  const { state, dispatch } = useApp();
  const { isSidebarOpen, isMobile } = state;

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <motion.div
      className={cn(
        "xl:w-[250px] w-[210px] bg-white min-h-screen lg:flex flex-col xl:items-center justify-normal border-r border-r-[#E6EFF5] z-50",
        isSidebarOpen ? "absolute lg:relative" : "hidden lg:flex relative"
      )}
      initial={{ x: "-100%" }}
      animate={{ x: !isMobile ? 0 : isSidebarOpen ? "0%" : "-100%" }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      role="navigation"
      // aria-label="Main navigation"
    >
      <div className="flex gap-x-4 font-extrabold text-[#343C6A] xl:w-[250px] w-[210px] h-[100px] xl:pl-[20px]">
        <div className={cn("w-1.5 h-[60px] rounded-r-[10px] shrink-0")} />
        <div className="flex items-center gap-[16px] ">
          <Icons.TaskIcon aria-hidden="true" />

          <h2 className="xl:text-[25px] text-base">Soar Task</h2>
        </div>
      </div>
      <nav aria-label="Navigation menu">
        {sidebarLinks.map((link) => (
          <SiderbarLink
            isActive={pathname === link.url}
            key={link.id}
            {...{ link }}
          />
        ))}
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 left-[210px] bg-black/50 lg:hidden -z-50"
          onClick={toggleSidebar}
          role="button"
          aria-label="Close sidebar"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleSidebar();
            }
          }}
        ></div>
      )}
    </motion.div>
  );
};

export default Siderbar;
