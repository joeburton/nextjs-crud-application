import Link from 'next/link';
import Head from 'next/head';

import styles from './Layout.module.css';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    const pathname = window?.location.pathname;
    const title = pathname === '/' ? 'Developer Details' : pathname;

    setPageTitle(title);
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <title>Your page title</title>
        <meta name='description' content='NextJS CRUD Example Application' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <header>
            <h1>{pageTitle}</h1>
          </header>
          {children}

          <div className={styles.content}>
            <p>
              Basic server side in memory CRUD application built using React.js,
              Next.js, Apollo and GraphQL deployed to Vercel.com
            </p>
          </div>
          <footer className={styles.footer}>
            <p>
              React.js, Next.js, Apollo &amp; GraphQL. <br />
              View the source code on&nbsp;
              <a
                href='https://github.com/joeburton/nextjs-crud-application'
                target='_blank'
                rel='noreferrer'
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
    </>
  );
};

export default Layout;
