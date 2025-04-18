import { Bell, ChevronRight, CreditCard, Globe, User } from "lucide-react";
import { motion } from "framer-motion";
const Preferences = ({ tabVariants }) => {
  return (
    <motion.div
      key="preferences"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={tabVariants}
      className="space-y-6 text-[#718EBF]"
    >
      <h2 className="text-xl font-semibold mb-4 !text-[#343C6A] ">
        Preferences
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-5 rounded-lg shadow bg-white"
      >
        <h3 className="text-lg font-medium mb-4 !text-[#343C6A] ">
          Account Settings
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 mr-3 rounded-md bg-blue-50">
                <User size={20} className="text-[#718EBF]" />
              </div>
              <div>
                <p className="font-medium">Profile Information</p>
                <p className="text-sm text-gray-500">
                  Update your personal details
                </p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-500" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 mr-3 rounded-md bg-blue-50">
                <CreditCard size={20} className="text-[#718EBF]" />
              </div>
              <div>
                <p className="font-medium">Payment Methods</p>
                <p className="text-sm text-gray-500">
                  Manage your cards and accounts
                </p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-500" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 mr-3 rounded-md bg-blue-50">
                <Bell size={20} className="text-[#718EBF]" />
              </div>
              <div>
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-gray-500">
                  Configure alerts and notifications
                </p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-500" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-5 rounded-lg bg-white shadow"
      >
        <h3 className="text-lg font-medium mb-4 !text-[#343C6A] ">
          Appearance
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 mr-3 rounded-md bg-blue-50">
                <Globe size={20} className="text-[#718EBF]" />
              </div>
              <div>
                <p className="font-medium">Language</p>
                <p className="text-sm text-gray-500">
                  Choose your preferred language
                </p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-md bg-gray-100">
              <span className="font-medium">English</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preferences;
