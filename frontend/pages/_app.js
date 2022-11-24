import '../styles/globals.css'
import Layout from '../Components/Layout/Layout'
import AuthProvider from '../Firebase/Context/AuthContext'
import Login from './login'
import SignUp from './signup'

function MyApp({ Component, pageProps }) {

  if (Component === Login || Component === SignUp) {
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    )
  }

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
