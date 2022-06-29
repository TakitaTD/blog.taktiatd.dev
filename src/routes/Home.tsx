import type { Component } from "solid-js";
import styles from "./Home.module.scss";

const Home: Component = () => {
  return (
    <div class={styles.Home}>
      <header class={styles.Header}>Welcome to blog.TakitaTD.dev</header>
      <div class={styles.Description}>
        <p>
          Welcome to my open-source blog written in Solid.JS and SCSS. It's not
          much, but it's a way for me to talk about my developer experiences.
          All the code is available on{" "}
          <a
            href="https://github.com/TakitaTD/blog.takitatd.dev"
            style={{ display: "inline-block" }}
            target="blank"
            class={styles.GithubText}
          >
            <span>Github</span>
          </a>
        </p>

        <p>
          This blog also uses an API I built with Next.JS, because Prisma and
          Solid.JS is poop. Imma have my cake and eat it too
        </p>
      </div>
    </div>
  );
};

export default Home;
