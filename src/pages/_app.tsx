import type { AppProps } from "next/app";
import { useApollo } from "@lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

import GlobalStyles from "../styles/GlobalStyles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {

  const initialApolloState = (pageProps as any)?.initialApolloState;
  const apolloClient = useApollo(initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
