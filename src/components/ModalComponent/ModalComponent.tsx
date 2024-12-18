import React from "react";
import styles from "./ModalComponent.module.scss";
import closeIcon from '../../../assets/images/closeIcon.png'
import Image from "next/image";

type ModalComponentProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
};

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, onClose, onSubscribe }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.ModalComponent}>
      <div className={styles.Overlay} onClick={onClose}></div>
      <div className={styles.Content}>
        <div className={styles.ModalHeader}>
          <div className={styles.ModalHeaderTitle}>Скидка 50% на консультацию со мной</div>
          <a href="#" className={styles.CloseButton} onClick={onClose}>
            <Image src={closeIcon} alt="close" />
          </a>
        </div>
        <a href="#" className={styles.SubscribeButton} onClick={onSubscribe}>
          Подписаться
        </a>
      </div>
    </div>
  );
};

export default ModalComponent;