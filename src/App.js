
import { SessionProvider } from 'next-auth/react'
import NextAuth from './components/NextAuth'

function App(Component,{session, NextAuth}) {
  return (
    <SessionProvider session={session}>
      <Component {...NextAuth} />
    </SessionProvider>
  )
}
export default App

