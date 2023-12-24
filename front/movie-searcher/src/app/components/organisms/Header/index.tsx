import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
   return (
      <header className={styles.header}>
         <h1>Movie Searcher</h1>
      </header>
   );
};

export default Header;