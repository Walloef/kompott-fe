import style from "../style/heading.module.scss";

const Heading = ({
  text,
  thinSpacing,
  mobile = false,
}: {
  text: string;
  thinSpacing?: boolean;
  mobile?: boolean;
}) => {
  return (
    <h1 className={thinSpacing ? style.headerThinSpacing : style.header}>
      <span className={style.noDots}>{text}</span>
      <span className={style.dots}>{text}</span>
    </h1>
  );
};

export default Heading;
