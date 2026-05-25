import { motion, type MotionValue } from "framer-motion";

import lockPhone from "../../assets/lock-phone.png";
import notification from "../../assets/notification.png";

type LockNotificationPhoneProps = {
  phoneX: MotionValue<number>;
  phoneY: MotionValue<number>;
  phoneScale: MotionValue<number>;
  phoneOpacity: MotionValue<number>;
  notificationOpacity: MotionValue<number>;
  notificationY: MotionValue<number>;
  notificationScale: MotionValue<number>;
};

export function LockNotificationPhone({
  phoneX,
  phoneY,
  phoneScale,
  phoneOpacity,
  notificationOpacity,
  notificationY,
  notificationScale,
}: LockNotificationPhoneProps) {
  return (
    <motion.div
      style={{
        x: phoneX,
        y: phoneY,
        scale: phoneScale,
        opacity: phoneOpacity,
      }}
      className="relative z-30"
    >
      <div
        style={{
          position: "relative",
          width: "min(465px, 42vw)",
          lineHeight: 0,
        }}
      >
        <img
          src={lockPhone}
          alt="Tela bloqueada com notificação do Lumina"
          draggable={false}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            userSelect: "none",
          }}
        />

        <div
          className="absolute left-1/2 z-40 w-[82%]"
          style={{
            bottom: "8.5%",
            transform: "translateX(-50%)",
          }}
        >
          <motion.img
            src={notification}
            alt="Notificação do Lumina"
            draggable={false}
            style={{
              opacity: notificationOpacity,
              y: notificationY,
              scale: notificationScale,
              display: "block",
              width: "100%",
              height: "auto",
              userSelect: "none",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}