import Link from "next/link";
import { IMenuItem } from "@/config/pages.config";

interface MenuItemProps extends IMenuItem {
  onClick?: () => void;
}

  

export function MenuItem({ name, href, onClick }: MenuItemProps) {
  return (
    <div className="relative">
      <Link href={href} className="text-white  hover:text-[#F0C471] transition-colors" onClick={onClick}>
        {name}
      </Link>
      
      
      

    </div>
  );
}