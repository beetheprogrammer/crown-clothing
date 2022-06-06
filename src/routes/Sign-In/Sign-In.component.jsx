import { getRedirectResult } from "firebase/auth";
import React, { useEffect } from "react";
import SignUp from "../../components/Sign-up/Sign-up.component";
import {
	auth,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
		// console.log("response.user", user);
	};

	return (
		<div>
			<h1>SignIn</h1>
			<button onClick={logGoogleUser}>Sign in with google</button>
      <SignUp/>
		</div>
	);
};

export default SignIn;
