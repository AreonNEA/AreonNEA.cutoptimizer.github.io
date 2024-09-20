import React from 'react';
import styles from './styles/MobileView.module.css';

function MobileView() {
  return (
    <div className={styles.mobileWrapper}>
      <p>Для корректной работы на мобильных устройствах используйте поворот экрана.</p>
    </div>
  );
}

export default MobileView;
