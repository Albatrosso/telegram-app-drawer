import React, { useState } from "react";
import Image from "next/image";
import styles from "./HeaderComponent.module.scss";
import defaultAvatar from "../../../assets/images/userAva.png";
import ModalComponent from "../ModalComponent/ModalComponent";

type HeaderComponentProps = {
  title: string;
  variant: 1 | 2 | 3 | 4;
  avatarUrl?: string;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({ title, variant, avatarUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className={`${styles.HeaderComponent} ${
        variant === 3 || variant === 4 ? styles.VerticalLayout : styles.HorizontalLayout
      }`}
    >
      {(variant === 1 || variant === 2 || variant === 3 || variant === 4) && (
        <div className={styles.HeaderTop}>
          {(variant === 1 || variant === 3) && (
            <Image
              className={styles.Avatar}
              src={avatarUrl || defaultAvatar}
              alt="User Avatar"
              width={40}
              height={40}
            />
          )}
          <div className={styles.Title}>{title}</div>
          {(variant === 3 || variant === 4) && <div className={styles.BurgerMenu}>☰</div>}
        </div>
      )}

      {(variant === 1 || variant === 2 || variant === 3 || variant === 4) && (
        <a
          href="#"
          className={`${styles.SubscribeButton} ${
            variant === 3 || variant === 4 ? styles.FullWidthButton : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            openModal();
          }}
        >
          Подписаться
        </a>
      )}

      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubscribe={closeModal}
      />
    </div>
  );
};

export default HeaderComponent;