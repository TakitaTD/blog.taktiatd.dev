import { Component } from "solid-js";

type PropsType = {
  children: any;
  style: any;
};

const MoreContent: Component<PropsType> = (props: PropsType) => {
  console.log(props.style);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
export default MoreContent;
