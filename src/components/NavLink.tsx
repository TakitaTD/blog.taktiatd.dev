import { Link, useLocation } from "solid-app-router";
import type { Component } from "solid-js";

export type PropsType = {
  style?: string;
  href: string;
  children: any;
  indifferent: boolean;
};

const NavLink: Component<PropsType> = (props: PropsType) => {
  return (
    <li style={props.style && props.style}>
      <Link
        href={props.href}
        class={
          // Yeah this code is fuckin stupid
          !props.indifferent
            ? useLocation().pathname === props.href
              ? "active"
              : "inactive"
            : ""
        }
      >
        {props.children}
      </Link>
    </li>
  );
};
export default NavLink;
