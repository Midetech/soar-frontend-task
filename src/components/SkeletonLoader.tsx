"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "components/lib/utils";

interface SkeletonProps {
  className?: string;
  animated?: boolean;
  variant?: "card" | "transaction" | "user" | "chart" | "text";
  count?: number;
}

const pulseAnimation = {
  initial: { opacity: 0.6 },
  animate: {
    opacity: [0.6, 1, 0.6],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const SkeletonLoader: React.FC<SkeletonProps> = ({
  className,
  animated = true,
  variant = "chart",
  count = 1,
}) => {
  const renderSkeleton = () => {
    switch (variant) {
      case "text":
        return (
          <div className={cn("h-4 bg-gray-200 rounded w-3/4", className)} />
        );

      case "transaction":
        return (
          <div className="space-y-4 w-full">
            {Array(count)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex items-center gap-x-3">
                  <div className="size-[50px] rounded-full bg-gray-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                  </div>
                  <div className="h-5 bg-gray-200 rounded w-16" />
                </div>
              ))}
          </div>
        );

      case "user":
        return (
          <div className="flex gap-4 overflow-x-auto py-2">
            {Array(count)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex flex-col items-center gap-y-2">
                  <div className="size-14 rounded-full bg-gray-200" />
                  <div className="h-3 bg-gray-200 rounded w-16" />
                </div>
              ))}
          </div>
        );

      case "chart":
        return (
          <div className="w-full h-[276px] rounded-lg bg-gray-200 flex items-center justify-center">
            <div className="size-12 rounded-full bg-gray-300" />
          </div>
        );

      case "card":
      default:
        return (
          <div
            className={cn("w-full h-64 rounded-lg bg-gray-200", className)}
          />
        );
    }
  };

  if (animated) {
    return (
      <motion.div
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
        className="w-full"
      >
        {renderSkeleton()}
      </motion.div>
    );
  }

  return <div className="w-full">{renderSkeleton()}</div>;
};

// For multiple skeletons in a container
export const SkeletonGroup: React.FC<{
  children: React.ReactNode;
  isLoading: boolean;
}> = ({ children, isLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3 },
      }}
    >
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      ) : null}
    </motion.div>
  );
};

// Example usage:
// <SkeletonLoader variant="transaction" count={3} />
// <SkeletonGroup isLoading={isLoading}>
//   <SkeletonLoader variant="card" />
// </SkeletonGroup>

export default SkeletonLoader;
