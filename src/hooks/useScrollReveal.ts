import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseScrollRevealOptions {
  threshold?: number;
  once?: boolean;
  delay?: number;
}

export const useScrollReveal = (options?: UseScrollRevealOptions) => {
  const ref = useRef<HTMLElement | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    amount: options?.threshold ?? 0.3,
    margin: '-100px 0px -100px 0px'
  });

  useEffect(() => {
    if (isInView && !hasRevealed) {
      if (options?.delay) {
        const timer = setTimeout(() => {
          setHasRevealed(true);
        }, options.delay);
        return () => clearTimeout(timer);
      } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHasRevealed(true);
      }
    }
  }, [isInView, hasRevealed, options?.delay]);

  return { ref, isInView: hasRevealed || isInView };
};