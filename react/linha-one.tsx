import React from 'react';
import styles from './styles.css';

const BtDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://stermax.com.br/images_idealine/catalogosMadu/MDU_Catalogo-de-Produtos-Web-Ajuste%201.zip';
    // ftp://u883137428.bruno@stermax.com.br/catalogosMadu/MDU_Catalogo-de-Produtos-Web-Ajuste%201.zip
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className={styles['btn-download']} onClick={handleDownload}>
      BAIXAR PDF
    </button>
  );
};

export default BtDownload;

