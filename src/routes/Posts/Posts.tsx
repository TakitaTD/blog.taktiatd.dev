import { Link, useParams, useRoutes } from "solid-app-router";
import { Component, createEffect, createMemo, createSignal } from "solid-js";
import { AlphabeticID as genID } from "./genID.js";
import Post from "./Post";
import { PostType } from "../Posts";
import styles from "./Post.module.scss";
import Loading from "../../components/Loading.jsx";

const Posts: Component = () => {
  const [postData, setPostData] = createSignal({} as PostType);
  const post = createMemo(async () => {
    let fetchedPost;
    fetch(`https://api.blog.takitatd.dev/api/post/${useParams().id}`)
      .then((data) => data.json())
      .then((data) => setPostData(data as PostType));
  });
  createEffect(() => {
    console.log(postData());
  });

  return (
    <>
      {postData().id ? (
        <Post PostData={postData()} />
      ) : (
        <div class={styles.Post}>
          <Loading />
        </div>
      )}
    </>
  );
};

export default Posts;
