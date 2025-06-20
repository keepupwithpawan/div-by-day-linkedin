// src/app/layout.js
import "./globals.css";
import Script from "next/script";
import SessionWrapper from "./component/SessionWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* your fontshare link stays as-is */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400&f[]=sentient@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SessionWrapper>{children}</SessionWrapper>

        {/* load FontAwesome kit asynchronously */}
        <Script
          src="https://kit.fontawesome.com/4b1022cf8e.js"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
