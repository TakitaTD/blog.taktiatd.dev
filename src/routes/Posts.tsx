import { createEffect, createSignal, For, onMount } from "solid-js";
import Loading from "../components/Loading";
import MoreContent from "../components/MoreContent";
import PostBox from "../components/PostBox";
import Waves from "../components/Waves";
import { blogPosts } from "./blogPosts";
import styles from "./Posts.module.scss";
import Post from "./Posts/Post";

export interface PostType {
  id: number;
  title: string;
  content: string;
  description: string;
  published: boolean;
  authorId: number;
  createdAt: string;
}
const Posts = () => {
  const [posts, setPosts] = createSignal([]);
  onMount(async () => {
    const fetchedPosts = await fetch(
      "https://api.blog.takitatd.dev/api/post/all"
    );
    setPosts(await fetchedPosts.json());
  });
  return (
    <>
      <div class={styles.Posts}>
        <header class={styles.Header}>
          <span>Posts</span>
          <div class={styles.color}>Posts</div>
          <div class={styles.Underline} />
        </header>
        <div class={styles.Posts}>
          <p>
            Unless I need to start mitigating the amount of posts I load, all my
            posts will be chronologically ordered below-
          </p>
        </div>
      </div>
      <Waves />

      <MoreContent style={{ bottom: "-100%", "z-index": "1" }}>
        <div class={styles.ActualPosts}>
          <For each={posts()} fallback={<Loading />}>
            {(post) => <PostBox blog={post} />}
          </For>
        </div>
      </MoreContent>
    </>
  );
};
export default Posts;
