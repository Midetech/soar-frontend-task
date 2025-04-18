import { cn } from "components/lib/utils";
import Link from "next/link";
import { IconProps } from "./icons";

const SiderbarLink = ({
  link,
  isActive = false,
}: {
  link: {
    id: number;
    icon: React.FC<IconProps>;
    label: string;
    url: string;
  };
  isActive?: boolean;
}) => {
  const Icon = link.icon;

  return (
    <Link href={link.url}>
      <div
        className={cn(
          "w-[250px] h-[60px] text-lg flex gap-[26px] hover:text-[#232323]/80",
          !isActive ? "text-[#B1B1B1]" : "text-[#232323]"
        )}
      >
        <div
          className={cn(
            "w-1.5 h-[60px] rounded-r-[10px] shrink-0",
            isActive ? " bg-[#232323]" : "bg-transparent"
          )}
        />

        <div className="flex items-center gap-[26px] ml-[30px]">
          <Icon className="shrink-0" />
          <span className="font-medium ">{link.label}</span>
        </div>
      </div>
    </Link>
  );
};

export default SiderbarLink;
