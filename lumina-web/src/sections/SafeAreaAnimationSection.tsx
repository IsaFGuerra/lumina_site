import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import phoneMap from "../assets/phone-map.png";

export function SafeAreaRevealSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const borderProgress = useTransform(scrollYProgress, [0.08, 0.55], [0, 1]);
  const drawingOpacity = useTransform(scrollYProgress, [0.55, 0.65], [1, 0]);
  const dashedOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const fillOpacity = useTransform(scrollYProgress, [0.65, 0.9], [0, 0.42]);

  /**
   * Coordenadas relativas à imagem inteira:
   * viewBox="0 0 465 924"
   *
   * Se precisar ajustar:
   * - aumenta Y para descer
   * - diminui Y para subir
   * - aumenta X para ir pra direita
   * - diminui X para ir pra esquerda
   */
  const safeAreaPath = "M 166 294 L 263 279 L 280 368 L 176 401 Z";

  return (
    <section ref={sectionRef} className="relative h-[260vh] bg-[#111111]">
      <div className="sticky top-0 flex h-screen items-center justify-center px-6">
        <div
          style={{
            position: "relative",
            width: "min(465px, 90vw)",
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
      </div>
    </section>
  );
}