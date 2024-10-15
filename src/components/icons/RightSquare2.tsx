import * as React from "react";

function SvgRightSquare2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <g
        filter="url(#right_square2_svg__filter0_bdi_319_18)"
        shapeRendering="crispEdges"
      >
        <rect
          width={20}
          height={20}
          rx={5}
          transform="matrix(0 -1 -1 0 24 24)"
          fill="url(#right_square2_svg__paint0_linear_319_18)"
        />
        <rect
          x={-0.125}
          y={-0.125}
          width={19.75}
          height={19.75}
          rx={4.875}
          transform="matrix(0 -1 -1 0 23.75 23.75)"
          stroke="url(#right_square2_svg__paint1_linear_319_18)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#right_square2_svg__filter1_d_319_18)"
        stroke="#2AEAE7"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <path d="M15 17l2.293-2.293a1 1 0 000-1.414L15 11M17 14h-7" />
      </g>
      <defs>
        <linearGradient
          id="right_square2_svg__paint0_linear_319_18"
          x1={-6.5}
          y1={-8}
          x2={30.5}
          y2={25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="right_square2_svg__paint1_linear_319_18"
          x1={0.5}
          y1={3}
          x2={18}
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="right_square2_svg__filter0_bdi_319_18"
          x={0}
          y={0}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_18"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_backgroundBlur_319_18"
            result="effect2_dropShadow_319_18"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_18"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.38 0" />
          <feBlend in2="shape" result="effect3_innerShadow_319_18" />
        </filter>
        <filter
          id="right_square2_svg__filter1_d_319_18"
          x={7.25}
          y={8.25}
          width={13.086}
          height={11.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.35 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_319_18"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_18"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgRightSquare2;
