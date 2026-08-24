import { useRef } from "react";
import { useInView } from "react-intersection-observer";

type RevealProps = {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
};

/**
 * Returns motion-compatible props that trigger a fade + slide animation
 * when the element scrolls into view.
 */
export function useScrollReveal({
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const offsets: Record<string, { x: number; y: number }> = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = offsets[direction];

  const setRefs = (node: HTMLDivElement | null) => {
    (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    inViewRef(node);
  };

  return {
    ref: setRefs,
    motion: {
      initial: { opacity: 0, x, y },
      animate: inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y },
      transition: { duration: 0.6, delay, ease: "easeOut" },
      className,
    },
    inView,
  };
}
