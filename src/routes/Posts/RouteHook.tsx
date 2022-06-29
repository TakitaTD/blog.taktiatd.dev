import { Link, useParams } from "solid-app-router";
import { createMemo } from "solid-js";

const RouteHook = () => {
  console.log("RouteHook Rendered");
  const num = createMemo(() => {
    console.log("Route updated.");
    return useParams().id;
  });
  console.log(num);
  return (
    <div>
      <Link href={`/Post/${parseInt(num()) - 1}`}>PRESS TO MINUS</Link>
      <Link href={`/Post/${parseInt(num()) + 1}`}>PRESS TO PLUS</Link>
    </div>
  );
};
export default RouteHook;
