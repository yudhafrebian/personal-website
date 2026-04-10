"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Utilitas shadcn

interface TimelineProps {
  items: {
    title: string;
    date: string;
    description: string;
  }[];
  orientation?: "vertical" | "horizontal";
  contentPosition?: "left" | "right" | "top" | "bottom" | "zigzag";
}

export const Timeline = ({
  items,
  orientation = "vertical",
  contentPosition = "zigzag",
}: TimelineProps) => {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={cn(
        "relative flex w-full",
        isVertical ? "flex-col py-10" : "flex-row overflow-x-auto py-20 px-10"
      )}
    >
      {/* Garis Utama (Line) */}
      <div
        className={cn(
          "absolute bg-linear-to-b from-transparent via-white/20 to-transparent",
          isVertical
            ? "left-1/2 -translate-x-1/2 h-full w-0.5"
            : "top-1/2 -translate-y-1/2 w-full h-0.5 left-0"
        )}
      />

      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        
        // Logika Posisi Konten
        let alignmentClass = "";
        if (isVertical) {
          if (contentPosition === "left") alignmentClass = "flex-row-reverse pr-[50%] mr-8";
          else if (contentPosition === "right") alignmentClass = "pl-[50%] ml-8";
          else if (contentPosition === "zigzag") alignmentClass = isEven ? "flex-row-reverse pr-[50%] mr-8" : "pl-[50%] ml-8";
        } else {
          if (contentPosition === "top") alignmentClass = "flex-col-reverse pb-[50px] -translate-y-1/2";
          else if (contentPosition === "bottom") alignmentClass = "flex-col pt-[50px] translate-y-1/2";
          else if (contentPosition === "zigzag") alignmentClass = isEven ? "flex-col-reverse pb-[50px] -translate-y-1/2" : "flex-col pt-[50px] translate-y-1/2";
        }

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn("relative flex items-center justify-center", isVertical ? "mb-12" : "min-w-75", alignmentClass)}
          >
            {/* Titik (Dot) */}
            <div className={cn(
              "absolute z-10 w-4 h-4 rounded-full border-4 border-[#0a0a0a] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]",
              isVertical ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2"
            )} />

            {/* Kartu Konten (Glass Style) */}
            <div className="p-4 rounded-xl border border-white/10 bg-white/3 backdrop-blur-md max-w-sm w-full hover:border-white/20 transition-all">
              <time className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">{item.date}</time>
              <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mt-2">{item.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};