import Link from "next/link";
import styles from "./category.module.css";

const Category = () => {
  return (
    <div className={styles.container}>
      <p className={styles.subTitle}>Discover By Topic</p>
      <h2 className={styles.title}>Category</h2>
      <div className={styles.categories}>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.style}`}
        >
          <p className={styles.link}>Style</p>
        </Link>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.fashion}`}
        >
          <p className={styles.link}>Fashion</p>
        </Link>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.food}`}
        >
          <p className={styles.link}>Food</p>
        </Link>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.travel}`}
        >
          <p className={styles.link}>Travel</p>
        </Link>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.culture}`}
        >
          <p className={styles.link}>Culture</p>
        </Link>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.coding}`}
        >
          <p className={styles.link}>Coding</p>
        </Link>
      </div>
    </div>
  );
};

export default Category;
