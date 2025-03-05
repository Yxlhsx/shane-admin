"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname  } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";
import { Menu } from "./type";

interface MenuListItemProps extends Menu {}

export default function MenuListItem({
  name,
  link,
  children,
}: MenuListItemProps) {
  const pathname = usePathname()
  console.log(pathname);

  return (
    <>
      {children && children.length > 0 ? (
        <div>
          <li className="flex justify-between items-center h-10 pl-10 pr-4 bg-blue-400 rounded-r-full">
            <div>{name}</div>
            <motion.div>
              <FaAngleRight size={20} />
            </motion.div>
          </li>
        </div>
      ) : (
        <Link href={link || "#"}>
          <li className="flex justify-between items-center h-10 pl-10 pr-4 bg-blue-400 rounded-r-full">
            <div>{name}</div>
            <motion.div>
              <FaAngleRight size={20} />
            </motion.div>
          </li>
        </Link>
      )}
    </>
  );
}
