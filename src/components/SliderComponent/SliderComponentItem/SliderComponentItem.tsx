import React from "react";
import Image from "next/image";
import styles from "./SliderComponentItem.module.scss";
import arrow from "../../../../assets/images/blockLinkarrow.png";
import picSlider from "../../../../assets/images/picSlider.png";
import sliderMiniPic from '../../../../assets/images/slider-mini-pic.png';

const SliderComponentItem = ({ 
  hasImage = false, 
  headerText = "Заголовок", 
  footerText = "Текст в подвале компонента", 
  variant = 'default',
  isSquare = false,
  imageSrc = null 
}) => {
  const isSquareVariant = variant === 'square' || isSquare;

  return (
    <div 
      className={`${styles.SliderComponentItem} ${
        isSquareVariant ? styles.SliderComponentItemSquare 
                        : hasImage ? styles.SliderComponentItemEnd 
                                   : ""
      }`}
    >
      {isSquareVariant ? (
        <div className={styles.SliderComponentItemSquareContent}>
          <Image 
            src={imageSrc || sliderMiniPic} 
            alt="Square Slider image" 
            layout="fill" 
            objectFit="cover" 
          />
          <div className={styles.SliderComponentItemSquareFooter}>
            {footerText}
          </div>
        </div>
      ) : (
        <>
          <div className={styles.SliderComponentItemHeader}>
            {headerText}
          </div>
          {hasImage && (
            <div className={styles.SliderComponentItemImage}>
              <Image src={imageSrc || picSlider} alt="Slider image" width={165} height={148} />
            </div>
          )}
          <div className={styles.SliderComponentItemFooter}>
            <div className={styles.SliderComponentItemFooterText}>
              {footerText}
            </div>
            <Image src={arrow} alt="Arrow icon" width={16} height={16} />
          </div>
        </>
      )}
    </div>
  );
};

export default SliderComponentItem;