import React from "react";
import { sidebarLinks } from "../constants/index";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lgLw-[264px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((item: any) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              key={item.label}
              to={item.route}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <img src={item.imgURL} alt={item.label} className="w-6 h-6" />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
