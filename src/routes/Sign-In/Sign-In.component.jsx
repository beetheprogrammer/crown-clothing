import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log("response.user", user);
  }

  return (
		<div>
			<h1>SignIn</h1>
			<button onClick={logGoogleUser}>Sign in with google</button>
		</div>
	);
}

export default SignIn