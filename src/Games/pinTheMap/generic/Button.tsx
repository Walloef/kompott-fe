import type { ButtonHTMLAttributes } from "react";
import style from "../style/link.module.scss";

type Props = {
  text: string;
  fn?: () => void;
} & ButtonHTMLAttributes<HTMLElement>;
const Button = ({ text, fn, ...rest }: Props) => {
  console.log(fn);
  return (
    <button {...rest} className={style.linkMargin}>
      {text}
    </button>
  );
};

export default Button;
