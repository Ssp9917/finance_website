import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import AuthProvider from './context/AuthProvider'
import UserAuthProvider from './context/UserAuthProvider'


function App() {
  return (
    <>
      <UserAuthProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </UserAuthProvider>
    </>
  )
}

export default App
