"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import CustomBtn from "../customBtn/CustomBtn";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }
  return data;
};

const Comments = ({ postSlug }: { postSlug: string }) => {
  // temporary
  const { status } = useSession();

  const { data, error, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState<string>("");

  const handleSubmit = async () => {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    setDesc("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status === "authenticated" ? (
        <>
          <div className={styles.input}>
            <textarea
              name=""
              id=""
              placeholder="Write a comment..."
              className={styles.textArea}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
            <CustomBtn className="" onClick={handleSubmit}>
              Add
            </CustomBtn>
          </div>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error.message}</p>
          ) : (
            data.map((comment) => (
              <div className={styles.comments} key={comment._id}>
                <div className={styles.user}>
                  {comment?.user.image && (
                    <Image
                      src={comment.user.image}
                      alt="img"
                      width={50}
                      height={50}
                      className={styles.img}
                    />
                  )}
                  <div className={styles.info}>
                    <p className={styles.name}>{comment.user.name}</p>
                    <p className={styles.date}>
                      {comment.createdAt.slice(0, 10)}
                    </p>
                  </div>
                </div>
                <p className={styles.desc}>{comment.desc}</p>
              </div>
            ))
          )}
        </>
      ) : (
        <Link href="/login" className={styles.noComments}>
          Login to Write comments
        </Link>
      )}
    </div>
  );
};

export default Comments;
