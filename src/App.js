import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import GoogleLogin from 'react-google-login';

function App() {
  const [session] = useSession();

  const handleLogin = async (response) => {
    if (response && response.tokenId) {
      signIn('google', { id_token: response.tokenId });
    }
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <div>
      {session ? (
        <div>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={handleLogout}>Sign out</button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={handleLogin}
          onFailure={handleLogin} 
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
}

export default App;

