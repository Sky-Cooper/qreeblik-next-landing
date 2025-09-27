"use client";// MedicalPreloaderEnhanced.tsx
import Image from 'next/image';

import React, { useEffect, useMemo, useState } from "react";
import {
  Heart,
  Stethoscope,
  Pill,
  Cross,
  Activity,
  Shield,
  Thermometer,
  Syringe,
} from "lucide-react";

interface MedicalPreloaderEnhancedProps {
  // optional callback when preloader finishes
  onFinish?: () => void;
  className?: string;
  durationMs?: number; // visible duration before fade (default 4000)
}

const ICONS = [
  Heart,
  Stethoscope,
  Pill,
  Cross,
  Activity,
  Shield,
  Thermometer,
  Syringe,
];

const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const MedicalPreloaderEnhanced: React.FC<MedicalPreloaderEnhancedProps> = ({
  onFinish,
  className = "",
  durationMs = 4000,
}) => {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  // prepare randomized icon drops only once per mount
  const drops = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      Icon: ICONS[i % ICONS.length],
      left: `${random(2, 96)}%`,
      size: Math.round(random(14, 28)),
      duration: +random(2.8, 6).toFixed(2) + "s",
      delay: +random(0, 2.8).toFixed(2) + "s",
      rotate: Math.round(random(-360, 360)) + "deg",
      opacity: random(0.6, 1).toFixed(2),
    }));
  }, []);

  useEffect(() => {
    // show for durationMs, then fade out and unmount after fade
    const t1 = setTimeout(() => {
      setFadingOut(true);
      // after fade duration remove from DOM and call onFinish
      const fadeDuration = 600; // ms (match CSS .fade-out)
      const t2 = setTimeout(() => {
        setVisible(false);
        onFinish?.();
      }, fadeDuration);
      return () => clearTimeout(t2);
    }, durationMs);

    return () => clearTimeout(t1);
  }, [durationMs, onFinish]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden ${className} ${
        fadingOut ? "preloader-fade-out" : "preloader-fade-in"
      }`}
      aria-hidden="true"
    >
      <style>{`
        /* Container backgrounds */
        .preloader-fade-in { opacity: 1; transition: opacity 600ms ease; }
        .preloader-fade-out { opacity: 0; transition: opacity 600ms ease; pointer-events: none; }

        .preloader-backdrop {
          position: absolute;
          inset: 0;
          background: radial-gradient(1000px 600px at 20% 20%, rgba(59,130,246,0.08), transparent 10%),
                      radial-gradient(800px 500px at 80% 80%, rgba(59,130,246,0.05), transparent 10%),
                      linear-gradient(180deg, rgba(245,249,255,1), rgba(238,246,255,1));
          backdrop-filter: blur(2px);
        }

        .preloader-center {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          z-index: 20;
        }

        /* Central glowing circle + heartbeat pulse */
        .logo-plate {
          width: 136px;
          height: 136px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(245,250,255,0.9));
          box-shadow: 0 12px 40px rgba(59,130,246,0.12), inset 0 1px 0 rgba(255,255,255,0.6);
          display:flex;
          align-items:center;
          justify-content:center;
          transform-origin: center;
          animation: logoFloat 3.2s ease-in-out infinite;
        }

        .logo-plate.glow {
          box-shadow: 0 20px 48px rgba(59,130,246,0.16), 0 4px 18px rgba(96,165,250,0.08);
        }

        @keyframes logoFloat {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.03); }
          100% { transform: translateY(0) scale(1); }
        }

        .logo-img { width: 72px; height: 72px; object-fit:contain; }

        /* Falling icons */
        @keyframes fall {
          0% { transform: translateY(-40px) rotate(0deg); opacity: 0; }
          6% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .drop {
          position: absolute;
          top: -60px;
          will-change: transform, opacity;
        }

        /* small rotation wobble for icons once in center area */
        @keyframes wobble {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
          100% { transform: rotate(0deg); }
        }

        /* ECG / rhythm line SVG */
        .ecg-wrap {
          width: 360px;
          height: 64px;
          display:inline-block;
          position: relative;
          margin-top: -6px;
        }

        .ecg-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        /* stroke-dashoffset animation: draws the line repeatedly */
        .ecg-path {
          fill: none;
          stroke: #3b82f6; /* ✅ CHANGED: Set to blue-500 */
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw 1.6s linear infinite;
        }

        @keyframes draw {
          0% { stroke-dashoffset: 200; opacity: 0.0; }
          10% { opacity: 1; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -200; opacity: 0; }
        }

        /* pulsing heart icon (a bright center indicator) */
        .pulse-heart {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          width: 38px;
          height: 38px;
          border-radius: 999px;
          /* ✅ CHANGED: Set to blue glow */
          background: radial-gradient(circle at 30% 30%, rgba(96,165,250,0.14), transparent 30%);
          box-shadow: 0 6px 18px rgba(59,130,246,0.12);
          transform-origin:center;
          animation: heartbeat 1.1s ease-in-out infinite;
        }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          30% { transform: scale(1.18); }
          60% { transform: scale(0.98); }
          100% { transform: scale(1); }
        }

        /* small loading dots and progress */
        .loading-dots { display:flex; gap:8px; margin-top:6px; }
        .dot {
          width:10px; height:10px; border-radius:999px; background: linear-gradient(90deg,#60a5fa,#3b82f6);
          transform-origin:center;
          animation: dotPulse 1s infinite;
          opacity: 0.95;
        }
        .dot:nth-child(2) { animation-delay: 0.14s; }
        .dot:nth-child(3) { animation-delay: 0.28s; }
        @keyframes dotPulse {
          0% { transform: translateY(0) scale(0.9); opacity:0.6 }
          50% { transform: translateY(-8px) scale(1.1); opacity:1 }
          100% { transform: translateY(0) scale(0.9); opacity:0.6 }
        }

      `}</style>

      <div className="preloader-backdrop" />

      {/* Falling icon drops */}
      {drops.map((d) => {
        const { id, Icon, left, size, duration, delay, rotate, opacity } = d;
        return (
          <div
            key={id}
            className="drop"
            style={{
              left,
              animationName: "fall",
              animationDuration: duration,
              animationDelay: delay,
              animationTimingFunction: "linear",
            }}
          >
            <div
              style={{
                transform: `rotate(${rotate})`,
                opacity,
                width: size + 8,
                height: size + 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: "rgba(255,255,255,0.85)",
                boxShadow: "0 6px 18px rgba(2,6,23,0.06)",
                border: "1px solid rgba(15,23,42,0.04)",
              }}
            >
              <Icon size={size} style={{ color: "#3b82f6" }} /> {/* ✅ CHANGED: Icon color to blue */}
            </div>
          </div>
        );
      })}

      {/* Center content */}
      <div className="preloader-center">
        <div className="logo-plate glow" role="img" aria-label="App logo">
          <Image
  src="/assets/logo.png"
  alt="Qreeb Lik Logo"
  width={32}  // The base width in pixels (e.g., w-8 -> 32px)
  height={32} // The base height in pixels (e.g., h-8 -> 32px)
  className="w-8 h-8" // You can keep your Tailwind classes
/>
        </div>

        {/* ECG / Rhythm line with a pulse heart in the center */}
        <div className="ecg-wrap" aria-hidden={false}>
          <svg className="ecg-svg" viewBox="0 0 720 130" preserveAspectRatio="xMidYMid meet">
            {/* background faint path */}
            <path
              d="M10 70 H120 M120 70 L170 70 L190 50 L210 110 L230 70 L320 70 H420 L460 70 L490 45 L510 95 L530 70 H700"
              stroke="rgba(59,130,246,0.08)" // ✅ CHANGED: Faint path to blue
              strokeWidth={6}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* animated ECG path */}
            <path
              className="ecg-path"
              d="M10 70 H120 L170 70 L190 50 L210 110 L230 70 L320 70 H420 L460 70 L490 45 L510 95 L530 70 H700"
            />
          </svg>

          <div style={{ position: "absolute", left: "50%", top: "6px", transform: "translateX(-50%)" }}>
            <div className="pulse-heart" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 8.6c0 4.2-7.8 10.1-8 10.2-.2-.1-8-6-8-10.2A4.1 4.1 0 0 1 8.8 4c1.4 0 2.6.8 3.2 2 .6-1.2 1.8-2 3.2-2A4.1 4.1 0 0 1 20.8 8.6z"/></svg>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 6 }}>
          <div style={{ color: "#3b82f6", fontWeight: 700, fontSize: 16 }}>
            Qreeb lik ...
          </div>

          <div className="loading-dots" role="status" aria-live="polite" style={{ justifyContent: "center" }}>
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalPreloaderEnhanced;