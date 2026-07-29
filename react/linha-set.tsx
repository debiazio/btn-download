import React from 'react';
import styles from './styles.css';

const BtDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://stermax.com.br/images_idealine/catalogosMadu/madu-set-catalogo.zip';
    // ftp://u883137428.bruno@stermax.com.br/catalogosMadu/madu-set-catalogo.zip
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className={styles['btn-download']} onClick={handleDownload}>
      BAIXAR CATÁLOGO
    </button>
  );
};

export default BtDownload;

