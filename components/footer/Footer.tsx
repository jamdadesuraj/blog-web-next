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
          <p className={styles.title}>
            Flymore Drone, headquarter in Pune (India), specialises in design
            and supply of UAV Solutions for variety of applications. Solution
            for Drone, Aerospace and GIS Industry. Flymore Drone is founded in
            2020 with a vision of supporting the Aerospace, Indian Defence and
            Aviation sector in the critical technology solutions. Flymore Drone
            heavily invested in the indigenous development of Unmanned Aerial
            Vehicle and Robotics.
          </p>
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
