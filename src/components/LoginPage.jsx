import { useEffect } from 'react'
import { MicrosoftLogo } from './MicrosoftLogo'

export function LoginPage({ authHref, brandLabel }) {
  useEffect(() => {
    document.title = `Login — ${brandLabel}`
  }, [brandLabel])

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">{brandLabel}</p>
        <a className="login-ms-link" href={authHref}>
          <MicrosoftLogo className="login-ms-logo" />
          <span>Sign in with Microsoft</span>
        </a>
      </div>
    </div>
  )
}
