"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface FloatingPieceData {
  id: number;
  piece: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  opacity: number;
  depth: number; 
  drift: number;
  blur: number;
}

const CHESS_PIECES = ["♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"];

function generatePieces(count: number): FloatingPieceData[] {
  const pieces: FloatingPieceData[] = [];
  for (let i = 0; i < count; i++) {
    const depth = 0.5 + Math.random() * 2.5;
    pieces.push({
      id: i,
      piece: CHESS_PIECES[Math.floor(Math.random() * CHESS_PIECES.length)],
      x: Math.random() * 150 - 25, 
      y: Math.random() * 120 - 10,
      size: 40 + Math.random() * 100, // Even larger pieces
      duration: 30 + Math.random() * 40,
      delay: Math.random() * -30,
      rotate: Math.random() * 360,
      opacity: 0.03 + Math.random() * 0.05, // Increased opacity from 0.01-0.04
      depth: depth,
      drift: (Math.random() * 200 - 100) * depth,
      blur: depth > 2 ? Math.random() * 2 : 0, 
    });
  }
  return pieces;
}

export default function FloatingBackground() {
  const [pieces, setPieces] = useState<FloatingPieceData[]>([]);
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40, 
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setPieces(generatePieces(80)); 
  }, []);

  if (pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {pieces.map((p) => (
        <FloatingPiece key={p.id} data={p} scrollProgress={smoothProgress} />
      ))}
    </div>
  );
}

function FloatingPiece({ 
  data, 
  scrollProgress 
}: { 
  data: FloatingPieceData; 
  scrollProgress: any 
}) {
  const xMovement = useTransform(
    scrollProgress,
    [0, 1],
    [0, -600 * data.depth] 
  );

  const yMovement = useTransform(
    scrollProgress,
    [0, 1],
    [0, data.drift]
  );

  return (
    <motion.div
      className="absolute select-none text-violet/40 font-serif leading-none" // Changed from white to violet/40 for more color
      style={{
        left: `${data.x}%`,
        top: `${data.y}%`,
        fontSize: `${data.size}px`,
        opacity: data.opacity,
        x: xMovement,
        y: yMovement,
        rotate: data.rotate,
        filter: data.blur > 0 ? `blur(${data.blur}px)` : "none",
      }}
      animate={{
        // Slow ambient floating
        y: [0, -80, 40, -30, 0],
        x: [0, 40, -50, 20, 0],
        rotate: [data.rotate, data.rotate + 30, data.rotate - 25, data.rotate],
      }}
      transition={{
        duration: data.duration,
        delay: data.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {data.piece}
    </motion.div>
  );
}
