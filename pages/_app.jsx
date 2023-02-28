import "../public/assets/styles.css";
import "react-multi-carousel/lib/styles.css";

import Layout from "../Layout";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
