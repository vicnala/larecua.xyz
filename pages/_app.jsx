import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import { domainName } from "../const";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const network = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      network={network}
      authConfig={{
        domain: domainName,
        authUrl: "/api/auth",
        loginRedirect: "/"
      }}
    >
      <Head>
        <title>LaRecua Club</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Una aplicación web para el Club LaRecua"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
