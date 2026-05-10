"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";

// Piece types
type Piece = string | null;
type Board = Piece[];

// Exact standard Cburnett (Wikipedia/Lichess) SVG Chess Pieces
const PieceIcon = ({ type, color }: { type: string; color: "w" | "b" }) => {
  const isWhite = color === "w";
  
  const renderSVG = (paths: React.ReactNode) => (
    <svg
      viewBox="0 0 45 45"
      className="w-[88%] h-[88%] select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-transform duration-200"
    >
      {paths}
    </svg>
  );

  switch (type) {
    case "P": // White Pawn
      return renderSVG(
        <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round">
          <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" />
        </g>
      );
    case "p": // Black Pawn
      return renderSVG(
        <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="1.5" strokeLinecap="round">
          <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#000000" />
        </g>
      );
    case "R": // White Rook
      return renderSVG(
        <g fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" strokeLinecap="butt" />
          <path d="M34 14l-3 3H14l-3-3" />
          <path d="M31 17v12.5H14V17" strokeLinecap="butt" strokeLinejoin="miter" />
          <path d="M31 29.5l1.5 2.5h-20l1.5-2.5" />
          <path d="M11 14h23" fill="none" strokeLinejoin="miter" />
        </g>
      );
    case "r": // Black Rook
      return renderSVG(
        <g fill="#000000" fillRule="evenodd" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z" strokeLinecap="butt" />
          <path d="M14 29.5v-13h17v13H14z" strokeLinecap="butt" strokeLinejoin="miter" />
          <path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" strokeLinecap="butt" />
          <path d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23" fill="none" stroke="#fff" strokeWidth="1" strokeLinejoin="miter" />
        </g>
      );
    case "N": // White Knight
      return renderSVG(
        <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" fill="#ffffff" stroke="#000000" />
          <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" fill="#ffffff" stroke="#000000" />
          <circle cx="9.5" cy="25.5" r="0.8" fill="#000000" stroke="#000000" />
          <circle cx="14.5" cy="15.5" r="0.8" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" fill="#000000" stroke="#000000" />
        </g>
      );
    case "n": // Black Knight
      return renderSVG(
        <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" fill="#000000" stroke="#ffffff" />
          <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" fill="#000000" stroke="#ffffff" />
          <circle cx="9.5" cy="25.5" r="0.8" fill="#ececec" stroke="#ececec" />
          <circle cx="14.5" cy="15.5" r="0.8" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" fill="#ececec" stroke="#ececec" />
          <path d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z " fill="#ececec" stroke="none" />
        </g>
      );
    case "B": // White Bishop
      return renderSVG(
        <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <g fill="#fff" strokeLinecap="butt">
            <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2zM15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2zM25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" />
          </g>
          <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" strokeLinejoin="miter" />
        </g>
      );
    case "b": // Black Bishop
      return renderSVG(
        <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2zm6-4c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2zM25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" fill="#000000" strokeLinecap="butt" />
          <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#fff" strokeLinejoin="miter" />
        </g>
      );
    case "Q": // White Queen
      return renderSVG(
        <g fill="#fff" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <g fill="#fff" stroke="none">
            <circle cx="8" cy="12" r="2" />
            <circle cx="24.5" cy="7.5" r="2" />
            <circle cx="41" cy="12" r="2" />
            <circle cx="16" cy="8.5" r="2" />
            <circle cx="33" cy="9" r="2" />
          </g>
          <path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12zM9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" strokeLinecap="butt" />
          <path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none" />
        </g>
      );
    case "q": // Black Queen
      return renderSVG(
        <g fill="#000000" fillRule="evenodd" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <g fill="#000000" stroke="#ffffff" strokeWidth="1">
            <circle cx="6" cy="12" r="2.75" />
            <circle cx="14" cy="9" r="2.75" />
            <circle cx="22.5" cy="8" r="2.75" />
            <circle cx="31" cy="9" r="2.75" />
            <circle cx="39" cy="12" r="2.75" />
          </g>
          <path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26zM9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" strokeLinecap="butt" />
          <path d="M11 38.5a35 35 1 0 0 23 0" fill="none" strokeLinecap="butt" />
          <path d="M11 29a35 35 1 0 1 23 0M12.5 31.5h20M11.5 34.5a35 35 1 0 0 22 0M10.5 37.5a35 35 1 0 0 24 0" fill="none" stroke="#fff" />
        </g>
      );
    case "K": // White King
      return renderSVG(
        <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.5 11.63V6M20 8h5" strokeLinejoin="miter" />
          <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#fff" strokeLinecap="butt" strokeLinejoin="miter" />
          <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#fff" />
          <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" />
        </g>
      );
    case "k": // Black King
      return renderSVG(
        <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.5 11.63V6" strokeLinejoin="miter" />
          <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#000000" strokeLinecap="butt" strokeLinejoin="miter" />
          <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#000000" />
          <path d="M20 8h5" strokeLinejoin="miter" />
          <path d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5l.01 2.1-.01-2.1C20 18 9.906 14 6.997 19.85c-2.497 5.65 4.853 9 4.853 9M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" stroke="#fff" />
        </g>
      );
    default:
      return null;
  }
};

