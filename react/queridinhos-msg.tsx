import React from 'react'
import { useRuntime } from 'vtex.render-runtime'

const QueridinhosMaduMessage: React.FC = () => {
  const { route } = useRuntime()

  if (!route || route.path !== '/queridinhos-madu') {
    return null
  }

  return (
    <div
      style={{
        padding: '12px',
        textAlign: 'center',
        fontSize: '18px',
        // color: '#7e7e7e',
        color: '#ffffff',
        fontWeight: 'bold',
        backgroundColor: '#ffa207',
        borderRadius: '12px',
        margin: '12px 0',
      }}
    >
      <h1
        style={{
          fontSize: '1.5rem',
      }}
      >Queridinhos MAD.U: os mais escolhidos por hospitais e clínicas</h1>
      <p>Carrinhos, bins e maletas modulares para organizar o atendimento em hospitais, clínicas, consultórios odontológicos e veterinários.
Mobiliário técnico com tecnologia antimicrobiana, fabricado no Brasil pela MAD.U</p>
    </div>
  )
}

export default QueridinhosMaduMessage
