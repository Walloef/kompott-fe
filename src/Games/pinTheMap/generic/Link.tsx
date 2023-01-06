import style from '../style/link.module.scss';

const Link = ({ text, href }: { text: string; href: string }) => {
  return (
    <a href={href} className={style.linkMargin}>
      {text}
    </a>
  );
};

export default Link;