// Initial starting grid board state
const INITIAL_BOARD: Board = [
  "r", "n", "b", "q", "k", "b", "n", "r",
  "p", "p", "p", "p", "p", "p", "p", "p",
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  "P", "P", "P", "P", "P", "P", "P", "P",
  "R", "N", "B", "Q", "K", "B", "N", "R",
];

// Coordinates mapper
function sq(file: string, rank: number): number {
  const col = file.charCodeAt(0) - 97;
  const row = 8 - rank;
  return row * 8 + col;
}

// Complete legendary Morphy Opera Game moves
const SCRIPTED_MOVES: [number, number][] = [
  [sq("e", 2), sq("e", 4)], [sq("e", 7), sq("e", 5)], // 1. e4 e5
  [sq("g", 1), sq("f", 3)], [sq("d", 7), sq("d", 6)], // 2. Nf3 d6
  [sq("d", 2), sq("d", 4)], [sq("c", 8), sq("g", 4)], // 3. d4 Bg4
  [sq("d", 4), sq("e", 5)], [sq("g", 4), sq("f", 3)], // 4. dxe5 Bxf3
  [sq("d", 1), sq("f", 3)], [sq("d", 6), sq("e", 5)], // 5. Qxf3 dxe5
  [sq("f", 1), sq("c", 4)], [sq("g", 8), sq("f", 6)], // 6. Bc4 Nf6
  [sq("f", 3), sq("b", 3)], [sq("d", 8), sq("e", 7)], // 7. Qb3 Qe7
  [sq("b", 1), sq("c", 3)], [sq("c", 7), sq("c", 6)], // 8. Nc3 c6
  [sq("c", 1), sq("g", 5)], [sq("b", 7), sq("b", 5)], // 9. Bg5 b5
  [sq("c", 3), sq("b", 5)], [sq("c", 6), sq("b", 5)], // 10. Nxb5 cxb5
  [sq("c", 4), sq("b", 5)], [sq("b", 8), sq("d", 7)], // 11. Bxb5+ Nbd7
  [sq("e", 1), sq("c", 1)], [sq("a", 8), sq("d", 8)], // 12. O-O-O Rd8
  [sq("d", 1), sq("d", 7)], [sq("d", 8), sq("d", 7)], // 13. Rxd7 Rxd7
  [sq("h", 1), sq("d", 1)], [sq("e", 7), sq("e", 6)], // 14. Rd1 Qe6
  [sq("b", 5), sq("d", 7)], [sq("f", 6), sq("d", 7)], // 15. Bxd7+ Nxd7
  [sq("b", 3), sq("b", 8)], [sq("d", 7), sq("b", 8)], // 16. Qb8+!! Nxb8
  [sq("d", 1), sq("d", 8)],                           // 17. Rd8# (Checkmate!)
];

