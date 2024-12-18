import React from 'react';
import styles from './TextComponent.module.scss';

interface TextComponentProps {
  hasBorder?: boolean;
}

const TextComponent: React.FC<TextComponentProps> = ({ hasBorder = true }) => {
  return (
    <div className={`${styles.TextComponent} ${hasBorder ? styles.TextComponentBorder : ''}`}>
      <div className={styles.TextComponentTitle}>Обо мне</div>
      <div className={styles.TextComponentBody}>
        Я - UI/UX дизайнер и эксперт с многолетним опытом работы в сфере дизайна пользовательских интерфейсов.
        <br />
        Моя цель - создавать продукты, которые не только красивы и современны, но и удобны в использовании
      </div>
    </div>
  );
};

export default TextComponent;