import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span className={styles.footerText}>
          Copyright 2023 TDT All Right Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
