import { cn } from "components/lib/utils";
import React from "react";

const Typography = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={cn("text-[22px] font-semibold", className)}>{text}</p>;
};

export default Typography;
