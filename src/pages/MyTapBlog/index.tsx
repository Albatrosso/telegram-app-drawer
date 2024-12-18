"use client";

import HeadPersonal from "@/components/HeadPersonal/HeadPersonal";
import MainComponent from "@/components/MainComponent/MainComponent";
import styles from './MyTapBlog.module.scss'
import TapblogLinkItem from "@/components/TapblogLinkItem/TapblogLinkItem";
import PersonalDataItem from "@/components/PersonalDataItem/PersonalDataItem";
import mobilePic from '../../../assets/images/mobileIcon.png'
import briefcaseIcon from '../../../assets/images/briefcaseIcon.png'
import starIcon from '../../../assets/images/starIcon.png'
import fireIcon from '../../../assets/images/fireIcon.png'
import FooterComponent from "@/components/FooterComponent/FooterComponent";

const MyTapBlog = () => {
  return (
    <MainComponent>
      <HeadPersonal/>
      <div className={styles.tapBlogLinks}>
      <TapblogLinkItem linkHeaderText="Заметки дизайнера" />
      <TapblogLinkItem linkHeaderText="Портфолио " />
      </div>
      <PersonalDataItem 
        icon={mobilePic} 
        dataHeaderText="Мобильный" 
        personalDataDescr="+7-999-999-99-99" 
      />
      <PersonalDataItem 
        icon={briefcaseIcon} 
        dataHeaderText="Вид деятельности" 
        personalDataDescr="Дизайнер" 
      />
      <PersonalDataItem 
        icon={starIcon} 
        dataHeaderText="Хобби" 
        personalDataDescr="Танцы" 
      />
      <PersonalDataItem 
        icon={fireIcon} 
        dataHeaderText="О себе" 
        personalDataDescr="Я - UI/UX дизайнер и эксперт с многолетним опытом работы в сфере дизайна пользовательских интерфейсов. " 
      />
      <FooterComponent/>
    </MainComponent>
  );
};

export default MyTapBlog;