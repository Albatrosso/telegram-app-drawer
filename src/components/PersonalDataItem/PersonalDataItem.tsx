import React from 'react';
import styles from './PersonalDataItem.module.scss';
import Image from 'next/image';

interface PersonalDataItemProps {
  icon: any;
  dataHeaderText: string;
  personalDataDescr: string;
}

const PersonalDataItem: React.FC<PersonalDataItemProps> = ({ 
  icon, 
  dataHeaderText, 
  personalDataDescr 
}) => {
  return (
    <div className={styles.PersonalDataItem}>
      <div className={styles.PersonalDataHeader}>
        <Image src={icon} alt="" />
        <div className={styles.DataHeaderText}>{dataHeaderText}</div>
      </div>
      <div className={styles.PersonalDataDescr}>{personalDataDescr}</div>
    </div>
  );
};

export default PersonalDataItem;