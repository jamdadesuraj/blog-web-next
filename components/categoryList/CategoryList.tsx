import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";

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

const CategoryList = async () => {
  const categories = await getData();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        {categories.map((category: Category) => (
          <CategoryItems category={category} key={category._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

const CategoryItems = ({ category }: CategoryProps) => {
  return (
    <>
      <Link
        key={category._id}
        href="/blog?cat=style"
        className={`${styles.category} ${styles[category.slug]}`}
      >
        {category.img && (
          <Image
            src={category.img}
            alt="category"
            width={32}
            height={32}
            className={styles.img}
          />
        )}
        <p>{category.title}</p>
      </Link>
    </>
  );
};
