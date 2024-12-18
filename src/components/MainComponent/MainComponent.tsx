import React, { ReactNode } from 'react';
import styles from './MainComponent.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import heartLogo from '../../../assets/images/heartLogo.png';
import tapBlogLogo from '../../../assets/images/tapBlogLogo.png';
import tapIcon from '../../../assets/images/tapIcon.png';

const MainComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.mainComponent}>
      <div className={styles.content}>{children}</div>
      <nav className={styles.menu}>
        <div className={styles.MenuItem}>
          <Link href="/Favorites">
            <Image src={heartLogo} alt="Heart Logo" />
          </Link>
          <div className={styles.FavoriteBlockText}>Избранное</div>
        </div>

        <div className={styles.MenuItem}>
          <Link href="/MainPage">
            <Image src={tapBlogLogo} alt="Tap Blog Logo" />
          </Link>
        </div>

        <div className={styles.MenuItem}>
          <Link href="/MyTapBlog">
            <Image src={tapIcon} alt="Tap Icon" />
          </Link>
          <div className={styles.FavoriteBlockText}>Мой тапблог</div>
        </div>
      </nav>
    </div>
  );
};

export default MainComponent;