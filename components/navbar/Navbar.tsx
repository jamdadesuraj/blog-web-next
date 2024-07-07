import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggler from "../themeToggler/ThemeToggler";
import AuthLinks from "../authLinks/AuthLinks";
import Logo from "../logo/Logo";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socialLinks}>
        <Link href="https://www.facebook.com/">
          <Image
            src="/facebook.png"
            width={24}
            height={24}
            alt="facebook"
            className={styles.socialImg}
          />
        </Link>
        <Link href="https://www.instagram.com/">
          <Image
            src="/instagram.png"
            width={24}
            height={24}
            alt="facebook"
            className={styles.socialImg}
          />
        </Link>

        <Link href="https://www.youtube.com/">
          <Image
            src="/youtube.png"
            width={24}
            height={24}
            alt="facebook"
            className={styles.socialImg}
          />
        </Link>
        <Link href="https://www.tiktok.com/">
          <Image
            src="/tiktok.png"
            width={24}
            height={24}
            alt="facebook"
            className={styles.socialImg}
          />
        </Link>
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.links}>
        <ThemeToggler />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/Contact" className={styles.link}>
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
