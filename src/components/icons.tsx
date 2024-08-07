type Props = React.HTMLAttributes<SVGElement>;

export const Icons = {
  arrowLeft: (props: Props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
      />
    </svg>
  ),

  wrench: (props: Props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      />
    </svg>
  ),

  spinner: (props: Props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect width="6" height="14" x="1" y="4" fill="currentColor">
        <animate
          id="svgSpinnersBarsScaleFade0"
          fill="freeze"
          attributeName="y"
          begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
          dur="0.75s"
          values="1;5"
        ></animate>
        <animate
          fill="freeze"
          attributeName="height"
          begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
          dur="0.75s"
          values="22;14"
        ></animate>
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
          dur="0.75s"
          values="1;.2"
        ></animate>
      </rect>
      <rect width="6" height="14" x="9" y="4" fill="currentColor" opacity=".4">
        <animate
          fill="freeze"
          attributeName="y"
          begin="svgSpinnersBarsScaleFade0.begin+0.15s"
          dur="0.75s"
          values="1;5"
        ></animate>
        <animate
          fill="freeze"
          attributeName="height"
          begin="svgSpinnersBarsScaleFade0.begin+0.15s"
          dur="0.75s"
          values="22;14"
        ></animate>
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinnersBarsScaleFade0.begin+0.15s"
          dur="0.75s"
          values="1;.2"
        ></animate>
      </rect>
      <rect width="6" height="14" x="17" y="4" fill="currentColor" opacity=".3">
        <animate
          id="svgSpinnersBarsScaleFade1"
          fill="freeze"
          attributeName="y"
          begin="svgSpinnersBarsScaleFade0.begin+0.3s"
          dur="0.75s"
          values="1;5"
        ></animate>
        <animate
          fill="freeze"
          attributeName="height"
          begin="svgSpinnersBarsScaleFade0.begin+0.3s"
          dur="0.75s"
          values="22;14"
        ></animate>
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinnersBarsScaleFade0.begin+0.3s"
          dur="0.75s"
          values="1;.2"
        ></animate>
      </rect>
    </svg>
  ),
};
