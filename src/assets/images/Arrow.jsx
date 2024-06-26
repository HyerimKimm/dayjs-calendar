import React from "react";

const Arrow = ({ width = 16, height = 16, rotate = 90 }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
      >
        <g
          id="그룹_11818"
          data-name="그룹 11818"
          transform="translate(-251 -130)"
        >
          <rect
            id="사각형_8923"
            data-name="사각형 8923"
            width="16"
            height="16"
            transform="translate(251 130)"
            fill="none"
          />
          <path
            id="패스_15622"
            data-name="패스 15622"
            d="M10271.434-3733.385l4-4,4,4"
            transform="translate(-3476.385 -10137.934) rotate(90)"
            fill="none"
            stroke="#161d24"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
};

export default Arrow;
