import Link from "next/link";
import styles from "./category.module.css";

interface Category {
  _id: string;
  slug: string;
  title: string;
  img?: string;
}

interface CategoryProps {
  category: Category;
}

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Category = async () => {
  const categories = await getData();
  return (
    <div className={styles.container}>
      <p className={styles.subTitle}>Discover By Topic</p>
      <h2 className={styles.title}>Category</h2>
      <div className={styles.categories}>
        {categories.map((cate: Category) => (
          <Link
            key={cate._id}
            href={`/blog?cat=${cate.slug}`}
            className={`${styles.category} ${styles[cate.slug]}`}
          >
            <p className={styles.link}>{cate.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
