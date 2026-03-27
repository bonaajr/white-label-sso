import { Navigate, Route, Routes } from 'react-router-dom'
import { CallbackPage } from './components/CallbackPage'
import { LoginPage } from './components/LoginPage'
import { loginRoutes } from './authUrls'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/claro-colombia" replace />} />
      <Route path="/callback" element={<CallbackPage />} />
      {loginRoutes.map(({ path, href, label }) => (
        <Route
          key={path}
          path={path}
          element={<LoginPage authHref={href} brandLabel={label} />}
        />
      ))}
      <Route path="*" element={<Navigate to="/claro-colombia" replace />} />
    </Routes>
  )
}
