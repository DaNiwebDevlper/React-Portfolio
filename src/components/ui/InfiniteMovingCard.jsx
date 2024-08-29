import React, { useEffect, useState, useRef } from 'react';
import { cn } from '../../utils/cn';  // Adjust the import path according to your project structure

export const InfiniteMovingCards = ({
    items,
    direction = 'left',
    speed = 'normal',
    pauseOnHover = true,
    className
}) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    const addAnimation = () => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current.appendChild(duplicatedItem);
            });

            setDirection();
            setSpeed();
            setStart(true);
        }
    };

    const setDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                '--animation-direction',
                direction === 'left' ? 'forwards' : 'reverse'
            );
        }
    };

    const setSpeed = () => {
        if (containerRef.current) {
            const duration = speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s';
            containerRef.current.style.setProperty('--animation-duration', duration);
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to right, transparent, white 20%, white 80%, transparent)]',
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
                    start && 'animate-scroll',
                    pauseOnHover && 'hover:[animation-play-state:paused]'
                )}
            >
                {items.map((item, idx) => (
                    <li key={idx}>
                        <img src={item.imgSrc} className="sm:w-[200px] w-[60px] h-[60px] sm:h-[200px] object-cover" alt="" />
                    </li>
                ))}
            </ul>
        </div>
    );
};
