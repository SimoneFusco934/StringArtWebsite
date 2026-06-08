import { useRef } from 'react';

export const useSmoothScroll = (offset = 40) => {
  const elementRef = useRef(null);

  const scrollToElement = () => {
    if (elementRef.current) {
      const elementPos = elementRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      });
    }
  };

  return [elementRef, scrollToElement];
};