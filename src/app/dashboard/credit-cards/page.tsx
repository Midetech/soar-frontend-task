"use client";
import CreditCard from "components/components/CreditCard";
import { CardDetail } from "components/interfaces/card";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";
import { fetcher } from "components/services/http-requests";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const Page = () => {
  const { data: cards } = useSWR("/api/cards", fetcher);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-6 lg:px-10 md:px-10 px-4 flex xl:justify-normal justify-center flex-wrap gap-[20px] overflow-auto"
    >
      <AnimatePresence mode="wait">
        {cards?.map((card: CardDetail) => (
          <motion.div key={card.id} variants={itemVariants}>
            <CreditCard
              className="md:w-[330px] w-[344px] xl:w-[355px]"
              {...{ card }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Page;
