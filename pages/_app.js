import "../styles/globals.css";
import connect from "../utils/connect";

function MyApp({ Component, pageProps }) {
  connect();
  return <Component {...pageProps} />;
}

export default MyApp;
