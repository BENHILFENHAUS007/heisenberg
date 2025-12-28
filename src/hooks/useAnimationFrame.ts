import { useEffect, useRef } from 'react';

/**
 * Custom hook for requestAnimationFrame with automatic cleanup
 * Prevents memory leaks by canceling animation frames on unmount
 * 
 * @param callback - Function to call on each frame
 * @param deps - Dependencies array to control when to restart the animation
 * @returns Object with start and stop functions for manual control
 */
export const useAnimationFrame = (
  callback: (deltaTime: number) => void,
  deps: React.DependencyList = []
) => {
  const requestIdRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const stop = () => {
    if (requestIdRef.current) {
      cancelAnimationFrame(requestIdRef.current);
    }
  };

  const start = () => {
    if (!requestIdRef.current) {
      requestIdRef.current = requestAnimationFrame(animate);
    }
  };

  return { start, stop };
};

/**
 * Simple version without delta time tracking
 * Use this for simpler animations that don't need frame timing
 */
export const useSimpleAnimationFrame = (
  callback: () => void,
  deps: React.DependencyList = []
) => {
  const requestIdRef = useRef<number>();

  const animate = () => {
    callback();
    requestIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
