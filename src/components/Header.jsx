import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src="/logo.png" alt="Logo" className={styles.logoImage} />
        <img src="/title.png" alt="Title" className={styles.titleImage} />
      </div>
    </header>
  );
}

export default Header;