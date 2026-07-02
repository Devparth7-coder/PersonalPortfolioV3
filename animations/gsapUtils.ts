import gsap from 'gsap';

export function animateReveal(element: HTMLElement | null, delay = 0) {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out' }
  );
}

export function animateStagger(elements: NodeListOf<Element> | HTMLElement[], delay = 0, staggerTime = 0.15) {
  if (!elements || elements.length === 0) return;
  gsap.fromTo(
    elements,
    { opacity: 0, y: 40, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.7, delay, stagger: staggerTime, ease: 'back.out(1.4)' }
  );
}

export function animatePulseGlow(element: HTMLElement | null) {
  if (!element) return;
  gsap.to(element, {
    boxShadow: '0 0 35px rgba(6, 182, 212, 0.7)',
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: 'sine.inOut',
  });
}

export function animateParallax(element: HTMLElement | null, speed = 0.2) {
  if (!element || typeof window === 'undefined') return;
  const handleScroll = () => {
    const y = window.scrollY * speed;
    gsap.to(element, { y, duration: 0.5, ease: 'power1.out' });
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}
