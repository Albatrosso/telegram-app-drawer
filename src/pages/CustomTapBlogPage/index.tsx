import React from 'react';
import styles from './CustomTapBlogPage.module.scss';
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';
import userAva from '../../../assets/images/userAva.png';
import StoriesComponent from '@/components/StoriesComponent/StoriesComponent';
import SliderComponent from '@/components/SliderComponent/SliderComponent';
import TextComponent from '@/components/TextComponent/TextComponent';
import CountdownTimer from '@/components/CountdownTimer/CountdownTimer';
import MainComponent from '@/components/MainComponent/MainComponent';
import FooterComponent from '@/components/FooterComponent/FooterComponent';

const CustomTapBlogPage = () => {
  const usefulArticlesSlides = [
    {
      headerText: 'Тренды современных интерфейсов',
      footerText: 'Анализ 2023 года',
      hasImage: true,
    },
    {
      headerText: 'Вдохновение из природы',
      footerText: 'Как создавать уникальные дизайны',
      hasImage: false,
    },
    {
      headerText: 'Минимализм в дизайне',
      footerText: 'Меньше — лучше?',
      hasImage: true,
    },
  ];

  const studentWorkSlides = [
    {
      headerText: 'Работа ученика 1',
      footerText: 'Креативный проект',
      hasImage: true,
    },
    {
      headerText: 'Работа ученика 2',
      footerText: 'Необычный подход к задаче',
      hasImage: false,
    },
    {
      headerText: 'Работа ученика 3',
      footerText: 'Дизайн, который вдохновляет',
      hasImage: true,
    },
  ];

  return (
    <MainComponent>
      <div className={styles.CustomTapBlogPage}>
        <HeaderComponent title="Заметки дизайнера" variant={1} avatarUrl={userAva.src} />
        <StoriesComponent />
        <div className={styles.CustomTapBlogPageTitle}>Полезные статьи</div>
        <SliderComponent slides={usefulArticlesSlides} />
        <TextComponent />
        <div className={styles.CustomTapBlogPageTitle}>Работы учеников</div>
        <SliderComponent slides={studentWorkSlides} isSquare={true} />
        <CountdownTimer />
        <FooterComponent />
      </div>
    </MainComponent>
  );
};

export default CustomTapBlogPage;