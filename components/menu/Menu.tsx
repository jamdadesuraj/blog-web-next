import Category from "../category/Category";
import styles from "./menu.module.css";
import Popular from "../popular/Popular";

const Menu = () => {
  return (
    <>
      <div className={styles.container}>
        <Popular withImg={false} />
        <Category />
        <Popular withImg={true} />
      </div>
    </>
  );
};

export default Menu;
