import React, { useEffect, useState } from 'react'
import styles from './shelfTimer.css'

type PropsShelfTimer = {
  endDate: string
}

function ShelfTimer({ endDate }: PropsShelfTimer) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null)

  // Contagem regressiva a partir de agora até a data/hora finais
  useEffect(() => {
    const targetTime = endDate ? new Date(endDate).getTime() : NaN

    // Sem data final válida, o contador não inicia
    if (!endDate || isNaN(targetTime)) {
      setTimeLeft(null)
      return
    }

    const tick = () => {
      const now = new Date().getTime()
      const diff = targetTime - now

      if (diff <= 0) {
        // Chegou a zero: para e desaparece
        setTimeLeft(0)
        clearInterval(interval)
      } else {
        setTimeLeft(diff)
      }
    }

    const interval = setInterval(tick, 1000)
    tick() // executa imediatamente para não esperar 1s

    return () => clearInterval(interval)
  }, [endDate])

  const DAY_MS = 24 * 60 * 60 * 1000

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000)
    const totalHours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    // Mais de 24h: exibe "X dias e Y horas restantes"
    if (ms > DAY_MS) {
      return {
        type: 'days' as const,
        days: Math.floor(totalHours / 24),
        hours: totalHours % 24,
      }
    }

    // Até 24h: contagem regressiva HH:MM:SS
    return {
      type: 'clock' as const,
      hours: String(totalHours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    }
  }

  // Sem data válida ou contagem encerrada: oculta o banner inteiro
  if (timeLeft === null || timeLeft <= 0) {
    return null
  }

  const formatted = formatTime(timeLeft)

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timerBox}>
        {formatted.type === 'clock' ? (
          <div className={styles.clockWrapper}>
            <div className={styles.faltamLabel}>
              Faltam
              <span className={styles.ellipsis} aria-hidden="true">
                <span className={styles.dot}>.</span>
                <span className={styles.dot}>.</span>
                <span className={styles.dot}>.</span>
              </span>
            </div>
            <div className={styles.timeGroup}>
              {formatted.hours.split('').map((digit, i) => (
                <span key={`h-${i}-${digit}`} className={styles.digit}>
                  {digit}
                </span>
              ))}
              <span className={styles.separator}>:</span>
              {formatted.minutes.split('').map((digit, i) => (
                <span key={`m-${i}-${digit}`} className={styles.digit}>
                  {digit}
                </span>
              ))}
              <span className={styles.separator}>:</span>
              {formatted.seconds.split('').map((digit, i) => (
                <span key={`s-${i}-${digit}`} className={styles.digit}>
                  {digit}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.daysMessage}>
            Faltam {formatted.days} {formatted.days === 1 ? 'dia' : 'dias'}
            {formatted.hours > 0 && (
              <>
                {' '}
                e {formatted.hours}{' '}
                {formatted.hours === 1 ? 'hora' : 'horas'}
              </>
            )}
            <span className={styles.ellipsis} aria-hidden="true">
              <span className={styles.dot}>.</span>
              <span className={styles.dot}>.</span>
              <span className={styles.dot}>.</span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

ShelfTimer.schema = {
  title: 'Temporizador da Prateleira',
  description: 'Define a data e hora finais para a contagem regressiva',
  type: 'object',
  properties: {
    endDate: {
      title: 'Data e hora finais',
      description:
        'Momento em que o contador chega a zero e a prateleira desaparece',
      type: 'string',
      format: 'date-time',
      default: null,
    },
  },
}

export default ShelfTimer
