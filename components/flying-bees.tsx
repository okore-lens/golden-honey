'use client';

import styles from '@/styles/flying-bees.module.css';

interface Bee {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export default function FlyingBees() {
  // Generate random bees with different paths
  const bees: Bee[] = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
  }));

  return (
    <div className={styles.beesContainer} aria-hidden="true">
      {bees.map((bee) => (
        <div
          key={bee.id}
          className={styles.bee}
          style={{
            left: `${bee.left}%`,
            animation: `float ${bee.duration}s linear ${bee.delay}s infinite`,
          }}
        >
          <span className={styles.beeEmoji}>🐝</span>
        </div>
      ))}
    </div>
  );
}
