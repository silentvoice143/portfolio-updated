import React from "react";

interface AnimatedButtonProps {
  className?: string;
  text: string;
  id?: string;
  onClick?: () => void;
}
function AnimatedButton({ className, text, id }: AnimatedButtonProps) {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        const targetId = id || "hoho";
        const target = document.getElementById(targetId);

        if (target) {
          const offset = 180;

          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }}
      id={id}
      className={`${className ? className : ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
}

export default AnimatedButton;
