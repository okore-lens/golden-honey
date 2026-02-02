'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/cursor-bees.module.css';

interface BeePosition {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

export default function CursorBees() {
  const [bees, setBees] = useState<BeePosition[]>([
    { id: 1, x: 0, y: 0, targetX: 0, targetY: 0 },
    { id: 2, x: 0, y: 0, targetX: 0, targetY: 0 },
  ]);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setBees((prevBees) =>
        prevBees.map((bee, index) => ({
          ...bee,
          targetX: e.clientX + (index * 30 - 15),
          targetY: e.clientY + (index * 30 - 15),
        }))
      );
    };

    const updateBeePositions = () => {
      setBees((prevBees) =>
        prevBees.map((bee) => ({
          ...bee,
          x: bee.x + (bee.targetX - bee.x) * 0.1,
          y: bee.y + (bee.targetY - bee.y) * 0.1,
        }))
      );
      animationFrameId = requestAnimationFrame(updateBeePositions);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateBeePositions);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.cursorBeesContainer} aria-hidden="true">
      {bees.map((bee) => (
        <div
          key={bee.id}
          className={styles.cursorBee}
          style={{
            left: `${bee.x}px`,
            top: `${bee.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          🐝
        </div>
      ))}
    </div>
  );
}
