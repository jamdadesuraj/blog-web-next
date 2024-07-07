import Image from "next/image";
import styles from "./popular.module.css";
import { popularProps } from "@/types";

const Popular = ({ withImg }: popularProps) => {
  return (
    <div className={styles.container}>
      {withImg ? (
        <>
          <p className={styles.subTitle}>Choose By The Editor</p>
          <h2 className={styles.title}>Editors Pick</h2>
          <div className={styles.content}>
            <div className={styles.imgContent}>
              <Image
                src="/coding.png"
                width={50}
                height={50}
                alt="side-img"
                className={styles.img}
              />
              <div className={styles.info}>
                <p className={`${styles.cat} ${styles.food}`}>Food</p>
                <p className={styles.mainTitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, delectus!
                </p>
                <div className={styles.user}>
                  <p className={styles.name}>Suraj jamdade </p>
                  <p className={styles.date}>07/07/2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.imgContent}>
              <Image
                src="/coding.png"
                width={50}
                height={50}
                alt="side-img"
                className={styles.img}
              />
              <div className={styles.info}>
                <p className={`${styles.cat} ${styles.coding}`}>Coding</p>
                <p className={styles.mainTitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, delectus!
                </p>
                <div className={styles.user}>
                  <p className={styles.name}>Suraj jamdade </p>
                  <p className={styles.date}>07/07/2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.imgContent}>
              <Image
                src="/coding.png"
                width={50}
                height={50}
                alt="side-img"
                className={styles.img}
              />
              <div className={styles.info}>
                <p className={`${styles.cat} ${styles.travel}`}>Travel</p>
                <p className={styles.mainTitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, delectus!
                </p>
                <div className={styles.user}>
                  <p className={styles.name}>Suraj jamdade </p>
                  <p className={styles.date}>07/07/2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.imgContent}>
              <Image
                src="/coding.png"
                width={50}
                height={50}
                alt="side-img"
                className={styles.img}
              />
              <div className={styles.info}>
                <p className={`${styles.cat} ${styles.culture}`}>Culture</p>
                <p className={styles.mainTitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, delectus!
                </p>
                <div className={styles.user}>
                  <p className={styles.name}>Suraj jamdade </p>
                  <p className={styles.date}>07/07/2024</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className={styles.subTitle}>{"what's new"}</p>
          <h2 className={styles.title}>Most Popular</h2>
          <div className={styles.content}>
            <p className={`${styles.cat} ${styles.travel}`}>Travel</p>
            <p className={styles.mainTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, delectus!
            </p>
            <div className={styles.user}>
              <p className={styles.name}>Suraj jamdade </p>
              <p className={styles.date}>07/07/2024</p>
            </div>
          </div>
          <div className={styles.content}>
            <p className={`${styles.cat} ${styles.coding}`}>Coding</p>
            <p className={styles.mainTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, delectus!
            </p>
            <div className={styles.user}>
              <p className={styles.name}>Suraj jamdade </p>
              <p className={styles.date}>07/07/2024</p>
            </div>
          </div>
          <div className={styles.content}>
            <p className={`${styles.cat} ${styles.fashion}`}>Fashion</p>
            <p className={styles.mainTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, delectus!
            </p>
            <div className={styles.user}>
              <p className={styles.name}>Suraj jamdade </p>
              <p className={styles.date}>07/07/2024</p>
            </div>
          </div>
          <div className={styles.content}>
            <p className={`${styles.cat} ${styles.culture}`}>Culture</p>
            <p className={styles.mainTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, delectus!
            </p>
            <div className={styles.user}>
              <p className={styles.name}>Suraj jamdade </p>
              <p className={styles.date}>07/07/2024</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Popular;
