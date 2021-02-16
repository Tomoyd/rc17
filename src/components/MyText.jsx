import styles from "./MyText.less";
const MyText = ({ className, children }) => {
  return <div className={`${className} ${styles.text} `}>{children}</div>;
};

export default MyText;
