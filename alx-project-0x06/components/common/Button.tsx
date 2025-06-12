import { ButtonProps } from "@/interface";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonSize,
  backgroundColor,
  action,
}) => {
  const backgroundColorClass = backgroundColor
    ? {
        red: "bg-red-500",
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        green: "bg-green-500",
      }[backgroundColor]
    : "bg-slate-500";
  return (
    <button
      onClick={action}
      className={`${backgroundColorClass} hover:${backgroundColor}/50 ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg transition duration-300 text-white`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
