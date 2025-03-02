import { useRef, useEffect, MouseEvent, TouchEvent } from 'react';

interface DragScrollState {
  isDragging: boolean;
  startX: number;
  scrollLeft: number;
}

export function useDragScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<DragScrollState>({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const onMouseDown = (e: MouseEvent) => {
      dragState.current = {
        isDragging: true,
        startX: e.pageX - element.offsetLeft,
        scrollLeft: element.scrollLeft,
      };
    };

    const onMouseUp = () => {
      dragState.current.isDragging = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!dragState.current.isDragging) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - dragState.current.startX) * 2;
      element.scrollLeft = dragState.current.scrollLeft - walk;
    };

    const onTouchStart = (e: TouchEvent) => {
      dragState.current = {
        isDragging: true,
        startX: e.touches[0].pageX - element.offsetLeft,
        scrollLeft: element.scrollLeft,
      };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!dragState.current.isDragging) return;
      const x = e.touches[0].pageX - element.offsetLeft;
      const walk = (x - dragState.current.startX) * 2;
      element.scrollLeft = dragState.current.scrollLeft - walk;
    };

    element.addEventListener('mousedown', onMouseDown as any);
    element.addEventListener('mouseleave', onMouseUp as any);
    element.addEventListener('mouseup', onMouseUp as any);
    element.addEventListener('mousemove', onMouseMove as any);
    element.addEventListener('touchstart', onTouchStart as any);
    element.addEventListener('touchend', onMouseUp as any);
    element.addEventListener('touchmove', onTouchMove as any);

    return () => {
      element.removeEventListener('mousedown', onMouseDown as any);
      element.removeEventListener('mouseleave', onMouseUp as any);
      element.removeEventListener('mouseup', onMouseUp as any);
      element.removeEventListener('mousemove', onMouseMove as any);
      element.removeEventListener('touchstart', onTouchStart as any);
      element.removeEventListener('touchend', onMouseUp as any);
      element.removeEventListener('touchmove', onTouchMove as any);
    };
  }, []);

  return scrollRef;
}