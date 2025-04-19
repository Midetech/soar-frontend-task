"use client";
import Header from "components/components/header";
import Siderbar from "components/components/sidebar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dashboard-layout">
      <div className="flex">
        <Siderbar {...{ isOpen, toggleSidebar }} />

        <main className="flex flex-col w-full">
          <Header {...{ toggleSidebar }} />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
