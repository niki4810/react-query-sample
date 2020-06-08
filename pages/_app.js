import { ReactQueryDevtools } from "react-query-devtools";
import { ReactQueryConfigProvider } from "react-query";

const queryConfig = {
  staleTime: 60000
};

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <ReactQueryConfigProvider config={queryConfig}>
        <Component {...pageProps} />
      </ReactQueryConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </React.Fragment>
  );
};

export default App;