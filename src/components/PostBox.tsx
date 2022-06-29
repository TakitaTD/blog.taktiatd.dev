import styles from "./PostBox.module.scss";
import { PostType } from "../routes/Posts";
import { Link } from "solid-app-router";

type PropsType = {
  blog: PostType;
};

const PostBox = (props: PropsType) => {
  const createdAt = new Date(Date.parse(props.blog.createdAt));
  const date = `${createdAt.getHours()}:${createdAt.getSeconds()}:${createdAt.getMilliseconds()}/${createdAt.getDate()}.${createdAt.getMonth()}.${createdAt.getFullYear()}`;
  return (
    <Link href={`/Post/${props.blog.id}`}>
      <div class={styles.PostBox}>
        <span class={styles.title}>{props.blog.title}</span>
        <span>{date}</span>
        <span class={styles.description}>{props.blog.description}</span>
      </div>
    </Link>
  );
};
export default PostBox;
