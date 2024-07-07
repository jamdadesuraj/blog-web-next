"use client";

import { useEffect, useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import CustomBtn from "@/components/customBtn/CustomBtn";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const WritePage = () => {
  const { status } = useSession();

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const storage = getStorage(app);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        img: media,
        desc: value,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Write A Blog</h2>
      <div className={styles.add}>
        <input
          type="text"
          placeholder="Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className={styles.select}
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>
        <div className={styles.plus} onClick={() => setOpen(!open)}>
          <Image
            src="/plus.png"
            width={24}
            height={24}
            alt="img"
            className={styles.img}
          />
        </div>
        {open && (
          <div className={styles.addBtnLabels}>
            <input
              type="file"
              id="image"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <div className={styles.uploadImg}>
              <label htmlFor="image">
                <Image
                  src="/image.png"
                  width={24}
                  height={24}
                  alt="img"
                  className={styles.addImg}
                  title="upload Image"
                />
              </label>
            </div>
            <div className={styles.uploadVideo}>
              <Image
                src="/video.png"
                width={24}
                height={24}
                alt="img"
                className={styles.addImg}
                title="upload Video"
              />
            </div>
            <div className={styles.uploadLinks}>
              <Image
                src="/external.png"
                width={24}
                height={24}
                alt="img"
                className={styles.addImg}
                title="upload External"
              />
            </div>
          </div>
        )}
        <div className={styles.textAreaContainer}>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className={styles.textArea}
          />
          <CustomBtn className={styles.btn} onClick={handleSubmit}>
            Submit
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
