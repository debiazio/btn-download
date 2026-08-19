import React, { useState } from 'react'

interface Props {
  href: string
  label: string
  productName: string
  productLine: string
  ctaType: string
  productPosition: number
  pageName: string
}

const TrackingLink = ({
  href,
  label,
  productName,
  productLine,
  ctaType,
  productPosition,
  pageName,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      className="link-verProduto"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-product-name={productName}
      data-product-line={productLine}
      data-cta-type={ctaType}
      data-product-position={productPosition}
      data-page-name={pageName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        height: '34px',
        padding: '0 16px',
        boxSizing: 'border-box',
        backgroundColor: isHovered ? '#80C9B0' : '#4FAF89',
        color: '#ffffff',
        fontFamily: 'Poppins, Arial, sans-serif',
        fontSize: '12px',
        fontWeight: 700,
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'uppercase',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        border: 'none',
        borderRadius: '999px',
        cursor: 'pointer',
        transition: 'background-color 200ms ease-in-out',
      }}
    >
      {label}
    </a>
  )
}

export default TrackingLink
