import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div class={styles.Loading}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin:auto;display:block;"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#fe718d"
          stroke-width="5"
          fill="none"
        ></circle>
        <path
          d="M15 50 Q32.5 40 50 50 Q67.5 60 85 50 A35 35 0 0 1 15 50"
          fill="#46dff0"
        >
          <animate
            attributeName="d"
            repeatCount="indefinite"
            dur="1s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="M15 50 Q32.5 40 50 50 Q67.5 60 85 50 A35 35 0 0 1 15 50;M15 50 Q32.5 60 50 50 Q67.5 40 85 50 A35 35 0 0 1 15 50;M15 50 Q32.5 40 50 50 Q67.5 60 85 50 A35 35 0 0 1 15 50"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          ></animate>
        </path>
      </svg>
      Loading...
    </div>
  );
};
export default Loading;
