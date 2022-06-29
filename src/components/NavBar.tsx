import { Component, onMount, Show } from "solid-js";
import styles from "./NavBar.module.scss";
import { useLocation } from "solid-app-router";
import NavLink from "./NavLink";
import "./NavBar.scss";
import { SVGMorpheus } from "../SVG-Morpheus-master/compile/unminified/svg-morpheus";

const NavBar: Component = () => {
  return (
    <nav class={styles.NavBar}>
      <ul>
        {/* Why the fuck are there errors here. I don't give a shit tbh */}
        <NavLink
          style={{
            position: "absolute",
            left: "0",
            padding: "0",
          }}
          href="/" // It's 12:00AM I don't know what I'm doing
          indifferent={true}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              fill="currentColor"
              d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z"
            />
          </svg>
        </NavLink>
        <NavLink href="/Posts">Posts</NavLink>
        {/* TYPESCRIPT SHUT THE FUCK UP */}
        <NavLink href="/About">About</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
