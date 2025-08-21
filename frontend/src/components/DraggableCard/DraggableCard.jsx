import { cn } from "../../utils/cn";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "motion/react";

export const DraggableCardBody = ({ className, children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);
  const controls = useAnimationControls();
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);
  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig
  );
  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig
  );

  useEffect(() => {
    const updateConstraints = () => {
      setConstraints({
        top: -window.innerHeight / 2,
        left: -window.innerWidth / 2,
        right: window.innerWidth / 2,
        bottom: window.innerHeight / 2,
      });
    };
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect() || {};
    const centerX = (rect.left || 0) + (rect.width || 0) / 2;
    const centerY = (rect.top || 0) + (rect.height || 0) / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      onDragStart={() => (document.body.style.cursor = "grabbing")}
      onDragEnd={(e, info) => {
        document.body.style.cursor = "default";
        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: { type: "spring", ...springConfig },
        });

        const vx = velocityX.get();
        const vy = velocityY.get();
        const bounce = Math.min(0.8, Math.sqrt(vx ** 2 + vy ** 2) / 1000);

        animate(info.point.x, info.point.x + vx * 0.3, {
          ...springConfig,
          duration: 0.8,
          bounce,
          ease: [0.2, 0, 0, 1],
        });
        animate(info.point.y, info.point.y + vy * 0.3, {
          ...springConfig,
          duration: 0.8,
          bounce,
          ease: [0.2, 0, 0, 1],
        });
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative w-80 h-80 overflow-hidden rounded-md bg-transparent p-0 shadow-none transform-3d",
        className
      )}
      style={{ rotateX, rotateY, opacity, willChange: "transform" }}
    >
      {children}
      <motion.div
        style={{ opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 bg-white select-none"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({ className, children }) => {
  return (
    <div className={cn("[perspective:3000px]", className)}>{children}</div>
  );
};
