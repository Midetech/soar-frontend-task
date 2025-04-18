import Header from "components/components/header";
import Siderbar from "components/components/sidebar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="dashboard-layout">
      <div className="flex">
        <Siderbar />

        <main className="flex flex-col w-full">
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
