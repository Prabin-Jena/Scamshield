import { motion } from "motion/react";

interface RiskMeterProps {
  score: number; // 0-100
  size?: "sm" | "md" | "lg";
}

export function RiskMeter({ score, size = "md" }: RiskMeterProps) {
  const getColor = () => {
    if (score < 30) return "#00FF9D"; // Safe - green
    if (score < 70) return "#F59E0B"; // Suspicious - orange
    return "#EF4444"; // Scam - red
  };

  const getLabel = () => {
    if (score < 30) return "Safe";
    if (score < 70) return "Suspicious";
    return "Scam";
  };

  const sizes = {
    sm: { radius: 60, strokeWidth: 8 },
    md: { radius: 80, strokeWidth: 10 },
    lg: { radius: 100, strokeWidth: 12 },
  };

  const { radius, strokeWidth } = sizes[size];
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = getColor();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <svg width={radius * 2 + strokeWidth * 2} height={radius * 2 + strokeWidth * 2}>
          {/* Background circle */}
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            fill="none"
            stroke="#1A2525"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <motion.circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${radius + strokeWidth} ${radius + strokeWidth})`}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              filter: `drop-shadow(0 0 8px ${color}40)`,
            }}
          />
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="text-4xl" style={{ color }}>
              {score}
            </div>
            <div className="text-sm text-gray-400">/ 100</div>
          </motion.div>
        </div>
      </div>

      <div className="text-center">
        <div
          className="px-4 py-2 rounded-full border"
          style={{
            color,
            borderColor: `${color}40`,
            backgroundColor: `${color}10`,
          }}
        >
          {getLabel()}
        </div>
      </div>
    </div>
  );
}
