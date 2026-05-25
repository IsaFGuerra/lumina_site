import { motion, type MotionValue } from "framer-motion";

type StorySideTextsProps = {
  opacity: MotionValue<number>;
  leftX: MotionValue<number>;
  rightX: MotionValue<number>;
};

export function StorySideTexts({
  opacity,
  leftX,
  rightX,
}: StorySideTextsProps) {
  return (
    <>
      <motion.div
        style={{
          opacity,
          x: leftX,
        }}
        className="absolute left-[8vw] top-1/2 z-50 max-w-[280px] -translate-y-1/2 text-left text-[#111111]"
      >
        <p className="mb-3 text-[clamp(14px,1.2vw,18px)] leading-tight">
          Receba notificações de <br />
          saídas não esperadas em
        </p>

        <h3 className="text-[clamp(34px,4vw,56px)] font-bold leading-none tracking-[-0.05em]">
          Tempo Real
        </h3>
      </motion.div>

      <motion.div
        style={{
          opacity,
          x: rightX,
        }}
        className="absolute right-[8vw] top-[58%] z-50 max-w-[280px] text-left text-[#111111]"
      >
        <p className="text-[clamp(14px,1.2vw,18px)] leading-tight">
          Lumina será seu cuidado <br />
          onde você não pode estar
        </p>
      </motion.div>
    </>
  );
}