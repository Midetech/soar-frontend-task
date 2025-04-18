import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "components/interfaces/user";
import { cn } from "components/lib/utils";

const UserCard = ({
  user,
  activeUser,
  setActiveUser,
}: {
  user: User;
  activeUser: string | null;
  setActiveUser: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <div
      onClick={() => setActiveUser(user.id)}
      className={cn(
        "flex justify-center items-center flex-col w-[94] ",
        activeUser === user.id ? "font-bold" : "font-normal"
      )}
    >
      <Avatar className="xl:size-[94px] size-[50px]">
        <AvatarImage src={user.image} alt={user.name} />
        <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <p className=" text-black xl:text-base text-xs mt-2 text-nowrap">
        {user.name}
      </p>
      <p className="text-[#7a88b1]">{user.role}</p>
    </div>
  );
};

export default UserCard;
