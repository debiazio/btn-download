import React from 'react';
import styles from './styles.css';

const BtDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://stermax.com.br/images_idealine/manuais/fev26/Manual_DIGITAL_IDEALCLAVE_5L_FEVEREIRO_26.zip';
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
