"use-client";
import React, { useState, useEffect } from "react";
import { routes } from "../routes";
import Link from "next/link";
import Logo from "./partials/Logo";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [selected, setSelected] = useState<string | null>(0);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (item: string) => {
    setSelected(item);
  };
  return (
    <header>
      <nav>
        <div className="w-full bg-white/5 border-b border-gray-900">
          <div className="grid container mx-auto grid-flow-col px-16 py-8">
            <div>
              <Logo fullName="Hari Upreti"></Logo>
            </div>
            <div className="my-auto">
              <ul className="grid grid-flow-col gap-6">
                {isClient &&
                  routes.map((route, key) => (
                    <Link href={route.path} key={"each-header-item-" + key}>
                      <motion.li
                        key={`animated-motion-key-${key}`}
                        className={`text-center  text-white/40 ${
                          pathname === route.path ? "text-white/90" : ""
                        }`}
                        onClick={(key: string) => handleClick(key)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {route.name}
                        {pathname === route.path && (
                          <motion.div
                            layoutId="underline"
                            className=" bg-blue-700 rounded-full h-10 -mt-8 "
                          />
                        )}
                      </motion.li>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
