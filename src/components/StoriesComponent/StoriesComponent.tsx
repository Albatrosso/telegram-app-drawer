import React, { useState } from 'react';
import Stories from 'react-insta-stories';
import styles from './StoriesComponent.module.scss';
import closeStories from '../../../assets/images/closeStories.png';
import ringStories from '../../../assets/images/ringStories.png';
import Image from 'next/image';

const StoriesComponent = () => {
  const [showStories, setShowStories] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentHeading, setCurrentHeading] = useState('');

  const stories = [
    {
      url: 'https://i.ibb.co/XYnjZSQ/stories1.jpg',
      type: 'image',
      header: { heading: currentHeading, subheading: 'Описание первой сторис', profileImage: 'https://via.placeholder.com/50' },
    },
    {
      url: 'https://i.ibb.co/6BX68dh/stories2.jpg',
      type: 'image',
      header: { heading: currentHeading, subheading: 'Описание второй сторис', profileImage: 'https://via.placeholder.com/50' },
    },
    {
      url: 'https://www.youtube.com/shorts/Ikt72HH8Ics',
      type: 'video',
      duration: 5000,
    },
    {
      content: () => (
        <div
          style={{
            backgroundColor: 'lightblue',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Custom Story
        </div>
      ),
    },
  ];

  const openStory = (index: number, heading: string) => {
    setCurrentStoryIndex(index);
    setCurrentHeading(heading);
    setShowStories(true);
  };

  return (
    <div className={styles.StoriesComponent}>
      <div className={styles.StoriesButtons}>
        {/* <a href="" className={styles.quadStories}>
          <div className={styles.StoriesText}>Прайс</div>
        </a> */}
        <a href="#" onClick={() => openStory(0, 'Прайс')} className={styles.openButton}>
          <Image src={ringStories} alt="Прайс" />
          <div className={styles.StoriesItemText}>Прайс</div>
        </a>
        <a href="#" onClick={() => openStory(1, 'Услуги')} className={styles.openButton}>
          <Image src={ringStories} alt="Услуги" />
          <div className={styles.StoriesItemText}>Услуги</div>
        </a>
        <a href="#" onClick={() => openStory(2, 'Обо мне')} className={styles.openButton}>
          <Image src={ringStories} alt="Обо мне" />
          <div className={styles.StoriesItemText}>Обо мне</div>
        </a>
        <a href="#" onClick={() => openStory(3, 'История')} className={styles.openButton}>
          <Image src={ringStories} alt="История" />
          <div className={styles.StoriesItemText}>История</div>
        </a>
      </div>
      {showStories && (
        <div className={styles.storiesWrapper}>
          <Stories
            stories={stories}
            defaultInterval={4000}
            currentIndex={currentStoryIndex}
            onAllStoriesEnd={() => setShowStories(false)}
          />
          <a href="#" onClick={() => setShowStories(false)} className={styles.closeButton}>
            <Image src={closeStories} alt="Закрыть" width={16} height={16} />
          </a>
        </div>
      )}
    </div>
  );
};

export default StoriesComponent;