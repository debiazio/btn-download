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

const ConsultantLink = ({
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
      className="link-falarComConsultor"
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
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        height: '36px',
        padding: '0 16px',
        boxSizing: 'border-box',
        backgroundColor: isHovered ? '#E5E5E5' : '#FFFFFF',
        color: '#6B6B6B',
        fontFamily: 'Poppins, Arial, sans-serif',
        fontSize: '12px',
        fontWeight: 700,
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'uppercase',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        border: '1px solid #777777',
        borderRadius: '999px',
        cursor: 'pointer',
        transition: 'background-color 200ms ease-in-out',
      }}
    >
      {label}
    </a>
  )
}

export default ConsultantLink
