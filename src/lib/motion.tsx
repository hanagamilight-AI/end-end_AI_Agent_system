import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

interface MotionProps {
  children: ReactNode;
  initial?: CSSProperties;
  animate?: CSSProperties;
  exit?: CSSProperties;
  transition?: { duration?: number; delay?: number };
  key?: string | number;
  className?: string;
  whileHover?: CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

export function motion({
  children,
  initial,
  animate,
  transition,
  className = '',
}: MotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), (transition?.delay || 0) * 1000);
    return () => clearTimeout(timer);
  }, [transition?.delay]);

  const style: CSSProperties = {
    ...initial,
    transition: `all ${transition?.duration || 0.3}s ease-out`,
    ...(visible ? animate : {}),
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}

interface AnimatePresenceProps {
  children: ReactNode;
  mode?: 'wait' | 'sync';
}

export function AnimatePresence({ children }: AnimatePresenceProps) {
  return <>{children}</>;
}
