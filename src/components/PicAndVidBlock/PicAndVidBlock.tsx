import Image from 'next/image';
import React from 'react';
import styles from './PicAndVidBlock.module.scss';
import picPlaceholder from '../../../assets/images/picPlaceholder.png';

type PicAndVidBlockProps = {
    mediaType: 'image' | 'video';
    source: string;
    size: '1-3' | '1-1' | '1-2' | '3-1' | '3-3';
    altText?: string;
  };

const PicAndVidBlock: React.FC<PicAndVidBlockProps> = ({ mediaType, source, size, altText }) => {
  return (
    <div className={`${styles.PicAndVidBlock} ${styles[`size-${size}`]}`}>
      {mediaType === 'image' ? (
        <Image
          src={source || picPlaceholder}
          alt={altText || 'Media'}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      ) : (
        <video src={source} className={styles.Video} controls />
      )}
    </div>
  );
};

export default PicAndVidBlock;