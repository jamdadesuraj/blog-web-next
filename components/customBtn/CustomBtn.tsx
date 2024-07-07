import style from "./customBtn.module.css";
import { customBtnProps } from "@/types";

const CustomBtn = ({
  className,
  type,
  children,
  onClick,
  disabled,
}: customBtnProps) => {
  return (
    <button
      className={`${className} ${style.btn}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
