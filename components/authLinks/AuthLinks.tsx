"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  // temporary

  const { status } = useSession();

  // const status = "unauthenticated";

  console.log(status);

  return (
    <div className={styles.container}>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <div className={styles.links}>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.logout}>Logout</span>
        </div>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        {open ? (
          <>
            <div className={styles.cross}></div>
          </>
        ) : (
          <>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </>
        )}
      </div>
      {open && (
        <div className={styles.responsive}>
          <Link href="/" onClick={() => setOpen(!open)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(!open)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setOpen(!open)}>
            Contact
          </Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <div className={styles.links}>
              <Link href="/write">Write</Link>
              <span className={styles.logout}>Logout</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
