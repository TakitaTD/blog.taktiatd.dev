import { Component, createSignal, onMount } from "solid-js";
import { PostType } from "../Posts";
import styles from "./Post.module.scss";
import fetchProgress from "fetch-progress";

type propsType = {
  PostData: PostType;
};
type Author = {
  id: number;
  email: string;
  name: string;
};

const Post: Component<propsType> = (props: propsType) => {
  const [author, setAuthor] = createSignal({ name: "" } as Author);
  onMount(async () => {
    const authorData = await fetch(
      "https://api.blog.takitatd.dev/api/user/" + props.PostData.authorId
    );
    setAuthor(await authorData.json());
  });
  let content: string[] = props.PostData.content.split(" ");
  // props.PostData.content.split("\n");
  const finishedElement = document
    .createRange()
    .createContextualFragment(content.join(" "));
  while (finishedElement.querySelector("script")) {
    finishedElement.querySelector("script")?.remove();
  }
  while (finishedElement.querySelector("link")) {
    finishedElement.querySelector("link")?.remove();
  }

  const createdAt = new Date(Date.parse(props.PostData.createdAt));
  const date = `${createdAt.getHours()}:${createdAt.getSeconds()}:${createdAt.getMilliseconds()}/${createdAt.getDate()}.${createdAt.getMonth()}.${createdAt.getFullYear()}`;
  return (
    <div class={styles.Post}>
      <header>{props.PostData.title}</header>
      <span>{date}</span>
      <span>
        Written By:{" "}
        {author().name.length > 0 ? author().name : "Loading author data..."}
      </span>
      <div class={styles.Content}>{finishedElement}</div>
    </div>
  );
};
export default Post;
