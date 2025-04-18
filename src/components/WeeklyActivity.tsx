import React from "react";
import { Card } from "./ui/card";
import Typography from "./Typography";

const WeeklyActivity = () => {
  return (
    <div className="flex flex-col gap-y-[20px] col-span-2">
      <Typography text="Weekly Activity" />
      <Card className="w-full h-[276px] bg-white shadow-md p-4"></Card>
    </div>
  );
};

export default WeeklyActivity;
