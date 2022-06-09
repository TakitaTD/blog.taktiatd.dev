import { Link, useLocation } from "solid-app-router";
import type { Component } from "solid-js";

const NavLink: Component = ({ style, children, href, indifferent }) => {
  return (
    <li style={style && style}>
      <Link
        href={href}
        class={
          // Yeah this code is fuckin stupid
          !indifferent
            ? useLocation().pathname === href
              ? "active"
              : "inactive"
            : ""
        }
      >
        {children}
      </Link>
    </li>
  );
};
export default NavLink;
