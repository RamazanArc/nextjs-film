import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/RamazanArc" target="_blank">
        Ramazan Arici
      </Link>
    </footer>
  );
}

export default Footer;
