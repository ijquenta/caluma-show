"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: React.ReactElement | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 p-4 sm:p-6 md:grid-cols-2 lg:grid-cols-3 lg:p-10">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "min-h-[320px] sm:min-h-[420px]")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden rounded-3xl",
              selected?.id === card.id
                ? "absolute inset-0 z-50 flex h-full w-full cursor-pointer flex-col justify-end"
                : lastSelected?.id === card.id
                ? "z-40 h-full w-full rounded-3xl bg-transparent"
                : "h-full w-full rounded-3xl bg-transparent"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      {selected?.id && (
        <motion.div
          onClick={handleOutsideClick}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className="absolute inset-0 z-0 h-full w-full object-cover transition duration-200"
      alt="Show thumbnail"
      loading="lazy"
      onError={() => {
        console.error("Error loading image:", card.thumbnail);
      }}
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <motion.div
      layoutId={`content-${selected?.id}`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative z-[60] space-y-3 rounded-3xl bg-white/95 px-6 py-6 text-neutral-900 shadow-2xl dark:bg-neutral-900/95 dark:text-neutral-100 sm:px-8 sm:py-8"
    >
      {selected?.content}
    </motion.div>
  );
};
