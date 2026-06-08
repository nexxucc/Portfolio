import { useEffect } from 'react';

export function useReveal(dependencyKey) {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.fade-up, .stagger-children');

    revealElements.forEach((element) => {
      element.classList.remove('visible');
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, [dependencyKey]);
}