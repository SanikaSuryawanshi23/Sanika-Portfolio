import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = { threshold: 0.15, triggerOnce: true }) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observerRef = ref.current;
    if (!observerRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && options.triggerOnce) {
        observer.unobserve(observerRef);
      }
    }, options);

    observer.observe(observerRef);

    return () => {
      if (observerRef && !options.triggerOnce) {
        observer.unobserve(observerRef);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, isIntersecting];
};
