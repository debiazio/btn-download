import React from 'react';
import styles from './styles.css';

const BtDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://stermax.com.br/images_idealine/manuais/STM-Manual-La-Belle-8L-2024.zip';
    link.download = 'STM-Manual-La-Belle-8L-2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className={styles['btn-download']} onClick={handleDownload}>
      BAIXAR MANUAL
    </button>
  );
};

export default BtDownload;

