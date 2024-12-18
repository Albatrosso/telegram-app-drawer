import React, { useEffect, useState } from 'react';
import styles from './CountdownTimer.module.scss'

const CountdownTimer: React.FC = () => {
  const targetDate = new Date().getTime() + 1 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 47 * 60 * 1000 + 26 * 1000;


  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;


    if (difference > 0) {
      const timeLeftObj = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      return timeLeftObj;
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.CountdownTimer}>
      <div className={styles.CountdownTimerTitle}>Блок откроется через</div>
      <div className={styles.CountdownTimerBody}>
        <div className={styles.CountdownTimerBodyItem}>
            <div className={styles.BodyItemValue}>{timeLeft.days}</div>
            <div className={styles.BodyItemValueText}>дней</div>
        </div>
        <div className={styles.CountdownTimerBodyItem}>
            <div className={styles.BodyItemValue}>{timeLeft.hours}</div>
            <div className={styles.BodyItemValueText}>часов</div>
        </div>
        <div className={styles.CountdownTimerBodyItem}>
            <div className={styles.BodyItemValue}>{timeLeft.minutes}</div>
            <div className={styles.BodyItemValueText}>минут</div>
        </div>
        <div className={styles.CountdownTimerBodyItem}>
            <div className={styles.BodyItemValue}>{timeLeft.seconds}</div>
            <div className={styles.BodyItemValueText}>секунд</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;