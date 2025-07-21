'use client';

import { cn } from '@/lib/utils';
import { motion, type MotionProps } from 'framer-motion';
import { Button, type ButtonProps } from './button';

interface AnimationProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

interface SlideInProps extends AnimationProps {
  direction?: 'up' | 'down' | 'left' | 'right';
}

interface StaggerContainerProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

// Fade In Animation
export const FadeIn = ({ children, className, delay = 0, duration = 0.5, ...props }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    className={cn(className)}
    {...props}
  >
    {children}
  </motion.div>
);

// Slide In Animation
export const SlideIn = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  ...props
}: SlideInProps) => {
  const variants = {
    up: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  };

  return (
    <motion.div
      initial={variants[direction].initial}
      animate={variants[direction].animate}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scale In Animation
export const ScaleIn = ({ children, className, delay = 0, duration = 0.5, ...props }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay }}
    className={cn(className)}
    {...props}
  >
    {children}
  </motion.div>
);

// Stagger Container for multiple items
export const StaggerContainer = ({ children, className, staggerDelay = 0.1, ...props }: StaggerContainerProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }}
    className={cn(className)}
    {...props}
  >
    {children}
  </motion.div>
);

// Stagger Item for use inside StaggerContainer
export const StaggerItem = ({ children, className, ...props }: AnimationProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    className={cn(className)}
    {...props}
  >
    {children}
  </motion.div>
);

// Hover Animation
export const HoverCard = ({ children, className, ...props }: AnimationProps) => (
  <motion.div
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.98 }}
    className={cn(className)}
    {...props}
  >
    {children}
  </motion.div>
);

// Button with animation
export const AnimatedButton = ({ children, className, ...props }: ButtonProps) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.95 }}
  >
    <Button className={cn(className)} {...props}>
      {children}
    </Button>
  </motion.div>
);

// Page Transition
export const PageTransition = ({ children, className, ...props }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3 }}
    className={cn(className)}
    {...props}
  >
    {children}
  </motion.div>
);
