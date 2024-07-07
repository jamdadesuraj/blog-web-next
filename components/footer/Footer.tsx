import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const links = [
  {
    title: "Links",
    items: [
      {
        id: 1,
        name: "Home",
        path: "/",
      },
      {
        id: 2,
        name: "About",
        path: "/about",
      },
      {
        id: 3,
        name: "Contact",
        path: "/contact",
      },
      {
        id: 4,
        name: "Blog",
        path: "/",
      },
    ],
  },
  {
    title: "Tags",
    items: [
      {
        id: 1,
        name: "Style",
        path: "/style",
      },
      {
        id: 2,
        name: "Food",
        path: "/food",
      },
      {
        id: 3,
        name: "Travel",
        path: "/travel",
      },
      {
        id: 4,
        name: "Fashion",
        path: "/fashion",
      },
    ],
  },
  {
    title: "Menu",
    items: [
      {
        id: 1,
        name: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        id: 2,
        name: "Terms & Conditions",
        path: "/terms",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContent}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <h6 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam et
            aliquid temporibus. Ea magnam cupiditate veritatis non. Earum,
            dolorum placeat. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Numquam et aliquid temporibus. Ea magnam cupiditate veritatis
            non. Earum, dolorum placeat.
          </h6>
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
        </div>
        <div className={styles.linkContent}>
          {links.map((link) => (
            <div key={link.title} className={styles.footerLinkWrapper}>
              <h6 className={styles.footerLinkTitle}>{link.title}</h6>
              <ul className={styles.list}>
                {link.items.map((item) => (
                  <li key={item.id} className={styles.listItem}>
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2024. All Rights Reserved. | Design & Developed By </p>
        <Link href="" className={styles.copyrightLink}>
          Suraj Jamdade
        </Link>
      </div>
    </div>
  );
};

export default Footer;
