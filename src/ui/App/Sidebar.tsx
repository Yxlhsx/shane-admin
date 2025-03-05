"use client";

import { useState } from "react";
import classNames from "classnames";
import { motion } from "motion/react";
import { RiPushpinFill, RiPushpinLine } from "react-icons/ri";
import MenuList from "@/ui/MenuList";

export default function AppSidebar() {
  const [fixed, setFixed] = useState(true);

  const menuList = [
    {
      name: "dashboard",
      link: "/dashboard",
    },
    {
      name: "demo",
      link: "/demo",
    },
  ];

  return (
    <motion.aside
      className={classNames(
        "flex-none h-screen pr-8 bg-red-100 transform-fill"
      )}
      initial={{
        width: fixed ? "300px" : "80px",
      }}
      animate={{
        width: fixed ? "300px" : "80px",
      }}
      whileHover={{
        width: "300px",
      }}
    >
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-semibold">Shane Admin</h1>

        <div
          className="cursor-pointer"
          onClick={() => {
            setFixed((val) => !val);
          }}
        >
          {fixed ? <RiPushpinFill size={20} /> : <RiPushpinLine size={20} />}
        </div>
      </div>
      侧边栏
      <MenuList list={menuList} />
    </motion.aside>
  );
}
