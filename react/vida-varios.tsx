import React from 'react';


const BtDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://stermax.com.br/images_idealine/manuais/MANUAL-VIDA-30L-42L-60L-E-75L_Rev-04.02.2025-compactado.zip';
    link.download = 'STM-Manual-La-Belle-8L-2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="btn-download" onClick={handleDownload}
    style={{
    backgroundColor: '#FC87FC',
    padding: '12px',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '25px',
    margin: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.1s ease',
  }}
    >
      BAIXAR MANUAL
    </button>

  );
};

export default BtDownload;
