import React, { useState } from 'react'

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    try {
      const res = await fetch('/api/dataentities/CO/documents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      if (res.ok) {
        setSuccess(true)
        setForm({ nome: '', email: '', telefone: '' })
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }

    setLoading(false)
  }

  return (
    <div style={{ maxWidth: '400px', padding: '16px' }}>
      <form onSubmit={handleSubmit}>

        <label style={{ display: 'block', marginBottom: '8px' }}>
          Nome
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '8px' }}>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '16px' }}>
          Telefone
          <input
            type="text"
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            background: '#1a73e8',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>

        {success && (
          <p style={{ color: 'green', marginTop: '16px' }}>
            Enviado com sucesso!
          </p>
        )}

        {error && (
          <p style={{ color: 'red', marginTop: '16px' }}>
            Erro ao enviar. Tente novamente.
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactForm
