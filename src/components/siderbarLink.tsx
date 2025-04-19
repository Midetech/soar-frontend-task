import { cn } from "components/lib/utils";
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
    <a
      href={link.url}
      className={cn(
        "block xl:w-[250px] w-[210px] h-[60px] xl:text-lg text-sm hover:text-[#232323]/80 focus:outline-none focus:ring-2 focus:ring-[#232323] focus:ring-offset-2",
        !isActive ? "text-[#B1B1B1]" : "text-[#232323]"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <div className="flex gap-[26px]">
        <div
          className={cn(
            "w-1.5 h-[60px] rounded-r-[10px] shrink-0",
            isActive ? " bg-[#232323]" : "bg-transparent"
          )}
          aria-hidden="true"
        />

        <div className="flex items-center gap-[26px] xl:ml-[30px]">
          <Icon className="shrink-0" aria-hidden="true" />
          <span className="font-medium">{link.label}</span>
        </div>
      </div>
    </a>
  );
};

export default SiderbarLink;
