"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/40 disabled:opacity-50 disabled:pointer-events-none group select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold shadow-sm shadow-amber-500/20 active:bg-amber-500",
    secondary:
      "bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-900 dark:border-neutral-200",
    outline:
      "border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-800 dark:text-neutral-200 bg-transparent hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50",
    ghost:
      "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 bg-transparent",
  };

  const combinedClass = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={combinedClass}
        >
          {children}
          {icon && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
        </motion.a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClass}
      >
        {children}
        {icon && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClass}
      {...(props as HTMLMotionProps<"button">)}
    >
      {children}
      {icon && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </motion.button>
  );
}
