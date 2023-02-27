import React from "react";
import { useRouter } from "next/router";
import { ConnectWallet, useLogout } from "@thirdweb-dev/react";

import styles from "../styles/Home.module.css";

export default function Exit() {
  const router = useRouter();
  const { logout } = useLogout();
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>No eres miembro de <a href="http://larecua.xyz/">LaRecua</a> Club</h1>
      <p>
        Comprueba tu cuenta
      </p>
      <ConnectWallet accentColor="#F213A4" />
      <p>y</p>
      <button
        className={styles.mainButton}
        style={{ width: 256 }}
        onClick={() => {
          logout();
          router.push("/login");
        }}
      >
        Vuelve a iniciar sesión
      </button>
    </div>
  );
}
