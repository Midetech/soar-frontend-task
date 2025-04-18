"use client";
import Preferences from "components/components/Pereferences";
import ProfileForm from "components/components/ProfileForm";
import Security from "components/components/Security";
import { cn } from "components/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Page = () => {
  const tabs = [
    {
      id: 1,
      name: "Edit Profile",
    },
    {
      id: 2,
      name: "Preferences",
    },
    {
      id: 3,
      name: "Security",
    },
  ];

  const [activeTab, setActiveTab] = React.useState(tabs[0].id);
  const [showPassword, setShowPassword] = React.useState(false);
  const [enableBiometrics, setSnableBiometrics] = React.useState(false);
  const [enableNotifications, setEnableNotification] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState(
    "https://randomuser.me/api/portraits/men/32.jpg"
  );

  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const indicatorVariants = {
    preferences: { x: 0 },
    security: { x: "100%" },
  };

  const tabToShow = () => {
    switch (activeTab) {
      case 1:
        return <ProfileForm {...{ imageUrl, setImageUrl, tabVariants }} />;
      case 2:
        return <Preferences {...{ tabVariants }} />;
      case 3:
        return (
          <Security
            {...{
              tabVariants,
              enableNotifications,
              setEnableNotification,
              enableBiometrics,
              setSnableBiometrics,
              showPassword,
              setShowPassword,
            }}
          />
        );

      default:
        return <ProfileForm {...{ imageUrl, setImageUrl, tabVariants }} />;
    }
  };
  return (
    <div className="py-6 lg:px-10 md:px-10 px-4">
      <div className="bg-white h-[80dvh] w-full rounded-[25px] p-[30px] overflow-y-auto">
        <div className="flex items-center md:gap-x-[73px] justify-between md:justify-normal">
          {tabs.map((tab) => (
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "bg-transparent border-none shadow-none text-base font-medium hover:bg-transparent xl:w-[114px] w-[80px] text-[13px] xl:text-base",
                activeTab === tab.id ? "text-[@232323]" : "text-[#718EBF]"
              )}
              key={tab.id}
            >
              <motion.div
                variants={indicatorVariants}
                animate={activeTab.toString()}
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex flex-col gap-y-2"
              >
                <span>{tab.name}</span>
                {activeTab === tab.id && (
                  <div className="h-[3px] xl:w-[114px] w-[80px] bg-[#232323] rounded-t-[10px] shrink-0" />
                )}
              </motion.div>
            </motion.button>
          ))}
        </div>
        <div className="h-px w-full bg-[#F4F5F7] rounded-t-[10px] shrink-0 mb-[41px]" />
        <AnimatePresence mode="wait">{tabToShow()}</AnimatePresence>
      </div>
    </div>
  );
};

export default Page;
