import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [currentUser, setCurrentUser] = useState();

  return (
    <>
      <Head>
        <title>Composition over Context</title>
        <meta name="description" content="this app is for demo purpose only" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <div>
          <Header />

          <hr />

          <div>
            {currentUser ? (<Dashboard user={currentUser} />) : (<LoginScreen onLogin={() => setCurrentUser({ name: 'Soobin' })} />)}
          </div>

          <hr />

          <Footer />
        </div>
      </main>
    </>
  )
}

const Header = () => (
  <div style={{ backgroundColor: 'lightgray' }}>
    <h1>Header</h1>
  </div>
);

const Footer = () => (
  <div style={{ backgroundColor: 'lightgray' }}>
    <h1>Footer</h1>
  </div>
);

const Dashboard = ({ user }) => (
  <div>
    <h2>Dashboard</h2>
    <DashboardNav />
    <DashboardContent user={user} />
  </div>
);

const DashboardNav = () => (
  <div>
    <h3>DashboardNav</h3>
  </div>
);

const DashboardContent = ({ user }) => (
  <div>
    <h3>DashboardContent</h3>
    <WelcomeMessage user={user} />
  </div>
);

const WelcomeMessage = ({ user }) => (
  <div>
    <h4>Welcome {user.name}</h4>
  </div>
);

const LoginScreen = ({ onLogin }) => (
  <div>
    <h2>Please Log in</h2>
    <button onClick={onLogin}>Login</button>
  </div>
);
