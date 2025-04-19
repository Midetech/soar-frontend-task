import { CardDetail } from "components/interfaces/card";
import Link from "next/link";
import React from "react";
import CreditCard from "./CreditCard";
import Typography from "./Typography";

const Cards = ({
  cards,
  activeCard,
  setActiveCard,
}: {
  cards: CardDetail[];
  activeCard: number | null;
  setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <div className="flex flex-col gap-y-[20px]">
      <div className="flex items-center justify-between">
        <Typography className="text-[#343C6A]" text="My Cards" />
        <Link className="" href={"/dashboard/credit-cards"}>
          <p className="text-[#343C6A] hover:text-[#343C6A]/70 text-[17px] font-semibold lg:pr-6">
            See All
          </p>
        </Link>
      </div>

      <div className="xl:w-full w-[95dvw] lg:w-full overflow-auto">
        <div className="flex lg:gap-[30px] md:gap-3 gap-5 xl:w-full lg:w-full w-[580px]">
          {cards?.map((card: CardDetail) => (
            <CreditCard
              className="md:w-1/2 w-[265px] xl:w-[365px] lg:shrink-0 lg:w-[350px]"
              key={card.id}
              {...{ card, activeCard, setActiveCard }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
