import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function App() {
  const [session] = useSession();

  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    if (response && response.credential) {
      signIn('google', { id_token: response.credential });
    }
  };

  const handleLogout = () => {
    signOut();
  };
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      google.accounts.id.initialize({
        callback: handleCredentialResponse
      });
      google.accounts.id.prompt(); 
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {session ? (
        <div>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={handleLogout}>Sign out</button>
        </div>
      ) : (
        <div>
          <div id="buttonDiv"></div>
        </div>
      )}
    </div>
  );
}

export default App;

