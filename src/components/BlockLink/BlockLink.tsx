import React from 'react';
import styles from './BlockLink.module.scss';
import Image from 'next/image';
import arrow from '../../../assets/images/blockLinkarrow.png';

const BlockLink = ({ 
  aspectRatio = '1x3', 
  title = 'Заголовок карточки', 
  footerTitle = 'Текст внизу', 
  href = '#',
}) => {
  const validRatios = ['1x3', '1x1', '1x2', '3x1'];
  const ratioClass = validRatios.includes(aspectRatio) ? styles[`size_${aspectRatio}`] : styles.size_1x3;

  return (
    <div className={`${styles.BlockLink} ${ratioClass}`}>
      <div className={styles.BlockLinkTitle}>{title}</div>
      <a href={href} className={styles.BlockLinkFooter}>
        <div className={styles.BlockLinkFooterTitle}>{footerTitle}</div>
        <Image src={arrow} alt="Arrow icon" />
      </a>
    </div>
  );
};

export default BlockLink;