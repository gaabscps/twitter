import React from "react";
import { TwitterIcon } from "../../src/assets/images/svg/twitterIcon";
import Link from "next/link";
import "./styles/styles.scss";
import "../styles/config/reset.scss";

export default function Custom404() {
  return (
    <>
      <Link href={"/"}>
        <div className="error404">
          <TwitterIcon width={100} height={100} color="#1d9bf0" />
          <h1>404</h1>
          <h2>Página não encontrada</h2>
        </div>
      </Link>
    </>
  );
}
