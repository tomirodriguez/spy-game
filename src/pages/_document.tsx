import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="manifest.webmanifest" />
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <script
            async
            src="https://unpkg.com/pwacompat"
            crossOrigin="anonymous"
          ></script>
          <link
            rel="icon"
            type="image/png"
            href="icon-192x192.png"
            sizes="192x192"
          />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body className="flex flex-col overflow-hidden">
          <div className="h-full grow">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
