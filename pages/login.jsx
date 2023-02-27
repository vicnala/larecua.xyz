import React, { useEffect } from "react";
import {
  ConnectWallet,
  useAddress,
  useUser,
  useLogin
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

export default function Login() {
  const router = useRouter();
  const address = useAddress(); // Get the user's address
  
  // Hooks to sign with Ethereum (auth SDK)
  const { login, isLoading } = useLogin();
  const { isLoggedIn } = useUser();

  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.push("/");
    }
  }, [isLoading, isLoggedIn, router]);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}><a href="http://larecua.xyz/">LaRecua</a> Club</h1>
      <>
        {address ? (
          <>
            <p>
              Bienvenido {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>

            <button
              className={styles.mainButton}
              style={{ width: 256 }}
              onClick={() => login()}
            >
              {
                isLoading ? "Cargando..." :
                  (!isLoading && isLoggedIn) ?
                    "Redirigiendo..." :
                      "Acceder"
              }
            </button>
          </>
        ) : (
          <>
            <p></p>
            <ConnectWallet accentColor="#F213A4" btnTitle={"Conecta tu wallet"}/>
          </>
        )}
      </>
    </div>
  );
}
