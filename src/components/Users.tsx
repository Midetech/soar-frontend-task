"use client";

import { User } from "components/interfaces/user";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import UserCard from "./UserCard";

export default function UsersComponent({
  users,
  activeUser,
  setActiveUser,
}: {
  users: User[];
  activeUser: User | null;
  setActiveUser: React.Dispatch<React.SetStateAction<User | null>>;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [amount, setAmount] = useState<string>("");

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 180;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    // Set left scroll visibility
    setCanScrollLeft(scrollLeft > 0);

    // Only hide right scroll when fully scrolled to the right
    const atRightEnd = scrollLeft + clientWidth >= scrollWidth - 5;
    setCanScrollRight(!atRightEnd);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => checkScroll();

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScroll);

    // Initial scroll check to keep it dynamic
    setTimeout(() => checkScroll(), 50);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const handleSend = () => {
    if (!activeUser) {
      toast.error("Please select a user to send money to");
      return;
    }
    if (!amount) {
      toast.error("Please enter an amount");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      toast.success(`You have sent $${amount} to ${activeUser?.name}`, {
        description: "Transaction successful",
        duration: 3000,
      });
      setAmount("");
      setIsLoading(false);
    }, 500);
  };

  return (
    <Card className="w-full shadow-sm lg:h-[276px] col-span-1 py-[35px] px-[25px]">
      <div className="flex items-center justify-between relative">
        {canScrollLeft && (
          <div>
            <button
              onClick={() => scroll("left")}
              className="absolute -left-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10"
            >
              <ChevronLeft className="text-[#7a88b1]" size={20} />
            </button>
          </div>
        )}
        <div
          className="flex xl:gap-[28px] gap-4 overflow-x-auto scroll-smooth no-scrollbar xl:w-[394px] w-[275px]"
          ref={scrollRef}
        >
          {users?.map((user: User) => (
            <UserCard key={user.id} {...{ user, activeUser, setActiveUser }} />
          ))}
        </div>
        {canScrollRight && (
          <div>
            <button
              onClick={() => scroll("right")}
              className=" absolute -right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
            >
              <ChevronRight className="text-[#7a88b1] text-[15px]" size={20} />
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between rounded-full px-4 py-2">
        <span className="text-[#7a88b1] text-sm">Write Amount</span>
        <div className="flex justify-between items-center xl:w-[256px] bg-[#EDF1F7] rounded-[50px]">
          <Input
            type="number"
            placeholder="0.00"
            className="bg-transparent text-[#7a88b1] text-xl w-full text-center outline-none border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none shadow-none h-full "
            value={amount}
            onChange={(e) => {
              const value = e.target.value;

              setAmount(value);
            }}
          />
          <Button
            onClick={handleSend}
            type="button"
            disabled={isLoading}
            className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-full lg:w-[125px] w-[90px]"
          >
            {isLoading ? (
              <Icons.spinner className="animate-spin" />
            ) : (
              <>
                <Send size={16} />
                Send
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
}
