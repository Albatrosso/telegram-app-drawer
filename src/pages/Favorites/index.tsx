"use client";

import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import MainComponent from "@/components/MainComponent/MainComponent";
import styles from './Favorites.module.scss'
import TextComponent from "@/components/TextComponent/TextComponent";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import BlockLink from "@/components/BlockLink/BlockLink";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import PicAndVidBlock from "@/components/PicAndVidBlock/PicAndVidBlock";
import StoriesComponent from "@/components/StoriesComponent/StoriesComponent";
import SliderComponent from "@/components/SliderComponent/SliderComponent";

const Favorites = () => {
  return (
    <div className={styles.Favorites}>
      <MainComponent>

      {/* <HeaderComponent
        title="Заметки дизайнера"
        variant={3}

      />

        <PicAndVidBlock
          mediaType="video"
          source="/path-to-your-video.mp4"
          size="1-2"
        />
        <TextComponent />
        <FooterComponent/>
        <ButtonComponent/>
        <BlockLink 
          aspectRatio="1x2" 
          title="Как улучшить дизайн" 
          footerTitle="Зарегистрируйтесь сейчас" 
          href="https://yoursite.com"
        /> */}
        <StoriesComponent />
        {/* <SliderComponent/> */}

      </MainComponent>
    </div>
  );
};

export default Favorites;