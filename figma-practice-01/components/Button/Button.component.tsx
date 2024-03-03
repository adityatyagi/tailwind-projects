import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
/**
 * Button
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const button = cva(
  [
    "duration-400 h-[62px] rounded-sm font-semibold transition-all hover:opacity-80 text-center border-[1px]",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-[#0036C3]", "text-[#00F3B9]"],
        secondary: [
          "border-[#0036C3]",
          "text-[#0036C3]",
          "hover:bg-[#0036C3]",
          "hover:text-white",
        ],
      },
    },
  },
);

const Button: React.FC<ButtonProps> = ({ className, intent, ...props }) => (
  <button className={button({ intent, className })} {...props} />
);

export default Button;
