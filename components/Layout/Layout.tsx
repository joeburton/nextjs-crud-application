import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <footer>
          <h1>Developer Details</h1>
        </footer>
        {children}
        <div className={styles.content}>
          <p>
            Basic in memory CRUD application built using React, NextJS, Appollo
            and GraphQL
          </p>
        </div>
        <footer className={styles.footer}>
          <p>
            React, NextJS, GraphQL, Apollo App. View the source code on&nbsp;
            <a
              href='https://github.com/joeburton/nextjs-apollo-app'
              target='_blank'
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Layout;
