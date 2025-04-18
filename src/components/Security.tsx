import { cn } from "components/lib/utils";
import {
  ChevronRight,
  Eye,
  EyeOff,
  Key,
  Lock,
  Shield,
  Smartphone,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Security = ({
  enableNotifications,
  setEnableNotification,
  enableBiometrics,
  setSnableBiometrics,
  showPassword,
  tabVariants,
  setShowPassword,
}: {
  enableNotifications: boolean;
  setEnableNotification: (value: boolean) => void;
  enableBiometrics: boolean;
  setSnableBiometrics: (value: boolean) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  tabVariants: any;
}) => {
  return (
    <motion.div
      key="security"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={tabVariants}
      className="space-y-6 text-[#718EBF]"
    >
      <h2 className="text-xl font-semibold mb-4 !text-[#343C6A] ">Security</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-5 rounded-lg shadow bg-white"
      >
        <h3 className="text-lg !text-[#343C6A] font-medium mb-4">
          Authentication
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 mr-3 rounded-md bg-blue-50">
                <Key size={20} className="text-[#718EBF]" />
              </div>
              <div>
                <p className="font-medium">Change Password</p>
                <p className="text-sm text-gray-500">
                  Update your password regularly
                </p>
              </div>
            </div>
            <ChevronRight size={20} className="text-[#718EBF]" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 mr-3 rounded-md bg-blue-50">
                <Smartphone size={20} className="text-[#718EBF]" />
              </div>
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">
                  Add an extra layer of security
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <Input
                type="checkbox"
                checked={enableNotifications}
                className="sr-only peer"
                onChange={() => setEnableNotification(!enableNotifications)}
              />
              <div
                className={cn(
                  "w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all",
                  enableNotifications ? "bg-green-600 " : "bg-[#343C6A]"
                )}
              />
            </label>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-5 rounded-lg shadow bg-white"
      >
        <h3 className="text-lg !text-[#343C6A] font-medium mb-4">
          Security Controls
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 mr-3 rounded-md bg-blue-50">
                <Lock size={20} className="text-[#718EBF]" />
              </div>
              <div>
                <p className="font-medium">Transaction PIN</p>
                <p className="text-sm text-gray-500">
                  Required for all financial transactions
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type={showPassword ? "text" : "password"}
                className="!h-[38px] py-1 rounded-md w-24bg-[#343C6A] text-[#343C6A] border-gray-200 w-[80px]"
                value={showPassword ? "1234" : "••••"}
                readOnly
              />
              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={20} className="text-[#718EBF]" />
                ) : (
                  <Eye size={20} className="text-[#718EBF]" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 mr-3 rounded-md bg-blue-50">
                <Shield size={20} className="text-[#718EBF]" />
              </div>
              <div>
                <p className="font-medium">Biometric Authentication</p>
                <p className="text-sm text-gray-500">
                  Use fingerprint or face ID
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <Input
                type="checkbox"
                className="sr-only peer"
                checked={enableBiometrics}
                onChange={() => setSnableBiometrics(!enableBiometrics)}
              />
              <div
                className={cn(
                  "w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all",
                  enableBiometrics ? "bg-green-600 " : "bg-[#343C6A]"
                )}
              />
            </label>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-5 rounded-lg shadow bg-white"
      >
        <h3 className="text-lg !text-[#343C6A] font-medium mb-4">
          Device Management
        </h3>
        <div className="space-y-4">
          <div className={`p-4 rounded-md `}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">Current Device</p>
              <span
                className="px-2 py-1 text-xs rounded-full
                    bg-green-100 text-green-800"
              >
                Active
              </span>
            </div>
            <p className="text-sm text-gray-500">
              MacBook Pro • Los Angeles, USA
            </p>
            <p className="text-sm text-gray-500">
              Last accessed: Today at 2:45 PM
            </p>
          </div>

          <Button className="w-full h-[50px] py-2 text-center rounded-md ">
            Manage All Devices
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Security;
