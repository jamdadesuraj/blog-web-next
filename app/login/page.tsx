"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <div className={styles.innerBox}>
        <div className={styles.googleBtn} onClick={() => signIn("google")}>
          <Image
            src="/google.webp"
            width={20}
            height={20}
            alt="logo"
            className={styles.img}
          />
          <p className={styles.btnText}>Sign In with Google</p>
        </div>
        <div className={styles.googleBtn}>
          <Image
            src="/git.png"
            width={20}
            height={20}
            alt="logo"
            className={styles.img}
          />
          <p className={styles.btnText}>Sign In with Git</p>
        </div>
        <div className={styles.googleBtn}>
          <Image
            src="/facebook.png"
            width={20}
            height={20}
            alt="logo"
            className={styles.img}
          />
          <p className={styles.btnText}>Sign In with Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
