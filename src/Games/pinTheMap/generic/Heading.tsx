import style from '../style/heading.module.scss';
const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className={style.header}>
      <span className={style.noDots}>{text}</span>
      <span className={style.dots}>{text}</span>
    </h1>
  );
};

export default Heading;
