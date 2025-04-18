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

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Page = () => {
  const { data: cards } = useSWR("/api/cards", fetcher);
  const { data: transactions } = useSWR("/api/transactions", fetcher);
  // const { data: chartData } = useSWR("/api/chart-data", fetcher);
  const { data: users } = useSWR("/api/users", fetcher);

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

  console.log(activeUser);

  const colors = {
    card: "#FFF5D9",
    paypal: "#E7EDFF",
    bank: "#DCFAF8",
  };

  return (
    <div className="py-6 lg:px-10 md:px-10 px-4 space-y-5 h-[85dvh] overflow-auto">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="md:col-span-2 col-span-1">
          <Cards
            cards={cards as CardDetail[]}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        </div>

        <div className="flex xl:col-span-1 flex-col gap-y-5 col-span-1 md:col-span-2 ">
          <Typography
            className="text-[#343C6A] text-base xl:text-[22px]"
            text="Recent Transactions"
          />

          <Card className="xl:p-6 md:p-4 p-2 flex flex-col gap-y-[10px] bg-white">
            {transactions?.map((transaction: Transaction) => (
              <div
                key={transaction.id}
                className="h-[55px] w-full flex items-center gap-x-[17px]"
              >
                <div
                  className="size-[50px] rounded-full flex justify-center items-center"
                  style={{
                    backgroundColor:
                      colors[transaction.channel as keyof typeof colors],
                  }}
                >
                  {transaction.channel === "paypal" ? (
                    <Icons.PayPal className="md:size-5 size-5" />
                  ) : transaction.channel === "bank" ? (
                    <Icons.DollarIcon className="md:size-5 size-5" />
                  ) : (
                    <Icons.CardIcon className="md:size-5 size-5" />
                  )}
                </div>

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

                <Typography
                  className={cn(
                    " text-[17px] sm:text-sm text-[11px] ml-auto font-medium",
                    transaction.type === "credit"
                      ? "text-[#41D4A8]"
                      : "text-[#FF4B4A]"
                  )}
                  text={`${
                    transaction.type === "credit" ? "+" : "-"
                  }$${transaction.amount.toString()}`}
                />
              </div>
            ))}
          </Card>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-6">
        <WeeklyActivity />
        <div className="flex flex-col gap-y-5 xl:col-span-1 col-span-2">
          <Typography className="text-[#343C6A]" text="Expense Statistics" />

          <Card className="h-[276px]" />
        </div>
      </div>

      <div className="grid xl:grid-cols-5 gap-6">
        <div className="flex flex-col gap-y-5 xl:col-span-2">
          <Typography className="text-[#343C6A]" text="Quick Transfer" />

          <UserScroller {...{ users, activeUser, setActiveUser }} />
        </div>
        <div className="flex flex-col gap-y-5 xl:col-span-3">
          <Typography className="text-[#343C6A]" text="Balance History" />

          <Card className="h-[276px]" />
        </div>
      </div>
    </div>
  );
};

export default Page;
