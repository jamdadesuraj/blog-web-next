import Image from "next/image";
import styles from "./cardList.module.css";
import Link from "next/link";
import PaginationComp from "../paginationCom/PaginationComp";

interface Card {
  _id: string;
  title: string;
  slug: string;
  desc: string;
  img?: string;
  createdAt: Date;
  cat: string;
  catSlug: string;
}

interface CardProps {
  item: Card;
  key: string;
}

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}?cat=${cat} || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
};

const CardList = async ({ page, cat }: { page: number; cat: string }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      {posts.map((item: Card) => (
        <Card key={item._id} item={item} />
      ))}

      <PaginationComp page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;

const Card = ({ key, item }: CardProps) => {
  return (
    <div className={styles.content} key={key}>
      <div className={styles.imgContainer}>
        {item.img && (
          <Image
            src={item.img || "/food.png"}
            alt="banner-img"
            layout="fill"
            className={styles.img}
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <p className={styles.date}>
          {item.createdAt.toString().slice(0, 10)} -{" "}
          <span className={styles.category}>{item.catSlug}</span>
        </p>
        <h2 className={styles.titleContent}>{item.title.slice(0, 50)}...</h2>

        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item.desc.slice(0, 300) }}
        />
        <Link href={`/posts/${item.slug}`} className={styles.btn}>
          Read More
        </Link>
      </div>
    </div>
  );
};
