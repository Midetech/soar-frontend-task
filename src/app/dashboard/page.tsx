"use client";
import Cards from "components/components/Cards";
import { Icons } from "components/components/icons";
import Typography from "components/components/Typography";
import { Card } from "components/components/ui/card";
import UserScroller from "components/components/Users";
import WeeklyActivity from "components/components/WeeklyActivity";
import { CardDetail } from "components/interfaces/card";
import { Transaction } from "components/interfaces/transaction";
import { cn } from "components/lib/utils";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSWR from "swr";
import SkeletonLoader from "components/components/SkeletonLoader";
import BalanceHistory from "components/components/BalanceHistory";
import ExpenseDashboard from "components/components/Expenses";

// Animation variants
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
  const { data: transactions, isLoading: isTransactionsLoading } = useSWR(
    "/api/transactions",
    fetcher
  );
  // const { data: chartData } = useSWR("/api/chart-data", fetcher);
  const { data: users, isLoading: isUsersLoading } = useSWR(
    "/api/users",
    fetcher
  );

  const [activeUser, setActiveUser] = React.useState<string | null>(null);
  const [activeCard, setActiveCard] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (cards) {
      setActiveCard(cards[0]?.id);
    }
  }, [cards]);

  React.useEffect(() => {
    if (users) {
      setActiveUser(users[0]?.id);
    }
  }, [users]);

  const colors = {
    card: "#FFF5D9",
    paypal: "#E7EDFF",
    bank: "#DCFAF8",
  };

  if (isUsersLoading || isTransactionsLoading || isUsersLoading) {
    return <SkeletonLoader />;
  }
  return (
    <motion.div
      className="py-6 lg:px-10 md:px-10 px-4 space-y-5 h-[80dvh] xl:h-[85dvh] overflow-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"
        variants={containerVariants}
      >
        <motion.div
          className="md:col-span-2 col-span-1"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            {isCardsLoading ? (
              <motion.div
                key="card-skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-64 rounded-lg bg-gray-100 animate-pulse"
              />
            ) : (
              <motion.div
                key="cards-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Cards
                  cards={cards as CardDetail[]}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex xl:col-span-1 flex-col gap-y-5 col-span-1 md:col-span-2"
          variants={itemVariants}
        >
          <Typography
            className="text-[#343C6A] text-base xl:text-[22px]"
            text="Recent Transactions"
          />

          <AnimatePresence mode="wait">
            {isTransactionsLoading ? (
              <motion.div
                key="transactions-skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-64 rounded-lg bg-gray-100 animate-pulse"
              />
            ) : (
              <Card className="xl:p-6 md:p-4 p-2 flex flex-col xl:gap-y-[20px] gap-y-[15px] bg-white xl:h-[235px] h-[214px] overflow-auto">
                <AnimatePresence>
                  {transactions?.map(
                    (transaction: Transaction, index: number) => (
                      <motion.div
                        key={transaction.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: index * 0.05 },
                        }}
                        exit={{ opacity: 0, y: -10 }}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: "rgba(0,0,0,0.01)",
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                        }}
                        className="h-[55px] w-full flex items-center gap-x-[17px] px-2 rounded-md"
                      >
                        <motion.div
                          className="size-[50px] rounded-full flex justify-center items-center"
                          style={{
                            backgroundColor:
                              colors[
                                transaction.channel as keyof typeof colors
                              ],
                          }}
                          whileHover={{
                            scale: 1.05,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            },
                          }}
                        >
                          {transaction.channel === "paypal" ? (
                            <Icons.PayPal className="md:size-5 size-5" />
                          ) : transaction.channel === "bank" ? (
                            <Icons.DollarIcon className="md:size-5 size-5" />
                          ) : (
                            <Icons.CardIcon className="md:size-5 size-5" />
                          )}
                        </motion.div>

                        <div className="flex flex-col">
                          <Typography
                            className="xl:text-base sm:text-sm text-sm text-[#232323]"
                            text={transaction.title}
                          />
                          <Typography
                            className="text-[#718EBF] xl:text-[15px] sm:text-sm text-[12px] font-normal"
                            text={new Date(transaction.date).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          />
                        </div>

                        <motion.div
                          initial={{ scale: 0.95 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.05 + 0.2 }}
                        >
                          <Typography
                            className={cn(
                              "xl:text-[17px] sm:text-sm text-[11px] ml-auto font-medium",
                              transaction.type === "credit"
                                ? "text-[#41D4A8]"
                                : "text-[#FF4B4A]"
                            )}
                            text={`${
                              transaction.type === "credit" ? "+" : "-"
                            }$${transaction.amount.toString()}`}
                          />
                        </motion.div>
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </Card>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid xl:grid-cols-3 grid-cols-1 gap-6"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="col-span-2">
          <AnimatePresence mode="wait">
            <WeeklyActivity />
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex flex-col gap-y-5 xl:col-span-1 col-span-2"
          variants={itemVariants}
        >
          <Typography className="text-[#343C6A]" text="Expense Statistics" />

          <motion.div whileHover={cardVariants.hover}>
            <Card className="h-[276px]">
              <ExpenseDashboard />
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid xl:grid-cols-5 gap-6"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col gap-y-5 xl:col-span-2"
          variants={itemVariants}
        >
          <Typography className="text-[#343C6A]" text="Quick Transfer" />

          <AnimatePresence mode="wait">
            {isUsersLoading ? (
              <motion.div
                key="users-skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-32 rounded-lg bg-gray-100 animate-pulse"
              />
            ) : (
              <motion.div
                key="users-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <UserScroller {...{ users, activeUser, setActiveUser }} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex flex-col gap-y-5 xl:col-span-3"
          variants={itemVariants}
        >
          <Typography className="text-[#343C6A]" text="Balance History" />

          <motion.div whileHover={cardVariants.hover}>
            <Card className="h-[276px]  p-4">
              <BalanceHistory />
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
