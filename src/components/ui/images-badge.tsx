"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ImagesBadgeProps {
  text: string;
  images: string[];
  className?: string;
  /** Optional link URL */
  href?: string;
  /** Link target attribute (e.g., "_blank" for new tab) */
  target?: string;
  /** Folder dimensions { width, height } in pixels */
  folderSize?: { width: number; height: number };
  /** Image dimensions when teased (peeking) { width, height } in pixels */
  teaserImageSize?: { width: number; height: number };
  /** Image dimensions when hovered { width, height } in pixels */
  hoverImageSize?: { width: number; height: number };
  /** How far images translate up on hover in pixels */
  hoverTranslateY?: number;
  /** How far images spread horizontally on hover in pixels */
  hoverSpread?: number;
  /** Rotation angle for fanned images on hover in degrees */
  hoverRotation?: number;
  /** Layout direction: horizontal (default) or vertical */
  direction?: "horizontal" | "vertical";
  /** Whether the images should pop out behind the folder icon */
  imagesBehind?: boolean;
  /** Optional class for the label text */
  textClassName?: string;
}

export function ImagesBadge({
  text,
  images,
  className,
  href,
  target,
  folderSize = { width: 32, height: 24 },
  teaserImageSize = { width: 20, height: 14 },
  hoverImageSize = { width: 48, height: 32 },
  hoverTranslateY = -35,
  hoverSpread = 20,
  hoverRotation = 15,
  direction = "horizontal",
  imagesBehind = false,
  textClassName,
}: ImagesBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Limit to max 3 images
  const displayImages = images.slice(0, 3);

  // Calculate folder tab dimensions proportionally
  const tabWidth = folderSize.width * 0.375;
  const tabHeight = folderSize.height * 0.25;

  const Component = href ? "a" : "div";

  return (
    <Component
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex cursor-pointer items-center gap-4 perspective-[1000px] transform-3d",
        direction === "vertical" ? "flex-col justify-center" : "gap-2",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Folder Container */}
      <motion.div
        className="relative"
        style={{
          width: folderSize.width,
          height: folderSize.height,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Folder Back */}
        <div 
          className="absolute inset-0 rounded-[4px] bg-gradient-to-b from-blue-400 to-blue-500 shadow-sm dark:from-blue-500 dark:to-blue-600"
          style={{ zIndex: imagesBehind ? 10 : 0 }}
        >
          {/* Folder Tab */}
          <div
            className="absolute left-0.5 rounded-t-[2px] bg-gradient-to-b from-blue-300 to-blue-400 dark:from-blue-400 dark:to-blue-500"
            style={{
              top: -tabHeight * 0.65,
              width: tabWidth,
              height: tabHeight,
              zIndex: imagesBehind ? 11 : 0
            }}
          />
        </div>

        {/* Images that pop out */}
        {displayImages.map((image, index) => {
          const totalImages = displayImages.length;

          // Calculate rotation based on index
          const baseRotation =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverRotation
                : (index - 1) * hoverRotation;

          // Hover positions - fan out
          const hoverY = hoverTranslateY - (totalImages - 1 - index) * 3;
          const hoverX =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * hoverSpread
                : (index - 1) * hoverSpread;

          // Teaser positions - hide deep inside folder
          const teaseY = 15; 
          const teaseRotation =
            totalImages === 1
              ? 0
              : totalImages === 2
                ? (index - 0.5) * 3
                : (index - 1) * 3;

          return (
            <motion.div
              key={index}
              className="absolute top-0.5 left-1/2 origin-bottom overflow-hidden"
              animate={{
                x: `calc(-50% + ${isHovered ? hoverX : 0}px)`,
                y: isHovered ? hoverY : teaseY,
                rotate: isHovered ? baseRotation : teaseRotation,
                width: isHovered ? hoverImageSize.width : teaserImageSize.width,
                height: isHovered
                  ? hoverImageSize.height
                  : teaserImageSize.height,
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
               transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: index * 0.03,
              }}
              style={{
                zIndex: imagesBehind ? 5 + index : 10 + index,
              }}
            >
              <img
                src={image}
                alt={`Preview ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </motion.div>
          );
        })}

        {/* Folder Front (flattens on hover) */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[85%] origin-bottom rounded-[4px] bg-gradient-to-b from-blue-300 to-blue-400 shadow-sm dark:from-blue-400 dark:to-blue-500"
          animate={{
            rotateX: isHovered ? -45 : -25,
            scaleY: isHovered ? 0.8 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          style={{
            transformStyle: "preserve-3d",
            zIndex: 20,
          }}
        >
          {/* Folder line detail */}
          <div className="absolute top-1 right-1 left-1 h-px bg-blue-200/50 dark:bg-blue-300/50" />
        </motion.div>
      </motion.div>

      {/* Text */}
      <span className={cn(
        "text-sm font-medium text-neutral-700 dark:text-neutral-200",
        textClassName
      )}>
        {text}
      </span>
    </Component>
  );
}
