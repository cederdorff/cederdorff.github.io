import { useEffect, useState } from "react";

export default function useCyclingText(words, interval = 2600) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);

    return () => clearInterval(id);
  }, [words, interval]);

  return words[index];
}
