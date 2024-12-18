import React from 'react';
import Link from 'next/link'; // Подключаем Link
import styles from './TapblogLinkItem.module.scss';
import Image from 'next/image';
import linkTapBlogPic from '../../../assets/images/linkTapBlogPic.png';
import linkTapBlogArrow from '../../../assets/images/linkTapBlogArrow.png';

interface TapblogLinkItemProps {
  linkHeaderText: string;
}

const TapblogLinkItem: React.FC<TapblogLinkItemProps> = ({ linkHeaderText }) => {
  return (
    <Link href="/CustomTapBlogPage" className={styles.TapblogLinkItemWrapper}> 
      <div className={styles.TapblogLinkItem}>
        <div className={styles.TapBlogLinkHeader}>
          <Image src={linkTapBlogPic} alt="owl" />
          <div className={styles.LinkheaderText}>{linkHeaderText}</div>
        </div>
        <div className={styles.LinkHeaderFooter}>
          <Image src={linkTapBlogArrow} alt="link" />
        </div>
      </div>
    </Link>
  );
};

export default TapblogLinkItem;