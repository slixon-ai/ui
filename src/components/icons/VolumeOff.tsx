import * as React from "react";

function SvgVolumeOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <g
        filter="url(#volume_off_svg__filter0_bdi_319_135)"
        shapeRendering="crispEdges"
      >
        <path
          d="M18 6.37c0-1.712-2.012-2.632-3.307-1.513l-3.33 2.876a2 2 0 01-1.307.487H8.5a2.5 2.5 0 00-2.5 2.5v3.293a2.5 2.5 0 002.5 2.5h1.556a2 2 0 011.307.486l3.33 2.876c1.295 1.12 3.307.2 3.307-1.513V6.37z"
          fill="url(#volume_off_svg__paint0_linear_319_135)"
        />
        <path
          d="M14.774 4.952c1.215-1.05 3.101-.187 3.101 1.419v11.991c0 1.605-1.886 2.468-3.1 1.419l-3.33-2.876a2.125 2.125 0 00-1.39-.517H8.5a2.375 2.375 0 01-2.375-2.375V10.72A2.375 2.375 0 018.5 8.345h1.556c.51 0 1.003-.184 1.389-.517l3.33-2.876z"
          stroke="url(#volume_off_svg__paint1_linear_319_135)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#volume_off_svg__filter1_d_319_135)">
        <path
          d="M22 5L7 20"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="volume_off_svg__paint0_linear_319_135"
          x1={2.1}
          y1={-6.293}
          x2={33.572}
          y2={9.954}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="volume_off_svg__paint1_linear_319_135"
          x1={6.3}
          y1={5.11}
          x2={20.917}
          y2={12.361}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="volume_off_svg__filter0_bdi_319_135"
          x={2}
          y={0.367}
          width={20}
          height={23.999}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_135"
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
            in2="effect1_backgroundBlur_319_135"
            result="effect2_dropShadow_319_135"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_135"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_135" />
        </filter>
        <filter
          id="volume_off_svg__filter1_d_319_135"
          x={4.25}
          y={2.25}
          width={20.5}
          height={20.5}
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
            result="effect1_dropShadow_319_135"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_135"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgVolumeOff;
