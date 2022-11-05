import "../styles/globals.css";
import Layouts from "../src/components/Layouts";

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
