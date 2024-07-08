import Image from "next/image";
import style from "./singlBlogPage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

interface Post {
  title: string;
  user: {
    name: string;
    image?: string;
  };
  img?: string;
  desc: string;
}

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

interface SingleBlogPageProps {
  params: {
    slug: string;
  };
}

const SingleBlogPage = async ({ params }: SingleBlogPageProps) => {
  const { slug } = params;

  const data = await getData(slug);

  console.log(data);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.textContainer}>
          <h2 className={style.title}>{data.title}</h2>

          <table className={style.table}>
            <thead className={style.thead}>
              <tr>
                <th>Category</th>
                <th>Views</th>
                <th>Views</th>
              </tr>
            </thead>

            <tbody className={style.tbody}>
              <tr>
                <td className={style.slugTd}>
                  <p className={style.slug}>{data.catSlug}</p>
                </td>
                <td>
                  <div className={style.views}>
                    <Image
                      src="/views.webp"
                      width={40}
                      height={40}
                      alt="views"
                    />
                    <p>{data.views}</p>
                  </div>
                </td>
                <td>
                  <div className={style.user}>
                    {data?.user?.image && (
                      <Image
                        src={data.user.image}
                        width={50}
                        height={50}
                        alt="user"
                        className={style.userImg}
                      />
                    )}
                    <div className={style.info}>
                      <p>{data?.user?.name}</p>
                      <p>{data.createdAt.slice(0, 10)}</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.imgContainer}>
          {data.img && (
            <Image src={data.img} fill alt="post image" className={style.img} />
          )}
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.text}>
          <div
            className={style.desc}
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
          <Comments postSlug={slug} />
        </div>
        <div className={style.sideBlog}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
