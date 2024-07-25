import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <header className={styles.header}></header>
      {children}
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Layout;
