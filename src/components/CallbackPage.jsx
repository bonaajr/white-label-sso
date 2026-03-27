import { useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export function CallbackPage() {
  const [searchParams] = useSearchParams()

  const outcome = useMemo(() => {
    const code = searchParams.get('code')
    const error = searchParams.get('error')
    const errorDescription = searchParams.get('error_description')

    if (code) {
      return {
        ok: true,
        title: 'Autenticado com sucesso',
        detail: null,
      }
    }

    if (error) {
      const human =
        errorDescription?.replace(/\+/g, ' ') ??
        'Não foi possível concluir o login com o provedor de identidade.'
      return {
        ok: false,
        title: 'Falha na autenticação',
        detail: human,
      }
    }

    return {
      ok: false,
      title: 'Resposta inválida',
      detail:
        'Não foi possível identificar o resultado do login. Volte e tente novamente.',
    }
  }, [searchParams])

  useEffect(() => {
    document.title = outcome.ok
      ? 'Autenticado — SSO'
      : 'Erro no login — SSO'
  }, [outcome.ok])

  return (
    <div className="callback-page">
      <div className="callback-card">
        <h1
          className={`callback-title ${outcome.ok ? 'callback-title--success' : 'callback-title--error'}`}
        >
          {outcome.title}
        </h1>
        {outcome.detail ? (
          <p className="callback-detail">{outcome.detail}</p>
        ) : (
          <p className="callback-detail callback-detail--muted">
            Sua sessão foi autorizada pelo provedor de identidade.
          </p>
        )}
        <Link className="callback-back" to="/claro-colombia">
          Voltar ao login
        </Link>
      </div>
    </div>
  )
}
