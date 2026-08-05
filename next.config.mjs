/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

// Content-Security-Policy.
//
// script-src keeps 'unsafe-inline' on purpose. The App Router inlines its RSC
// flight payload (self.__next_f.push(...)) plus the ld+json blocks, so the only
// ways to drop it are a per-request nonce from middleware — which makes every
// page dynamic and gives up static CDN caching — or build-time hashes, which
// change on every build. This site has no auth, cookies, sessions or
// user-generated content, and every byte of HTML comes from static .ts sources,
// so the residual XSS impact is low while the caching cost would be real.
// Everything else is locked down: no eval in prod, no plugins, no framing, and
// connect-src is limited to the one endpoint the contact form actually posts to.
const csp = [
  `default-src 'self'`,
  `base-uri 'self'`,
  `object-src 'none'`,
  `frame-src 'none'`,
  `frame-ancestors 'none'`,
  `form-action 'self'`,
  `manifest-src 'self'`,
  `media-src 'self'`,
  `worker-src 'self' blob:`,
  // 'unsafe-eval' is dev-only: webpack's eval source maps and React Fast
  // Refresh need it. It never reaches production.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  // Tailwind's injected styles and React style={{...}} props render as inline
  // styles / style attributes, which CSP counts as inline.
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: blob:`,
  // next/font/google self-hosts the font files under /_next/static at build
  // time, so no external font origin is needed.
  `font-src 'self' data:`,
  // The contact form posts to Web3Forms; ws: is the dev HMR socket.
  `connect-src 'self' https://api.web3forms.com${isDev ? " ws: wss:" : ""}`,
  ...(isDev ? [] : [`upgrade-insecure-requests`]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Redundant with frame-ancestors above, kept as a backstop for older browsers.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "accelerometer=()",
      "autoplay=()",
      "camera=()",
      "display-capture=()",
      "encrypted-media=()",
      "geolocation=()",
      "gyroscope=()",
      "magnetometer=()",
      "microphone=()",
      "midi=()",
      "payment=()",
      "usb=()",
      "xr-spatial-tracking=()",
    ].join(", "),
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig = {
  reactStrictMode: true,
  // Don't advertise the framework version to scanners.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...securityHeaders,
          // HSTS is meaningless over plain http in local dev and would poison
          // localhost for other projects, so it is production-only.
          ...(isDev
            ? []
            : [
                {
                  key: "Strict-Transport-Security",
                  value: "max-age=63072000; includeSubDomains; preload",
                },
              ]),
        ],
      },
    ];
  },
};

export default nextConfig;
