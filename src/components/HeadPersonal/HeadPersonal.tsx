import React from 'react'
import styles from './HeadPersonal.module.scss'
import Image from 'next/image';
import greyBG from '../../../assets/images/grayHeadPerson.png'
import userAvaPers from '../../../assets/images/userAvaPerson.png'

const HeadPersonal = () => {
  return (
    <div className={styles.HeadPersonal}>
        <Image src={greyBG} alt="История" className={styles.HeadPersonalBG}/>
        <div className={styles.HeadPersonalBody}>
            <div className={styles.HeadPersonalBodyInside}>
                <div className={styles.PersonalBodyAvatar}>
                    <Image src={userAvaPers} alt='avatar'/>
                </div>
                <div className={styles.UserData}>
                    <div className={styles.UserName}>Мария Смит</div>
                    <div className={styles.UserNickName}>@smith</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeadPersonal
