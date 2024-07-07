import Image from "next/image";
import styles from "./featured.module.css";
import CustomBtn from "../customBtn/CustomBtn";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
        nostrum.
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            src="/coding.png"
            alt="banner-img"
            fill
            className={styles.img}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.contentTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            necessitatibus.
          </h2>
          <p className={styles.contentDesc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            quo cumque, ex aspernatur error unde deserunt ipsam, quisquam eius
            aut eligendi? Rem animi, maxime laboriosam sit at deleniti quis
            fugit voluptatem enim nostrum laborum reiciendis minima architecto
            in quidem debitis molestias? Quibusdam rem ad ab id optio quidem
            dolorum perspiciatis?
          </p>

          <Link href="/">
            <CustomBtn className="">Read More</CustomBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
