import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400&f[]=sentient@400&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/4b1022cf8e.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <SessionWrapper>
        <body>
          {children}
        </body>
      </SessionWrapper>
    </html>
  );
}
