import Image from "next/image";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="logo"
        className={styles.logoImg}
        priority
      />
    </div>
  );
};

export default Logo;
