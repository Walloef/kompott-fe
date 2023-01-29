import style from "../style/link.module.scss";

const Button = ({ text, fn }: { text: string; fn: () => void }) => {
  return (
    <button className={style.linkMargin} onClick={() => fn()}>
      {text}
    </button>
  );
};

export default Button;
