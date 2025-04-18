"use client";
import CreditCard from "components/components/CreditCard";
import { CardDetail } from "components/interfaces/card";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";
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

const cardVariants = {
  hover: {
    y: -5,
    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
    transition: { type: "spring", stiffness: 400, damping: 17 },
    borderRadius: "25px",
  },
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Page = () => {
  const { data: cards, isLoading: isCardsLoading } = useSWR(
    "/api/cards",
    fetcher
  );
  return (
    <motion.div
      // className="py-6 lg:px-10 md:px-10 px-4 space-y-5 h-[80dvh] xl:h-[85dvh] overflow-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-6 lg:px-10 md:px-10 px-4 flex xl:justify-normal justify-center flex-wrap gap-[20px] overflow-auto"
    >
      {cards?.map((card: CardDetail) => (
        <CreditCard
          className="md:w-[330px] w-[344px] xl:w-[355px]"
          key={card.id}
          {...{ card }}
        />
      ))}
    </motion.div>
  );
};

export default Page;
