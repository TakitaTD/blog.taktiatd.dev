import type { Component } from "solid-js";
import styles from "./About.module.scss";

const About: Component = () => {
  return (
    <div class={styles.About}>
      <header class={styles.Header}>
        <span>About</span>
        <div class={styles.color}>About</div>
        <div class={styles.Underline} />
      </header>
      <div class={styles.Description}>
        <p>
          I made this because I've wanted to have a place to share my stories as
          a developer.
        </p>
        <p>I also need something to have as a product for Big Picture.</p>
      </div>
    </div>
  );
};

export default About;
