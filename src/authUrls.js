/** URLs do fluxo OpenID (href do botão Microsoft) por rota. */
export const loginRoutes = [
  {
    path: '/claro-colombia',
    label: 'Claro colômbia',
    href: 'https://quattrus-keycloak.dev.sdlc-quattrus.com/realms/quattrus-general/protocol/openid-connect/auth?client_id=claro-colombia-portal&redirect_uri=https%3A%2F%2Fquattrus-keycloak.dev.sdlc-quattrus.com%2Fcallback&response_type=code&scope=openid&kc_idp_hint=public-entra-id',
  },
  {
    path: '/izzi',
    label: 'Izzi',
    href: 'https://quattrus-keycloak.dev.sdlc-quattrus.com/realms/quattrus-general/protocol/openid-connect/auth?client_id=izzi-portal&redirect_uri=https%3A%2F%2Fquattrus-keycloak.dev.sdlc-quattrus.com%2Fcallback&response_type=code&scope=openid&kc_idp_hint=private-entra-id',
  },
]
