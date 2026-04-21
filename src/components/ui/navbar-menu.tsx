"use client";
import React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";


const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  megaMenu,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  megaMenu?: boolean;
}) => {
  return (
    <div className="relative ">
      <motion.p
        onClick={() => setActive(active === item ? null : item)}
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-neutral-800 hover:text-blue-600 font-medium text-[15px] flex items-center gap-1"
      >
        {item}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </motion.p>
      {active === item && (
        <div className={cn(
           "pt-4",
           megaMenu ? "fixed top-[72px] inset-x-0 mx-auto w-full max-w-7xl z-50 px-4" : "absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2"
        )}>
          {megaMenu ? (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-2xl"
            >
              {children}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={transition}
            >
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      className={cn("relative flex items-center space-x-6", className)}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-600 hover:text-blue-600 font-medium"
    >
      {children}
    </a>
  );
};
