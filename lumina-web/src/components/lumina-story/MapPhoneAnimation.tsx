import { motion, type MotionValue } from "framer-motion";
import phoneMap from "../../assets/phone-map.png";

type MapPhoneAnimationProps = {
  x: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  borderProgress: MotionValue<number>;
  drawingOpacity: MotionValue<number>;
  dashedOpacity: MotionValue<number>;
  fillOpacity: MotionValue<number>;
};

export function MapPhoneAnimation({
  x,
  scale,
  opacity,
  borderProgress,
  drawingOpacity,
  dashedOpacity,
  fillOpacity,
}: MapPhoneAnimationProps) {
  const safeAreaPath = "M 166 294 L 263 279 L 280 368 L 176 401 Z";

  return (
    <motion.div
      style={{
        x,
        scale,
        opacity,
      }}
      className="relative z-20"
    >
      <div
        style={{
          position: "relative",
          width: "min(465px, 42vw)",
          lineHeight: 0,
        }}
      >
        <img
          src={phoneMap}
          alt="Tela do Lumina com mapa"
          draggable={false}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            userSelect: "none",
          }}
        />

        <svg
          viewBox="0 0 465 924"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          <motion.path
            d={safeAreaPath}
            fill="#76A8E2"
            style={{ opacity: fillOpacity }}
          />

          <motion.path
            d={safeAreaPath}
            fill="transparent"
            stroke="#0B57A3"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength: borderProgress,
              opacity: drawingOpacity,
            }}
          />

          <motion.path
            d={safeAreaPath}
            fill="transparent"
            stroke="#0B57A3"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="13 9"
            style={{ opacity: dashedOpacity }}
          />
        </svg>
      </div>
    </motion.div>
  );
}