/** Base do Keycloak (authorize). */
const KEYCLOAK_AUTH =
  'https://quattrus-keycloak.dev.sdlc-quattrus.com/realms/quattrus-general/protocol/openid-connect/auth'

/**
 * Origem do app (ex.: https://white-label-sso.vercel.app).
 * Override: VITE_APP_ORIGIN no .env. Em dev usa window.location.origin.
 */
function appOrigin() {
  const fromEnv = import.meta.env.VITE_APP_ORIGIN?.trim().replace(/\/$/, '')
  if (fromEnv) return fromEnv
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return 'https://white-label-sso.vercel.app'
}

/** Mesmo callback para todos os clientes: /callback */
function redirectUri() {
  return `${appOrigin()}/callback`
}

function buildAuthHref({ clientId, kcIdpHint }) {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri(),
    response_type: 'code',
    scope: 'openid',
    kc_idp_hint: kcIdpHint,
  })
  return `${KEYCLOAK_AUTH}?${params.toString()}`
}

/** URLs do fluxo OpenID por rota; redirect_uri único: {origem}/callback */
export const loginRoutes = [
  {
    path: '/claro-colombia',
    label: 'Claro colômbia',
    href: buildAuthHref({
      clientId: 'claro-colombia-portal',
      kcIdpHint: 'public-entra-id',
    }),
  },
  {
    path: '/izzi',
    label: 'Izzi',
    href: buildAuthHref({
      clientId: 'izzi-portal',
      kcIdpHint: 'private-entra-id',
    }),
  },
]
