import { useState, useEffect } from 'react';

export function useAutoCycle(length: number, interval = 3000) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % length);
        }, interval);

        return () => clearInterval(timer);
    }, [length, interval, isPaused]);

    return { activeIndex, isPaused, setIsPaused, setActiveIndex };
}
