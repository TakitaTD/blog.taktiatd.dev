import { Link, useParams } from "solid-app-router";
import type { Component } from "solid-js";
import { AlphabeticID as genID } from "./genID.js";

const Posts: Component = () => {
  const { id } = useParams();
  return (
    <Link
      href={`/Posts/${genID.encode(
        Math.floor(Math.random() * 100000000000000)
      )}`}
    >
      Post ID: {useParams().id}
    </Link>
  );
};

export default Posts;
