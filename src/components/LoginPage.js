import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider, GoogleOneTapLogin } from '@react-oauth/google';

const LoginPage = () => {
  const handleSuccess = (response) => {
    console.log(response);
  }

  const handleFailure = (response) => {
    console.log(response);
  }

  useEffect(() => {
    GoogleOneTapLogin.init({
      onSuccess: handleSuccess,
      onFailure: handleFailure,
      clientId: `${process.env.REACT_APP_GOOGLE_API_TOKEN}`,
    });
    return () => {
      GoogleOneTapLogin.cleanup();
    };
  }, []);

  return (
    <div className="">
      <div className="">
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
          <button type="button" className="" id="google-one-tap-button">
            <FcGoogle className="" /> Sign in with Google
          </button>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default LoginPage;
