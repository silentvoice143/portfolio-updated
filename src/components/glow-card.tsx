"use client";

import React, { ReactNode, useRef } from "react";

type CardType = {
  review: string;
};

type Props = {
  children: ReactNode;
  card: CardType;
  index: number;
};

const GlowCard = ({ children, card, index }: Props) => {
  // ✅ Properly typed ref (array of divs or null)
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);

  // ✅ Typed handler
  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current[index];
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      el.style.setProperty("--start", `${angle + 60}`);
    };

  return (
    <div
      ref={(el) => {
        cardRef.current[index] = el;
      }}
      className="card card-border timeline-card rounded-xl p-10 h-full"
      onMouseMove={handleMouseMove(index)}
    >
      <div className="glow"></div>

      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" alt="star" key={i} className="size-5" />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {children}
    </div>
  );
};

export default GlowCard;
