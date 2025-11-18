import React from 'react';
import styles from './styles.css';


const BtDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://stermax.com.br/images_idealine/manuais/novembro2025/MANUAL%20VIDA%2030L%20a%2075lL_OUTUBRO%2025.zip';
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
