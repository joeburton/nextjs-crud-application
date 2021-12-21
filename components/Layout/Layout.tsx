import Link from 'next/link';

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
            Basic server side in memory CRUD application built using React.js,
            Next.js, Apollo and GraphQL deployed to Vercel.com
          </p>
        </div>
        <footer className={styles.footer}>
          <p>
            React.js, Next.js, Apollo & GraphQL. <br />
            View the source code on&nbsp;
            <a
              href='https://github.com/joeburton/nextjs-crud-application'
              target='_blank'
            >
              GitHub
            </a>{' '}
            <Link href='/about'>
              <a>About</a>
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Layout;
