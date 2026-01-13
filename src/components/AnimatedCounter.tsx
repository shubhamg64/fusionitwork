import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ end, label, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedRef.current) {
            hasStartedRef.current = true;
            const increment = end / (duration / 16);

            intervalRef.current = setInterval(() => {
              countRef.current += increment;
              if (countRef.current >= end) {
                setCount(end);
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                }
              } else {
                setCount(Math.floor(countRef.current));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${label}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [end, label, duration]);

  return (
    <div id={`counter-${label}`} className="text-center animate-slide-in-up">
      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-600 mt-2">{label}</div>
    </div>
  );
}
