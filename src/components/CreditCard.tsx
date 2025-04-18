import React from "react";
import Typography from "./Typography";
import { Card } from "./ui/card";
import { cn } from "components/lib/utils";
import { CardDetail } from "components/interfaces/card";
import { Icons } from "./icons";

const CreditCard = ({
  card,
  activeCard,
  setActiveCard,
  className,
}: {
  className?: string;
  card: CardDetail;
  activeCard?: number | null;
  setActiveCard?: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <Card
      onClick={() => setActiveCard?.(card.id ?? undefined)}
      style={{
        background:
          activeCard === card.id
            ? "linear-gradient(107deg, #5B5A6F 2.61%, #000 101.2%)"
            : "#fff",
      }}
      key={card.id}
      className={cn(
        "pt-6 pb-0 md:h-[235px] shrink-0 lg:shrink gap-[23px] xl:shrink-0 ",
        activeCard === card.id
          ? " text-white"
          : "border !border-[#DFEAF2] text-[#343C6A] ",
        className
      )}
    >
      <div className="flex items-center justify-between px-6">
        <div>
          <Typography
            text="Balance"
            className="lg:text-xs text-[10px] font-normal"
          />
          <Typography
            text={`${new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: card.currency,
            }).format(card.balance)}`}
            className="lg:text-lg text-base"
          />
        </div>

        {activeCard === card.id ? (
          <Icons.CardChip />
        ) : (
          <Icons.InactiveChipCard />
        )}
      </div>

      <div className="flex items-center justify-between px-6">
        <div>
          <Typography
            text="CARD HOLDER"
            className="lg:text-xs text-[10px] font-normal"
          />
          <Typography
            text={card.cardHolder}
            className="lg:text-[15px] text-[13px] font-semibold"
          />
        </div>

        <div>
          <Typography
            text="VALID THRU"
            className="lg:text-xs text-[10px] font-normal"
          />
          <Typography
            text={card.expiry}
            className="lg:text-[15px] text-[13px] font-semibold"
          />
        </div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%)",
        }}
        className={cn(
          "flex justify-between items-center md:h-[70px] px-6 w-full h-[51px] rounded-b-[25px] shrink-0",
          activeCard === card.id
            ? "border-red-600"
            : "border-t border-t-[#DFEAF2]"
        )}
      >
        <Typography
          text={card.cardNumber}
          className="lg:text-[22px] text-[15px] font-semibold"
        />
        <Icons.MasterCard className="xl:size-[44px] w-[27px]" />
      </div>
    </Card>
  );
};

export default CreditCard;
