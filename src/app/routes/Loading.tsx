import React from 'react';

const fill: string = 'black';

const divStyles = {
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'absolute',
  inset: 0,
  zIndex: 9999,
  height: '100%',
  maxHeight: '100vh',
  backgroundColor: 'white',
} as React.CSSProperties;

/** @description For loading states between routes only */
export const Loading = () => {
  return (
    <div style={divStyles}>
      <h3
        className="sr-only"
        style={{ margin: '0 0 16px 0', fontSize: '16px', color: fill }}
      >
        Loading...
      </h3>
      <svg
        width="38"
        height="38"
        style={{ width: '40px', height: '40px' }}
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stopColor={fill} stopOpacity="0" offset="0%" />
            <stop stopColor={fill} stopOpacity=".631" offset="63.146%" />
            <stop stopColor={fill} offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <path
              d="M36 18c0-9.94-8.06-18-18-18"
              id="Oval-2"
              stroke="url(#a)"
              strokeWidth="2"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </path>
            <circle fill={fill} cx="36" cy="18" r="1">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      </svg>
    </div>
  );
};