// Minimal programmatic Web Audio move generator (subtle dull wood tap)
const playMoveSound = (isCapture: boolean) => {
  if (typeof window === "undefined") return;
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (isCapture) {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    } else {
      osc.type = "sine";
      osc.frequency.setValueAtTime(260, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    }
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch (e) {}
};

export default function EngineBoard() {
  const [board, setBoard] = useState<Board>([...INITIAL_BOARD]);
  const [moveIndex, setMoveIndex] = useState(0);
  
  // Highlight states
  const [fromSquare, setFromSquare] = useState<number | null>(null);
  const [toSquare, setToSquare] = useState<number | null>(null);
  const [lastMove, setLastMove] = useState<[number, number] | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const anim1Ref = useRef<NodeJS.Timeout | null>(null);
  const anim2Ref = useRef<NodeJS.Timeout | null>(null);

  const makeMove = useCallback(() => {
    if (moveIndex >= SCRIPTED_MOVES.length) {
      // Loop: reset and restart game after 4 seconds
      timerRef.current = setTimeout(() => {
        setBoard([...INITIAL_BOARD]);
        setMoveIndex(0);
        setFromSquare(null);
        setToSquare(null);
        setLastMove(null);
      }, 4000);
      return;
    }

    const [from, to] = SCRIPTED_MOVES[moveIndex];

    // Phase 1: Highlight starting square
    setFromSquare(from);

    anim1Ref.current = setTimeout(() => {
      // Phase 2: Highlight ending square
      setToSquare(to);

      anim2Ref.current = setTimeout(() => {
        // Phase 3: Physically execute move
        setBoard((prev) => {
          const nextBoard = [...prev];
          const piece = nextBoard[from];

          if (piece) {
            const isCapture = nextBoard[to] !== null;
            playMoveSound(isCapture);

            // Handle castling rook repositioning
            if (piece.toLowerCase() === "k" && Math.abs((from % 8) - (to % 8)) === 2) {
              nextBoard[to] = nextBoard[from];
              nextBoard[from] = null;
              const isKingside = to % 8 === 6;
              const rF = Math.floor(from / 8) * 8 + (isKingside ? 7 : 0);
              const rT = Math.floor(from / 8) * 8 + (isKingside ? 5 : 3);
              nextBoard[rT] = nextBoard[rF];
              nextBoard[rF] = null;
            } else {
              nextBoard[to] = nextBoard[from];
              nextBoard[from] = null;
            }
          }
          return nextBoard;
        });

        // Set last move indices and clear temp states
        setLastMove([from, to]);
        setFromSquare(null);
        setToSquare(null);
        setMoveIndex((prev) => prev + 1);
      }, 500);
    }, 900);
  }, [moveIndex]);

  useEffect(() => {
    // Standard move interval of 2 seconds
    timerRef.current = setTimeout(makeMove, 2000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (anim1Ref.current) clearTimeout(anim1Ref.current);
      if (anim2Ref.current) clearTimeout(anim2Ref.current);
    };
  }, [makeMove]);

  return (
    <div className="relative">
      {/* Dynamic Glowing Aura underneath the Chessboard */}
      <div className="absolute -inset-6 bg-gradient-to-r from-primary/25 to-secondary/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

      {/* Beautiful, responsive chessboard container */}
      <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[410px] lg:h-[410px] rounded-2xl overflow-hidden border border-foreground/10 shadow-2xl bg-slate-950 p-1.5 sm:p-2">
        <div className="grid grid-cols-8 grid-rows-8 w-full h-full rounded-lg overflow-hidden relative">
          {board.map((piece, i) => {
            const row = Math.floor(i / 8);
            const col = i % 8;
            const isLight = (row + col) % 2 === 0;

            // Square coloring: Light square (White) and Dark square (Brand Primary Electric Blue)
            const squareBg = isLight ? "#ffffff" : "var(--primary)";

            // Highlight overlays
            let highlightBg = "";
            if (fromSquare === i) {
              highlightBg = "rgba(245, 158, 11, 0.4)"; // Golden pulse for active starting square
            } else if (toSquare === i) {
              highlightBg = "rgba(16, 185, 129, 0.4)"; // Soft green hover on destination square
            } else if (lastMove && (lastMove[0] === i || lastMove[1] === i)) {
              highlightBg = isLight ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0.3)"; // Elegant violet path highlight
            }

            return (
              <div
                key={i}
                className="relative flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: squareBg }}
              >
                {/* Glowing highlighted state overlay */}
                {highlightBg && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0"
                    style={{ backgroundColor: highlightBg }}
                  />
                )}

                {/* Vector Chess piece rendering */}
                {piece && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <PieceIcon type={piece} color={piece === piece.toUpperCase() ? "w" : "b"} />
                  </div>
                )}

                {/* Algebraic algebraic files notation labels (a-h) */}
                {row === 7 && (
                  <span
                    className="absolute bottom-0.5 right-1 text-[7px] sm:text-[9px] font-bold font-mono select-none"
                    style={{ color: isLight ? "var(--primary)" : "#ffffff" }}
                  >
                    {String.fromCharCode(97 + col)}
                  </span>
                )}

                {/* Algebraic ranks notation labels (1-8) */}
                {col === 0 && (
                  <span
                    className="absolute top-0.5 left-1 text-[7px] sm:text-[9px] font-bold font-mono select-none"
                    style={{ color: isLight ? "var(--primary)" : "#ffffff" }}
                  >
                    {8 - row}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
