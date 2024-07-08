"use client";

import { useRouter } from "next/navigation";
import CustomBtn from "../customBtn/CustomBtn";
import styles from "./pagination.module.css";

const PaginationComp = ({
  page,
  hasPrev,
  hasNext,
}: {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <CustomBtn
        className={styles.btn}
        onClick={() => router.push(`/?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        Previous
      </CustomBtn>
      <CustomBtn
        className={styles.btn}
        onClick={() => router.push(`/?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </CustomBtn>
    </div>
  );
};

export default PaginationComp;
